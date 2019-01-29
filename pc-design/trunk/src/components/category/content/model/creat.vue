<template>
    <div class="creatmodel">
        <h6 class="app-title">修改模型字段
          <el-tooltip
            class="item"
            content="左侧创建成功的内容模型将会显示在内容管理的新建页面"
            effect="light"
            placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </h6>

        <!--客户信息内容-->
                <div class="d-flex">
                    <div class="left pr20 w60p">
                        <el-table :data="tableData" class="fz14 w100p">
                            <el-table-column
                                    label="字段名称"
                                    width="240"
                                    class="pl15">
                                <template slot-scope="scope">
                                    <p>{{scope.row.label}}</p>
                                    <p v-if="scope.row.permissions[0] == 'DELETABLE'" class="word-num">
                                        <span v-if="scope.row.type.name==='text'||scope.row.type.name==='textarea'">最小字数： {{scope.row.type.min}}；</span>
                                        <span v-if="scope.row.type.name==='text'">最大字数：{{scope.row.type.max}}；</span>
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="类型"
                                    class="pl15"
                                    align="center">
                                <template slot-scope="scope">
                                    <p><span>{{scope.row.type.label}}</span></p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="must"
                                    label="是否必填"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-switch
                                            v-model="scope.row.required"
                                            active-color="#66d3b8"
                                            inactive-color="#b5c3c4"
                                            :active-text="scope.row.required==='true' ? '是' : '否'"
                                            active-value="true"
                                            @change="changeRequired(scope.row)">
                                    </el-switch>
                                </template>

                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="操作"
                                    width="140"
                                    align="center">
                                <template slot="header" slot-scope="scope">
                                    操作
                                    <el-tooltip effect="light" content="点击移除按钮，默认字段将移至右边面板"  placement="top" class="c-pointer" style="width:100px">
                                        <span class="iconfont iconfont-iconfontquestion c-pointer fz16" style="color:#a9b7b7"></span>
                                    </el-tooltip>
                                </template>
                                <template slot-scope="scope">
                                    <el-tooltip content="编辑" placement="top" effect="light">
                                        <span class="iconfont iconfont-edit1 fz16 mr10 c-pointer" @click="edit($event,scope.row)"></span>
                                    </el-tooltip>
                                    <el-tooltip content="上移" placement="top" effect="light">
                                        <span class="iconfont iconfont-up mr10 fz18 c-pointer" @click="moveUp(scope.row)"></span>
                                    </el-tooltip>
                                    <el-tooltip content="下移" placement="top" effect="light">
                                        <span class="iconfont iconfont-down mr10 fz18 c-pointer" @click="moveDown(scope.row)"></span>
                                    </el-tooltip>
                                    <el-tooltip v-if="scope.row.permissions[0] == undefined" disabled placement="top" effect="light">
                                        <span class="iconfont iconfont-yichu forbid fz20 text-gray-l40" ></span>
                                    </el-tooltip>
                                    <el-tooltip  v-if="scope.row.permissions[0] == 'CONCEALABLE'" effect="light" content="移除" placement="top"   class="c-pointer">
                                        <span @click="removeColumnModel(scope.row)" class="iconfont iconfont-yichu fz20 text-gray c-pointer"></span>
                                    </el-tooltip>
                                    <el-tooltip v-if="scope.row.permissions[0] == 'DELETABLE'" effect="light" content="删除"  placement="top" class="c-pointer">
                                        <span class="iconfont iconfont-delete c-pointer fz16" @click="delOtherFiled(scope.row)"></span>
                                    </el-tooltip>

                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="add-model pt20" v-if="addBox"><!--addModelBox-->
                            <el-form v-if="addModelBox" :inline="true" ref="form" :model="form" :rules="codeRules" label-width="80px" class="pr20 pl20 mb20">
                                <el-form-item prop="label">
                                    <el-input v-model="form.label"  maxlength="8" placeholder="请输入字段名称，最多8个字"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-select v-model="form.region.value" placeholder="字段类型">

                                        <el-option v-for="item in  typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item align="center">
                                    <el-switch
                                            v-model="form.required"
                                            active-color="#66d3b8"
                                            inactive-color="#b5c3c4"
                                            :active-text="form.required ? '是' : '否'"
                                            active-value="true">
                                    </el-switch>
                                </el-form-item>

                                <el-form-item>
                                    <el-tooltip effect="light" content="删除"  placement="top" >
                                        <span class="iconfont iconfont-delete fz16 c-pointer" @click="addModelBox=false"></span>
                                    </el-tooltip>
                                </el-form-item>
                                <el-form-item
                                        prop="region.min"
                                        label="最小填写字数"
                                        v-if="form.region.value==='text' || form.region.value==='textarea'"
                                        :rules="[
                                              { type: 'number', message: '最小字数必须为数值', trigger: 'blur'}
                                         ]">
                                    <el-input v-model.number="form.region.min" type="region.min"></el-input>
                                </el-form-item>
                                <el-form-item
                                        label="最大填写字数"
                                        prop="region.max"
                                        v-if="form.region.value==='text'"
                                        :rules="[
                                              { type: 'number', message: '最大字数必须为数值', trigger: 'blur'}
                                         ]">
                                    <el-input v-model.number="form.region.max" type="region.max"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary-com" @click="fieldOperate('form')" class="w170">保存</el-button>
                                </el-form-item>

                            </el-form>

                            <p class="add-botton text-center c-pointer mr20 mb20 ml20 lh40" @click="addModelBox = true">
                                +添加一个字段<span class="text-gray-l30 ml5 fz12">(最多添加10个)</span>
                            </p>
                        </div>
                    </div>
                    <div class="right pl20 w40p">
                        <el-table
                                :data="visibleTableData"
                                class="fz14"
                                style="border-bottom:1px solid #e5e5e5;background: #f9f9f9">
                            <el-table-column
                                    prop="label"
                                    label="字段名称"
                                    width="180">
                                <template slot-scope="scope">
                                    <p class="pl15">{{scope.row.label}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="类型"
                                    class="pl15"
                                    align="center">
                                <template slot-scope="scope">
                                    <p>{{scope.row.type.label}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    width="120"
                                    align="center">
                                <template slot="header" slot-scope="scope">
                                    操作
                                    <el-tooltip effect="light" content="点击添加按钮，移除的默认字段将会还原至左侧面板"  placement="top" class="c-pointer" style="width:100px">
                                        <span class="iconfont iconfont-iconfontquestion c-pointer fz16" style="color:#a9b7b7"></span>
                                    </el-tooltip>
                                </template>
                                <template slot-scope="scope">
                                    <el-tooltip effect="light" content="添加"   placement="top" >
                                        <span @click="resColumnModel(scope.row)" class="iconfont iconfont-jiajian fz20 c-pointer"></span>
                                    </el-tooltip>
                                </template>
                            </el-table-column>
                            <div class="" v-if="visibleTableData.length===0">
                                <p>暂无内容哦~</p>
                                <p>移除的默认字段将会显示在此处</p>
                            </div>
                        </el-table>

                    </div>
                </div>
        <!--删除字段-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="删除模型"
                    append-to-body
                    lock-scroll
                    :visible.sync="delFiled"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>此操作将永久删除该内容，是否继续？</p>
                            <el-form-item class="mt25 text-right mb0">
                                <el-button type="primary-com" class="w60" @click="delSave()">确认</el-button>
                                <el-button class="w60" @click="delFiled = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

        <!--修改字段信息-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="编辑字段详细信息"
                    append-to-body
                    lock-scroll
                    :visible.sync="editModel"
                    width="460px">
                <div class="inner center">
                    <div class="alert-popup">

                        <el-form :model="modelInfo" :rules="codeRules" ref="modelInfo" size="small"  label-width="100px">
                            <el-form-item
                                    prop="label"
                                    label="字段名称:">
                                <el-input v-model="modelInfo.label" maxlength="8" placeholder="请输入字段名称，最多8个字"></el-input>
                            </el-form-item>
                            <el-form-item
                                    label="类型:">
                                <el-select v-model="modelInfo.type.name" class="typeSelect" disabled placeholder="请选择类型">
                                    <el-option
                                            v-for="item in typeOptions"
                                            :label="item.label"
                                            :value="item.value"
                                            :key="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item  label="是否开启:" >
                                <el-switch
                                        v-model="modelInfo.required"
                                        active-color="#66d3b8"
                                        inactive-color="#b5c3c4"
                                        :active-text="modelInfo.required ? '是' : '否'"
                                        active-value="true">
                                </el-switch>
                            </el-form-item>
                            <el-form-item
                                    prop="type.min"
                                    label="最小填写字数"
                                    v-if="modelInfo.type.name==='text' || modelInfo.type.name==='textarea'"
                                    :rules="[
                                              { type: 'number', message: '最小字数必须为数值', trigger: 'blur'}
                                         ]">
                                <el-input v-model.number="modelInfo.type.min" type="type.min"></el-input>
                            </el-form-item>
                            <el-form-item
                                    label="最大填写字数"
                                    prop="type.max"
                                    v-if="modelInfo.type.name==='text'"
                                    :rules="[
                                          { type: 'number', message: '最大字数必须为数值', trigger: 'blur'}
                                     ]">
                                <el-input v-model.number="modelInfo.type.max" type="type.max"></el-input>
                            </el-form-item>

                            <el-form-item class="mt25 text-right">
                                <el-button type="primary-com" class="w60" @click="editSave('modelInfo')">确认</el-button>
                                <el-button class="w60"  @click="editModel = false">取消</el-button>
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
      addBox: true,
      form: {// 新建字段
        label: '',
        value: '',
        region: {
          label: '文本框',
          value: 'text',
          max: '',
          min: ''
        },
        permissions: [],
        required: false,
        visible: true
      },
      modelInfo: {
        label: '',
        name: '',
        type: {
          label: '',
          name: '',
          max: '',
          mix: ''
        },
        required: '',
        visible: ''
      },
      typeOptions: [
        {
          value: 'text',
          label: '文本框'
        }, {
          value: 'textarea',
          label: '文本域'
        }, {
          value: 'src',
          label: '图片'
        },
        //          {
        //            value: 'shtml',
        //            label: '简单富文本编辑器'
        //          },
        {
          value: 'html',
          label: '富文本编辑器'
        }],
      codeRules: {
        label: [
          { required: true, message: '请输入字段名称', trigger: 'blur' }
        ]
      },
      modelList: [], // 所有字段信息
      tableData: [], // 初始显示模型字段
      visibleTableData: [], // 隐藏模型字段
      delFiled: false, // 删除字段弹框开关
      addModelBox: false,
      delFiledName: '', // 删除字段名称
      editModel: false// 修改字段弹框开关
    }
  },
  created () {
    this.getModelFiledList()
  },
  methods: {
    getModelFiledList () { // 获取初始模型字段
      this.http5Get(API.modelList).then(res => {
        res.collection.forEach(list => {
          if (this.$route.params.id === list.id) {
            this.tableData = []
            this.visibleTableData = []
            let a = 0
            this.modelList = list.fields_structure.fields
            list.fields_structure.fields.forEach(list => {
              list.required = list.required.toString()
              if (list.visible) {
                this.tableData.push(list)
              } else {
                this.visibleTableData.push(list)
              }
              list.permissions[0] == 'DELETABLE' ? a++ : a
            })
            a >= 10 ? this.addBox = false : this.addBox = true
          }
        })
      })
    },
    // 上移
    moveUp (data) {
      for (let i = 0; i <= this.modelList.length - 1; i++) {
        if (this.modelList[i].name === data.name) {
          if (i > 0) {
            if (this.modelList[i - 1].visible) {
              let oldItem = this.modelList[i - 1]
              this.modelList[i - 1] = this.modelList[i]
              this.modelList[i] = oldItem
              let orderArr = this.modelList.map(item => {
                return item.name
              })
              this.moveColumnName(orderArr.join())
            } else {
              for (let j = i - 1; j >= 0; j--) {
                if (this.modelList[j].visible) {
                  let oldItem = this.modelList[j]
                  this.modelList[j] = this.modelList[i]
                  this.modelList[i] = oldItem
                  let orderArr = this.modelList.map(item => {
                    return item.name
                  })
                  this.moveColumnName(orderArr.join())
                  return
                }
              }
            }
          } else {
            this.$message.error('已经是第一个字段，无法再向上移动！')
            return
          }
        }
      }
    },
    // 下移
    moveDown (data) {
      for (let i = this.modelList.length - 1; i >= 0; i--) {
        if (this.modelList[i].name === data.name) {
          if (i < this.modelList.length - 1) {
            if (this.modelList[i + 1].visible) {
              let oldItem = this.modelList[i + 1]
              this.modelList[i + 1] = this.modelList[i]
              this.modelList[i] = oldItem
              let orderArr = this.modelList.map(item => {
                return item.name
              })
              this.moveColumnName(orderArr.join())
            } else {
              for (let j = i + 1; j < this.modelList.length; j++) {
                if (this.modelList[j].visible) {
                  let oldItem = this.modelList[j]
                  this.modelList[j] = this.modelList[i]
                  this.modelList[i] = oldItem
                  let orderArr = this.modelList.map(item => {
                    return item.name
                  })
                  this.moveColumnName(orderArr.join())
                  return
                }
              }
            }
          } else {
            this.$message.error('已经是最后一个字段，无法再向下移动！')
            return
          }
        }
      }
    },
    // 移动栏目
    moveColumnName (data) {
      this.http5Put(API.moveComtentName + '/' + this.$route.params.id + '/field-sort?field_names=' + data).then(res => {
        this.getModelFiledList()
      })
    },
    delOtherFiled (filedName) { // 删除字段按钮
      this.delFiled = true
      this.delFiledName = filedName.name
    },
    delSave () { // 确认删除字段
      this.delFiled = false
      this.http5Put(API.delField, {
        field_name: this.delFiledName,
        archive_model_id: this.$route.params.id
      }).then(res => {
        this.tableData = res.data.fields_structure.fields
        this.getModelFiledList()
      })
    },
    fieldOperate (form) { // 新增字段
      this.typeOptions.forEach(item => {
        if (item.value === this.form.region.value) {
          this.form.region.label = item.label
        }
      })
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.form.region.value === 'text' && this.form.region.min >= this.form.region.max) {
            this.$message({
              message: '最大字数至少比最小字数大1',
              type: 'warning'
            })
            //                callback(new Error('最大字数至少比最小字数大1'))
          } else {
            this.addModelBox = false
            this.http5Put(API.addField, {
              'archive_model_id': this.$route.params.id,
              'model_field':
                    {
                      'label': this.form.label,
                      'type':
                        {
                          'label': this.form.region.label,
                          'name': this.form.region.value,
                          'max': this.form.region.max,
                          'min': this.form.region.min,
                          'options': {
                            label: '',
                            value: ''
                          }
                        },
                      'permissions': [],
                      'required': this.form.required,
                      'visible': true
                    }
            }).then(res => {
              this.form = {// 新建字段
                label: '',
                value: '',
                region: {
                  label: '文本框',
                  value: 'text',
                  max: '',
                  min: ''
                }
              }
              this.tableData = []
              this.visibleTableData = []
              let len = 1
              res.data.fields_structure.fields.forEach(list => {
                list.required = list.required.toString()
                if (list.visible) {
                  this.tableData.push(list)
                } else {
                  this.visibleTableData.push(list)
                }
                list.permissions[0] === 'DELETABLE' ? len++ : len
                len > 10 ? this.addBox = false : this.addBox = true
              })
              console.log(res, 'res-add')
            })
          }
        } else {
          return false
        }
      })
    },
    modelNameEdit (e, val) { // 修改字段标题
      let params = {
        archive_model_id: this.$route.params.id,
        model_field: val
      }
      this.http5Put(API.editModelFiled, params).then(res => {})
    },
    changeRequired (val) { // 修改字段是否必填
      let params = {
        archive_model_id: this.$route.params.id,
        model_field: val
      }
      this.http5Put(API.editModelFiled, params).then(res => {})
    },
    removeColumnModel (val) { // 移除内容模型字段
      console.log(val)
      console.log(this.$route.params.id)
      val.visible = false
      val.permissions = ['CONCEALABLE']
      let params = {
        archive_model_id: this.$route.params.id,
        model_field: val
      }
      this.http5Put(API.editModelFiled, params).then(res => {
        this.tableData = []
        this.visibleTableData = []
        res.data.fields_structure.fields.forEach(list => {
          list.required = list.required.toString()
          if (list.visible) {
            this.tableData.push(list)
          } else {
            this.visibleTableData.push(list)
          }
        })
      })
    },
    resColumnModel (val) { // 将移除字段添加到左侧
      val.visible = true
      val.permissions = ['CONCEALABLE']
      let params = {
        archive_model_id: this.$route.params.id,
        model_field: val
      }
      this.http5Put(API.editModelFiled, params).then(res => {
        this.tableData = []
        this.visibleTableData = []
        res.data.fields_structure.fields.forEach(list => {
          list.required = list.required.toString()
          if (list.visible) {
            this.tableData.push(list)
          } else {
            this.visibleTableData.push(list)
          }
        })
      })
    },
    edit (e, data) { // 修改字段信息
      this.editModel = true
      this.modelInfo = JSON.parse(JSON.stringify(data))
    },
    // 保存修改
    editSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modelInfo.type.name === 'text' && this.modelInfo.type.min >= this.modelInfo.type.max) {
            this.$message({
              message: '最大字数至少比最小字数大1',
              type: 'warning'
            })
          } else {
            this.editModel = false
            this.http5Put(API.editModelFiled, {
              'archive_model_id': this.$route.params.id,
              'model_field': this.modelInfo
            }).then(res => {
              this.getModelFiledList()
              console.log(res)
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';
    .creatmodel{
        td,th{
            padding:14px 0!important;
        }
      .el-table {
        th {
          background: $gray-zl5;
          color: $gray-zl6;
        }
      }
      .el-table__body-wrapper {
        color: $black-wd1;
        font-family: "微软雅黑";
      }
      .el-table {
        border: 1px solid $m-border;
        border-bottom: 0;
      }
      .el-table th.is-leaf, .el-table td {
        border-bottom: 1px solid $grayLighter;
      }


      .left {
        .iconfont.iconfont-yichu, .iconfont.iconfont-edit1, .iconfont.iconfont-delete, .iconfont.iconfont-down, .iconfont.iconfont-up {
          color: $green-gray;
          &.forbid {
            color: lighten($green-gray, 15%);
            cursor: no-drop;
          }
        }
        .add-model {
          border: 1px solid $grayLighter;
          border-top: 0;
          p.add-botton {
            color: $green-ct;
            border: 1px dashed $green-ct;
          }
          .el-form {
            border-bottom: 1px solid $grayLighter;
            &:after {
              clear: both;
              content: '';
              display: block;
              width: 0;
              height: 0;
              visibility: hidden;
            }
            .el-form-item__content {
              margin: 0 !important;
            }
            .el-form-item {
              width: 23%;
              float: left;
              margin-right: 2.6%;
              display: flex;
              height: 34px;
              text-align: center;
              &:nth-child(4) {
                margin-right: 0;
                height: 34px;
              }
              &:nth-child(1), &:nth-child(2) {
                width: 30%;
              }
              &:nth-child(3), &:nth-child(4) {
                width: 16%;
              }
              .el-form-item__content {
                flex: 1;
              }
              button.el-button--success {
                width: 100%;
                background-color: $grayLighter;
                border-color: $grayLighter;
              }
              &:nth-child(5), &:nth-child(6), &:nth-child(7) {
                width: 30%;
                .el-form-item__label {
                  width: 96px !important;
                }
              }
            }
          }
        }
      }

    }
    .el-table__header-wrapper, .el-table__footer-wrapper{
        border:1px solid #fff;
    }
    .creatmodel .el-table th.is-leaf:first-child, .creatmodel .el-table td:first-child{
         padding-left: 20px!important;
     }
    .el-tooltip__popper{
        max-width:180px;
    }
</style>
