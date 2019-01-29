<template>
    <div class="">
        <h6 class="app-title">内容模型
          <el-tooltip
            class="item"
            content="最多可添加20条内容模型"
            effect="light"
            placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </h6>

        <div class="app-block-lv2">
          <el-button type="primary-com" @click="creatModel = true">新建</el-button>
          <el-button class="ml15" @click="alertConfirm(0)">删除</el-button>
        </div>
        <div>
            <el-table class="table-com" ref="multipleTable" :data="modelList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe>

                <el-table-column type="selection" :selectable='checkboxT' width="40" class="text-right" style="padding-right:0"></el-table-column>
                <el-table-column prop="name" label="模型名称">
                    <template slot-scope="scope">
                        <p>{{scope.row.name}}<span class="iconfont iconfont-edit1 ml10 c-pointer" @click="edit($event,scope.row)"></span></p>
                        <el-input v-model="scope.row.name" style="display: none" maxlength="12" @blur="modelNameEdit($event,scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间" align="center"></el-table-column>
                <el-table-column prop="updated_at" label="修改时间" align="center"></el-table-column>
                <el-table-column prop="album" label="相册开启" align="center">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row.value"
                                active-color="#66d3b8"
                                inactive-color="#b5c3c4"
                                :active-text="scope.row.value=='true' ? '是' : '否'"
                                active-value="true"
                                @change="albumStatus($event,scope.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="operate" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-tooltip effect="light" content="编辑"  placement="top" >
                            <span class="iconfont iconfont-edit1 c-pointer" @click="editModelField(scope.row)"></span>
                        </el-tooltip>
                        <el-tooltip effect="light" content="删除"  placement="top" >
                            <span v-if="scope.row.grade === 'NORMAL'" class="pl14 iconfont iconfont-close c-pointer fz14" @click="alertConfirm(1,scope.row)"></span>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--新建内容模型-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="新建模型"
                    append-to-body
                    lock-scroll
                    :visible.sync="creatModel"
                    width="460px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form ref="modelInfo" :rules="codeRules"  :model="modelInfo" size="small" label-width="90px">
                            <el-form-item  prop="modelName" label="模型名称:">
                                <el-input v-model="modelInfo.modelName" maxlength="12" placeholder="请输入模型名称，最多12字" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item  label="相册启用:">
                                <el-switch
                                        v-model="albumShow"
                                        active-color="#66d3b8"
                                        inactive-color="#b5c3c4"
                                        :active-text="albumShow ? '是' : '否'">
                                </el-switch>
                            </el-form-item>
                            <el-form-item class="text-right mb0">
                                <el-button type="primary-com" class="w60" @click="creatModelSave('modelInfo')">确认</el-button>
                                <el-button class="w60" @click="creatModel = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

    </div>

</template>
<script>
import API from './API'
export default {
  data () {
    return {
      albumShow: false, // 相册启用开关
      dialogSetMap: [
        { title: '批量删除内容模型', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将删除选中的内容模型，是否继续？' },
        { title: '删除内容模型', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将删除此内容模型，是否继续？' }
      ],
      modelList: [], // 获取内容模型列表
      delModel: '', // 删除内容模型
      delId: '', // 删除模型id
      addModelItem: {// 添加内容模型
        id: ''
      },
      modelInfo: {// 新建模型
        modelName: ''
      },
      editModelName: {
        edltId: '',
        name: ''
      },
      multipleSelection: [],
      editModelFieldId: '',
      batchDelSaveId: [], // 批量删除id
      creatModel: false,
      codeRules: {
        modelName: [
          { required: true, message: '请输入模型名称', trigger: 'blur' },
          { max: 12, pattern: /^.{0,12}$/, message: '模型名称最多12字,请重新输入', trigger: 'blur' }
        ]
      }

    }
  },
  created () {
    this.getModelList()
  },
  methods: {
    getModelList () { // 获取模型列表
      let _this = this

      this.http5Get(API.modelList).then(res => {
        _this.modelList = []
        res.collection.forEach(list => {
          _this.modelList.push({
            id: list.id,
            name: list.name,
            value: list.imageable.toString(),
            grade: list.grade,
            created_at: list.created_at,
            updated_at: list.updated_at,
            fields_structure: list.fields_structure
          })
        })
      })
    },

    // 复选框是否能被选中
    checkboxT (row, index) {
      if (row.grade === 'NORMAL') {
        return 1
      } else {
        return 0
      }
    },

    // 简单弹框
    alertConfirm (index, val, name) {
      if (index === 0) {
        this.batchDelSaveId = []
        this.multipleSelection.forEach(list => this.batchDelSaveId.push(list.id))
        if (this.batchDelSaveId.length === 0) {
          this.$message({
            message: '请至少选择一条模型，再进行此操作',
            type: 'warning'
          })
          return
        }
      }
      this.$confirm(this.dialogSetMap[index].label, this.dialogSetMap[index].title, {
        dangerouslyUseHTMLString: true
      }).then(() => {
        if (index === 0) {
          this.http5Delete(API.editModelInfo, {
            data: { 'ids': this.batchDelSaveId }
          }).then(res => this.getModelList())
        } else if (index === 1) {
          this.delModel = false
          this.http5Delete(API.editModelInfo, {
            data: { 'ids': [val.id] }
          }).then(res => this.getModelList())
        }
      })
    },
    creatModelSave (modelInfo) { // 新建模型
      this.creatModel = false
      this.$refs[modelInfo].validate((valid) => {
        if (valid) {
          this.http5Post(API.editModelInfo, {
            name: this.modelInfo.modelName,
            imageable: this.albumShow
          }).then(res => {
            this.addModelItem.id = res.data.id,
            this.getModelList()
          })
        } else {
          this.creatModel = true
          return false
        }
      })
    },
    edit (e, val) { // 修改模型名称按钮
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.nextSibling.style.cssText = 'display:block'
      e.target.parentNode.nextSibling.childNodes[1].focus()
      this.editModelName.edltId = val.id
      this.editModelName.name = val.name
    },
    modelNameEdit (e, val) { // 修改模型名称
      let _this = this
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.previousSibling.style.cssText = 'display:block'
      if (val.name.length == 0) {
        e.target.parentNode.style.cssText = 'display:block'
        e.target.parentNode.previousSibling.style.cssText = 'display:none'
        e.target.focus()
        this.$message({
          message: '请输入模型名称',
          type: 'warning'
        })
      } else {
        this.http5Put(API.editModelInfo, {
          'archive_model_id': this.editModelName.edltId,
          'name': val.name
        })
      }
    },
    albumStatus (e, a) { // 修改相册状态
      this.http5Put(API.editModelInfo, {
        'archive_model_id': a.id,
        'imageable': e
      })
    },
    handleSelectionChange (val) { // 选中行的信息
      this.multipleSelection = val
    },

    editModelField (row) { // 修改模型字段按钮
      this.editModelFieldId = row.id
      this.$router.push({
        path: `creat/${this.editModelFieldId}`
      })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    }
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';
    .contmodel {
        background: $white;
        min-height: 100%;
        height: 100%;
        overflow-y: scroll;
    }
</style>
