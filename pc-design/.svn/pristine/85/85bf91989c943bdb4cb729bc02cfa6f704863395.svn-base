<template>
    <div class="creatmodel">
        <!--客户信息头部-->
        <h6 class="app-title">栏目模型
          <el-tooltip
            class="item"
            content="左侧创建成功的栏目模型将会显示在栏目管理的新建栏目"
            effect="light"
            placement="right"
          >
            <i class="el-icon-question"></i>
          </el-tooltip>
        </h6>
        <!--客户信息内容-->
        <div class="operate">
            <div class="left">
                <template>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            class="fz14">
                        <el-table-column
                                label="字段名称"
                                class="pl15"
                                width="220">
                            <template slot-scope="scope">
                                <p>{{scope.row.label}}</p>
                                <p v-if="scope.row.permissions[0] == 'DELETABLE' " class="word-num"><span v-if="scope.row.type.min || scope.row.type.min==0">最小字数:{{scope.row.type.min}}；</span><span v-if="scope.row.type.max ||  scope.row.type.max==0">最大字数:{{scope.row.type.max}}</span></p>
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
                                        :active-text="scope.row.required==='true'  ? '是' : '否'"
                                        @change="changeRequired($event,scope.row)"
                                        active-value="true">
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
                                    <span class="iconfont iconfont-edit1 mr10 fz16 c-pointer" @click="edit(scope.row)"></span>
                                </el-tooltip>

                                <el-tooltip content="上移" placement="top" effect="light">
                                    <span class="iconfont iconfont-up mr10 fz18 c-pointer" @click="moveUp(scope.row)"></span>
                                </el-tooltip>
                                <el-tooltip content="下移" placement="top" effect="light">
                                    <span class="iconfont iconfont-down mr10 fz18 c-pointer" @click="moveDown(scope.row)"></span>
                                </el-tooltip>

                                <el-tooltip v-if="scope.row.permissions[0] == 'VALUE_READONLY'" disabled class="forbid" placement="top">
                                    <span class="iconfont iconfont-yichu fz18 c-pointer"></span>
                                </el-tooltip>
                                <el-tooltip v-if="scope.row.permissions[0] == 'CONCEALABLE'" content="移除" placement="top" effect="light" style="cursor: pointer">
                                    <span @click="removeColumnModel(scope.row)" class="iconfont iconfont-yichu fz20 c-pointer"></span>
                                </el-tooltip>
                                <el-tooltip v-if="scope.row.permissions[0] == 'DELETABLE'" content="删除" effect="light" placement="top">
                                    <span class="iconfont iconfont-delete fz16 c-pointer" @click="delOtherFiled(scope.row)"></span>
                                </el-tooltip>

                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="add-model pt20">
                        <div class="add-model-box" v-if="isAddOne">
                            <el-form ref="addOneForm" :model="addOneForm" label-width="80px" class="pr20 pl20 mb20">
                                <el-form-item
                                        prop="label"
                                        :rules="[
                                                    {required:true, message: '请填写字段名称', trigger: 'blur'},
                                                    { max: 8, message: '请填写最多8个字符', trigger: 'blur' }
                                                ]"
                                >
                                    <el-input :maxlength="8" v-model="addOneForm.label" placeholder="请输入名称，最多8个字"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-select v-model="addOneForm.type.name" class="typeSelect" placeholder="请选择类型">
                                        <el-option
                                                v-for="item in typeOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item align="center">
                                    <el-switch
                                            v-model="addOneForm.required"
                                            active-color="#66d3b8"
                                            inactive-color="#b5c3c4"
                                            :active-text="addOneForm.required ? '是' : '否'"
                                            active-value="true">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item>
                                    <el-tooltip content="删除" placement="top" effect="light">
                                        <span class="iconfont iconfont-delete fz16 c-pointer" @click="delAddForm()"></span>
                                    </el-tooltip>
                                </el-form-item>
                                <br/>
                                <el-form-item label="最小填写字数"
                                              prop="type.min"
                                              :rules="[
                                                    {validator:minValidator ,trigger: 'blur'}
                                                ]"
                                              v-if="addOneForm.type.name==='text' || addOneForm.type.name==='textarea'">
                                    <el-input type="type.min" v-model.number="addOneForm.type.min"></el-input>
                                </el-form-item>
                                <el-form-item
                                        label="最大填写字数"
                                        prop="type.max"
                                        :rules="[
                                                    {validator:maxValidator ,trigger: 'blur'}
                                                ]"
                                        v-if="addOneForm.type.name==='text'">
                                    <el-input type="type.max" v-model.number="addOneForm.type.max"></el-input>
                                </el-form-item>
                                <el-form-item class="fr">
                                    <el-button type="primary-com" @click="fieldOperate('addOneForm')" class="w150">保存</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <p class="add-botton text-center c-pointer mr20 mb20 ml20 lh40" v-if="addUpper" @click="addOne">+添加一个字段
                            <span class="text-gray-l30 ml5 fz12">(最多添加10个)</span>
                        </p>
                    </div>
                </template>
            </div>
            <div class="right">
                <el-table
                        :data="visibleTableData"
                        style="width: 100%"
                        class="fz14">
                    <el-table-column
                            prop="label"
                            label="字段名称"
                            width="180">
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
                            prop="address"
                            width="120"
                            align="center"
                            >
                        <template slot="header" slot-scope="scope">
                            操作
                            <el-tooltip effect="light" content="点击添加按钮，移除的默认字段将会还原至左侧面板"  placement="top" class="c-pointer" style="width:100px">
                                <span class="iconfont iconfont-iconfontquestion c-pointer fz16" style="color:#a9b7b7"></span>
                            </el-tooltip>
                        </template>
                        <template slot-scope="scope">
                            <el-tooltip effect="light" content="添加" placement="top">
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

        <!--编辑栏目-->
        <el-dialog
                class="pl40 pr40"
                title="编辑"
                append-to-body
                lock-scroll
                :visible.sync="editModel"
                v-if="modelInfo && modelInfo.type"
                width="460px">
            <div class="inner center">
                <div class="alert-popup">
                    <el-form :model="modelInfo"  ref="modelInfo" size="small" label-width="100px">
                        <el-form-item
                                prop="label"
                                :rules="[
                                        {required: true, message: '请输入字段名称', trigger: 'blur'},
                                        {max: 8,pattern:/^.{0,8}$/, message: '字段名称最多8字,请重新输入', trigger: 'blur'},
                                    ]"
                                label="字段名称:">
                            <el-input :maxlength="8" v-model="modelInfo.label"></el-input>
                        </el-form-item>
                        <el-form-item
                                prop="name"
                                :rules="[
                                        {required: true, message: '请选择字段类型', trigger: 'blur'},
                                    ]"
                                label="类型:">
                            <el-select  :disabled="typeDisabled"   v-model="modelInfo.type.name"   class="typeSelect" placeholder="请选择类型">
                                <el-option
                                        v-for="item in typeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否开启:">
                            <el-switch
                                    v-model="modelInfo.required"
                                    active-color="#66d3b8"
                                    inactive-color="#b5c3c4"
                                    :active-text="modelInfo.required ? '是' : '否'"
                                    active-value="true">
                            </el-switch>
                        </el-form-item>
                        <el-form-item
                                label="最小填写字数:"
                                prop="type.min"
                                :rules="[
                                    {validator:editMinValidator ,trigger: 'blur' }
                                ]"
                                v-if="modelInfo.type.name==='text' || modelInfo.type.name==='textarea'">
                            <el-input-number type="type.min" :controls="false" class="w180" v-model.number="modelInfo.type.min"></el-input-number>
                        </el-form-item>
                        <el-form-item
                                label="最大填写字数:"
                                prop="type.max"
                                :rules="[
                                    {validator:editMaxValidator ,trigger: 'blur' }
                                ]"
                                v-if="modelInfo.type.name==='text'">
                          <el-input-number v-if="modelInfo.permissions[0]==='VALUE_READONLY'" disabled type="type.min"  :controls="false" class="w180" v-model.number="modelInfo.type.max"></el-input-number>
                          <el-input-number v-else type="type.min" :controls="false" class="w180" v-model.number="modelInfo.type.max"></el-input-number>
                        </el-form-item>

                        <el-form-item class="mt25 mb0 text-right">
                            <el-button type="primary-com" class="w60" @click="editSave('modelInfo')">确认</el-button>
                            <el-button class="w60" @click="editModel = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-dialog>
        <!--删除栏目-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="提示"
                    append-to-body
                    lock-scroll
                    :visible.sync="delmodel"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>此操作将该字段永久删除，是否继续？</p>
                            <el-form-item class="mt25 mb0 operate-box text-right">
                                <el-button type="primary-com" class="w60" @click="doDelModel()">确认</el-button>
                                <el-button class="w60" @click="delmodel = false">取消</el-button>
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
// 添加一个字段的初始数据
let initForm = {
  label: '',
  name: '',
  type: {
    label: '文本框',
    name: 'text',
    max: null,
    mix: null
  },
  permissions: [],
  required: false,
  visible: true
}

// 所有的类型

let typeOptions = [
  {
    value: 'text',
    label: '文本框'
  }, {
    value: 'textarea',
    label: '文本域'
  }, {
    value: 'src',
    label: '图片'
  }
  //        {
  //          value: 'shtml',
  //          label: ' 简单富文本编辑器',
  //        },
  //        {
  //          value: 'html',
  //          label: '富文本编辑器',
  //        },
]

export default {
  data () {
    let
      minValidator = (rule, value, callback) => {
        setTimeout(() => {
          if (!Number.isInteger(value) && typeof (value) !== 'undefined' && value !== '') {
            callback(new Error('请输入数字值'))
          } else {
            if (value === null || value === '' || typeof (value) === 'undefined') {
              this.addOneForm.type.min === null
              callback()
            }
            if (!!this.addOneForm.type.max || this.addOneForm.type.max === 0) {
              if (Number(value) >= Number(this.addOneForm.type.max)) {
                callback(new Error('最小值应该小于最大值'))
              }
            }
            callback()
          }
        }, 1000)
      }

    let maxValidator = (rule, value, callback) => {
      setTimeout(() => {
        if (!Number.isInteger(value) && value !== null && value !== '') {
          callback(new Error('请输入数字值'))
        } else {
          if (value === null || value === '') {
            this.addOneForm.type.min === null
            callback()
          }
          if (!!this.addOneForm.type.min || this.addOneForm.type.min === 0) {
            if (Number(value) <= Number(this.addOneForm.type.min)) {
              callback(new Error('最大值应该大于最小值'))
            }
          }
          callback()
        }
      }, 1000)
    }

    let editMinValidator = (rule, value, callback) => {
      setTimeout(() => {
        if (typeof (value) === 'undefined') {
          this.addOneForm.type.min === null
          callback()
          return
        }
        if (!!this.modelInfo.type.max || this.modelInfo.type.max === 0) {
          if (Number(value) >= Number(this.modelInfo.type.max)) {
            callback(new Error('最小值应该小于最大值'))
          }
        }
        callback()
      }, 1000)
    }

    let editMaxValidator = (rule, value, callback) => {
      setTimeout(() => {
        if (typeof (value) === 'undefined') {
          this.addOneForm.type.max === null
          callback()
          return
        }
        if (!!this.modelInfo.type.min || this.modelInfo.type.min === 0) {
          if (Number(value) <= Number(this.modelInfo.type.min)) {
            callback(new Error('最大值应该大于最小值'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    return {
      isAddOne: false, // 是否添加一条信息
      modelList: [], // 所有字段信息
      tableData: [], // 显示字段的信息
      visibleTableData: [], // 移除字段的信息
      editModel: false,
      delModelId: '', // 删除字段ID
      delmodel: false,
      addOneForm: { // 添加字段信息
        label: '',
        name: '',
        type: {
          label: '文本框',
          name: 'text',
          max: null,
          mix: null
        },
        permissions: [],
        required: false,
        visible: true
      },
      modelInfo: {}, // 编辑字段信息
      typeOptions: typeOptions, // 字段类型数组
      minValidator: minValidator, // 最小值校验
      maxValidator: maxValidator, // 最大值校验
      editMinValidator: editMinValidator, // 最小值校验
      editMaxValidator: editMaxValidator, // 最大值校验
      typeDisabled: true // 类型是否可编辑
    }
  },
  created () {
    this.getColumnModel()
  },
  computed: {
    addUpper () { // 添加上限（额外字段最多十个）
      let length = 0
      this.modelList.forEach(item => {
        if (item.permissions[0] === 'DELETABLE') {
          length++
        }
      })
      if (length >= 10) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    // 获取栏目结构
    getColumnModel () {
      this.http5Get(API.getColumnModel
      ).then(res => {
        this.tableData = []
        this.visibleTableData = []
        this.modelList = res.data.fields_structure.fields
        res.data.fields_structure.fields.forEach(item => {
          item.required = item.required.toString()
          if (item.visible) {
            this.tableData.push(item)
          } else {
            this.visibleTableData.push(item)
          }
        })
      })
    },
    // 点击编辑按钮
    edit (data) {
      this.editModel = true
      this.modelInfo = JSON.parse(JSON.stringify(data))
      // 系统字段不可编辑类型
      if (this.modelInfo.permissions[0] === 'VALUE_READONLY' || this.modelInfo.permissions[0] === 'CONCEALABLE') {
        this.typeDisabled = true
      }
      // 自定义字段可编辑类型
      else if (this.modelInfo.permissions[0] === 'DELETABLE') {
        this.typeDisabled = false
      }
      this.$refs['modelInfo'].resetFields()
    },
    // 保存修改
    editSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.editModel = false
          this.editModelAttr(this.modelInfo)
        } else {
          return false
        }
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
      this.http5Put(API.moveColumnName + '?field_names=' + data).then(res => {
        this.getColumnModel()
      })
    },
    // 修改是否必填
    changeRequired (e, val) {
      val.required = e
      this.http5Put(API.addOrEditOrDelColumnModel, val).then(res => {
        this.getColumnModel()
      })
    },
    // 删除栏目字段
    delOtherFiled (val) {
      this.delmodel = true
      this.delModelId = val.name
    },
    doDelModel () {
      this.delmodel = false
      this.http5Delete(API.addOrEditOrDelColumnModel + '/' + this.delModelId
      ).then(res => {
        this.getColumnModel()
      })
    },
    delAddForm () {
      this.isAddOne = false
      this.addOneForm = JSON.parse(JSON.stringify(initForm))
    },
    addOne () {
      this.isAddOne = true
      this.addOneForm = JSON.parse(JSON.stringify(initForm))
    },
    fieldOperate (addOneForm) { // 新增字段
      this.typeOptions.forEach(item => {
        if (item.value === this.addOneForm.type.name) {
          this.addOneForm.type.label = item.label
        }
      })
      // 正则校验
      this.$refs[addOneForm].validate((valid) => {
        if (valid) {
          this.http5Post(API.addOrEditOrDelColumnModel, this.addOneForm
          ).then(res => {
            this.isAddOne = false
            this.addOneForm = JSON.parse(JSON.stringify(initForm))
            this.getColumnModel()
          })
        } else {
          return false
        }
      })
    },
    removeColumnModel (val) { // 移除栏目字段
      val.visible = false
      this.editModelAttr(val)
    },
    resColumnModel (val) { // 恢复栏目字段
      val.visible = true
      this.editModelAttr(val)
    },
    // 修改字段的属性
    editModelAttr (val) {
      this.http5Put(API.addOrEditOrDelColumnModel, val
      ).then(res => {
        this.getColumnModel()
      })
    }
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';

    .creatmodel {
        background: $white;
        min-height: 100%;
        height: auto;
        .operate {
            display: flex;
            flex-wrap: nowrap;
            .el-table td {
                vertical-align: text-bottom;
            }
        }
        .left {
            width: 60%;
            padding-right: 10px;
        }
        .right {
            width: 40%;
            padding-left: 10px;
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

    .right {
        .iconfont.iconfont-jiajian {
            color: $green-gray;
        }
        .el-table tr {
            background: $gray-zl2;
        }
        .el-table {
            border-bottom: 1px solid $grayLighter;
        }
    }

    .word-num {
        color: $gray-wd4;
    }
</style>
