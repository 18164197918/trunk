<template>
    <div class="contmodel pt20 pr40 pb30 pl30" style="border-top-left-radius: 4px;">
        <!--客户信息头部-->
        <div>
            <div class="common-tit2">
                <h4><b>栏目管理</b></h4>
            </div>
        </div>
        <!--客户信息内容-->
        <div class="d-flex justify-start bg-gray-l64 pt20 pb20 mb30 pr20 pl20">
            <el-button type="primary-com" @click="addColumn(1)">新建</el-button>
            <p class="top-tip lh34 tips">
                <span class="iconfont text-danger iconfont-warning fz20"></span>
                <span>新建按钮只能新建一级栏目</span>
            </p>
        </div>
        <div v-if="dataList.length>0">
            <table class="columnTabHead mb10">
                <thead class="lh40">
                <tr>
                    <th class="pl40">栏目标题</th>
                    <th></th>
                    <th>操作</th>
                </tr>
                </thead>
            </table>
            <el-tree
                    :data="dataList"
                    node-key="id"
                    default-expand-all
                    highlight-current
                    :indent=60
                    draggable
                    class="column-tree"
                    @node-drag-start="handleDragStart"
                    @node-drop="handleDrop"
                    :expand-on-click-node="false">
                    <span class="custom-tree-node  h40  tr" slot-scope="{ node, data }">
                        <span class="td">
                            <p class="h40 lh40">
                                {{data.title}}
                                <el-tooltip v-if="" class="item" content="修改标题" effect="light" placement="top">
                                    <span class="iconfont iconfont-edit1 ml10 c-pointer" @click="edit($event)"></span>
                                </el-tooltip>
                            </p>
                            <el-input class="h40 w200 mt4" :minlength="data.title_field_struct.min" :maxlength="data.title_field_struct.max" v-model="data.title" style="display:none" @blur="columnNameEdit($event,data)"></el-input>
                        </span>
                        <span class="h40 lh40 td">
                            <!--<el-tooltip class="item" content="移动" effect="light" placement="top">-->
                            <!--<span class="iconfont iconfont-move mr10 h40"></span>-->
                            <!--</el-tooltip>-->
                            <!--<el-tooltip class="item" content="移动到" effect="light" placement="top">-->
                            <!--<span @click="removeColumn =true" class="iconfont iconfont-zhuanhuan mr10 h40"></span>-->
                            <!--</el-tooltip>-->
                        </span>
                        <span class="h40 lh40 td">
                            <el-tooltip class="item c-pointer" content="编辑" effect="light" placement="top">
                                <span @click="addColumn(3,data)" class="iconfont iconfont-bianjiedit26 mr10 h40"></span>
                            </el-tooltip>
                            <el-tooltip class="item c-pointer" content="添加" effect="light" placement="top">
                                <span @click="addColumn(2,data)" class="iconfont iconfont-tianjia mr10 h40"></span>
                            </el-tooltip>
                            <el-tooltip class="item c-pointer" content="加入回收站" effect="light" placement="top">
                                <span @click="delCol(data)" class="iconfont iconfont-delete  mr10 h40"></span>
                            </el-tooltip>
                        </span>
                    </span>

            </el-tree>

        </div>

        <div v-else class="none-content">
            <img class="w100p" src="../../assets/none.png" alt="暂无内容">
        </div>

        <!--新建一级栏目-->
        <div>
            <el-dialog
                    class="pl40 pr40 createColumn"
                    :title="operateTitle"
                    append-to-body
                    lock-scroll
                    :visible.sync="creatColumn"
                    width="630px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form ref="seniorColumnInfo" :model="seniorColumnInfo" size="small" label-width="120px">
                            <p v-if="operateId===2" class="top-tip lh34">
                                <span class="iconfont iconfont-warning fz20"></span>
                                <span>最多创建到三级栏目</span>
                            </p>
                            <el-form-item v-if="operateId===2" prop="title" label="上级栏目">
                                <p>{{addColumnTitle}}</p>
                            </el-form-item>
                            <el-tabs type="border-card" v-model="tabsValue" class="column-tabs">
                                <el-tab-pane label="常规" name="1">
                                    <el-form-item
                                            prop="archive_model_id"
                                            :rules="[
                                                        {required: true, message: '请选择内容模型', trigger: 'change'},
                                                    ]"
                                            label="选择内容模型 :">
                                        <template>
                                            <el-select :disabled="operateId === 3" v-model="seniorColumnInfo.archive_model_id" placeholder="请选择">
                                                <el-option
                                                        v-for="item in contentModelList"
                                                        :key="item.id"
                                                        :label="item.name"
                                                        :value="item.id">
                                                </el-option>
                                            </el-select>
                                            <p class="fz12 contentModelTip">(平台提供两条系统默认模型，如需定制拓展可至
                                                <router-link class="c-pointer" to="../content/model/index">内容模型</router-link>
                                                菜单进行编辑)
                                            </p>
                                        </template>
                                    </el-form-item>
                                    <el-form ref="routineColumnInfo" :model="routineColumnInfo" size="small" label-width="120px">
                                        <div v-for="item in columnModelArr">
                                            <!--文本框-->
                                            <el-form-item
                                                    :prop="item.name"
                                                    :rules="[
                                                        {required: item.required, message: '请填写'+item.label, trigger: 'blur'},
                                                        { min: item.type.min, max: item.type.max , message: '长度在 '+item.type.min+'到'+item.type.max +'个字符', trigger: 'blur' }
                                                    ]"
                                                    v-if="item.type.name==='text'"
                                                    :label="item.label">
                                                <el-input class="w380" :maxlength="item.type.max" :minlength="item.type.min" v-model="routineColumnInfo[item.name]"></el-input>
                                            </el-form-item>
                                            <!--文本域-->
                                            <el-form-item
                                                    v-if="item.type.name==='textarea'"
                                                    :prop="item.name"
                                                    :rules="[
                                                        {required: item.required, message: '请填写'+item.label, trigger: 'blur'},
                                                        { min: item.type.min, message: '请填写至少'+item.type.min+'个字符', trigger: 'blur' }
                                                    ]"
                                                    :label="item.label">
                                                <el-input :minlength="item.type.min" v-model="routineColumnInfo[item.name]" class="w380" rows="6" type="textarea"></el-input>  <!--v-model="item.type.value"-->
                                            </el-form-item>
                                            <!--图片-->
                                            <el-form-item
                                                    v-if="item.type.name==='src'"
                                                    :prop="item.name"
                                                    :rules="[
                                                        {required: item.required, message: '请选择'+item.label, trigger: 'change'},
                                                    ]"
                                                    :label="item.label" size="medium">
                                                <bg-img-box class="mr20 " :path="[routineColumnInfo, item.name]"></bg-img-box>
                                            </el-form-item>
                                            <!--简单富文本编辑器-->
                                            <el-form-item
                                                    :prop=" item.name"
                                                    :label="item.label"
                                                    v-if="item.type.name === 'shtml'">
                                                <el-input type="textarea"
                                                          :autosize="{ minRows: 6, maxRows: 8}"
                                                          placeholder="我是简单富文本编辑器"
                                                          v-model="routineColumnInfo[item.name]"
                                                          class="w380">
                                                </el-input>
                                            </el-form-item>
                                            <!--富文本编辑器-->
                                            <el-form-item
                                                    :prop="item.name"
                                                    :label="item.label"
                                                    v-if="item.type.name === 'html'">
                                                <ueditor-wrap v-model="routineColumnInfo[item.name]" :placeholder="'请输入' + item.label"></ueditor-wrap>
                                            </el-form-item>
                                        </div>
                                    </el-form>

                                </el-tab-pane>
                                <el-tab-pane label="高级" name="2">
                                    <p class="form-title">其他</p>
                                    <!--<el-form-item prop="title" label="添加跳转">-->
                                    <!--<el-radio size="medium" class="w130" label="1">默认</el-radio>-->
                                    <!--<el-radio size="medium" class="w130" label="2">模块</el-radio>-->
                                    <!--<el-radio size="medium" class="w130" label="2">链接</el-radio>-->
                                    <!--<el-radio size="mini" class="w130 ml0" label="2">内部链接</el-radio>-->
                                    <!--<el-radio size="mini" class="w130" label="2">外部网址</el-radio>-->
                                    <!--<el-radio size="mini" class="w130" label="2">外部小程序</el-radio>-->
                                    <!--<el-form-item label="小程序APPID">-->
                                    <!--<el-input class="w300" placeholder="输入小程序APPID，可完成指定小程序跳转"></el-input>-->
                                    <!--</el-form-item>-->
                                    <!--</el-form-item>-->
                                    <el-form-item label="可见站点"
                                                  prop="display"
                                                  :rules="[
                                                       {required: true, message: '请选择可见站点', trigger: 'change'}
                                                   ]"
                                                  >
                                        <el-checkbox-group v-model="seniorColumnInfo.display">
                                            <el-checkbox label="PC">PC端</el-checkbox>
                                            <el-checkbox label="MOBILE">移动端</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <p class="form-title">SEO优化</p>
                                    <el-form-item label="SEO页面标题">
                                        <el-input v-model="seniorColumnInfo.seo_title" class="w380" placeholder="请输入标题名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="SEO关键词">
                                        <el-input v-model="seniorColumnInfo.seo_keywords" type="textarea" class="w380" placeholder="请输入关键词"></el-input>
                                    </el-form-item>
                                    <el-form-item label="SEO描述">
                                        <el-input v-model="seniorColumnInfo.seo_description" type="textarea" class="w380" placeholder="请输入描述内容"></el-input>
                                    </el-form-item>
                                </el-tab-pane>
                            </el-tabs>
                            <el-form-item class="operate-box mt20  mb0 text-right">
                                <el-button type="primary-com" class="w60" @click="columnSave('routineColumnInfo')">确认</el-button>
                                <el-button class="w60" @click="creatColumn = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>
        <!--删除栏目-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="提示"
                    append-to-body
                    lock-scroll
                    :visible.sync="delColumn"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>此操作将该栏目放入回收站，是否继续？</p>
                            <el-form-item class="mt25 operate-box mb0 text-right">
                                <el-button type="primary-com" class="w60" @click="doDelCol()">确认</el-button>
                                <el-button class="w60" @click="delColumn = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

    </div>
</template>
<script>
import bgImgBox from '../../../common/bg-img-box.vue'
import API from './API'

export default {
  data () {
    return {
      columnObjectOptions: [],
      dataList: [],
      multipleSelection: [],
      creatColumn: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      routineColumnInfo: {},
      routineColumnRules: {},
      seniorColumnInfo: {},
      delColumn: false,
      columnModelArr: [], // 栏目模型字段数组
      parent_id: '0', // 父栏目id
      edit_id: '', // 编辑栏目id
      delColumnId: null, // 删除栏目的id
      operateId: null, // 操作ID
      operateTitle: null, // 操作标题
      addColumnTitle: '', // 添加栏目的父栏目的标题
      category_id: '', // 拖拽的当前栏目id
      to_category_id: '', // 拖拽到的栏目
      tabsValue: '1',
      contentModelList: []// 内容模型列表
    }
  },
  components: {
    bgImgBox
  },
  created () {
    this.getColumnModel()
    this.getColumnList()
    this.getModelFiledList()
  },
  methods: {
    // 获取栏目模型
    getColumnModel () {
      this.http5Get(API.getColumnModel
      ).then(res => {
        this.columnModelArr = []
        res.data.fields_structure.fields.forEach(item => {
          if (item.visible) {
            this.columnModelArr.push(item)
          }
        })
      })
    },
    getModelFiledList () { // 获取内容模型列表
      this.http5Get(API.contModelList).then(res => {
        this.contentModelList = res.collection
      })
    },
    // 获取栏目列表
    getColumnList () {
      this.http5Get(API.columnList
      ).then(res => {
        let arr = res.collection
        arr.sort((a, b) => {
          if (a.parent_id > b.parent_id) {
            return 1
          } else if (a.parent_id < b.parent_id) {
            return -1
          } else {
            if (a.sort_rank > b.sort_rank) {
              return 1
            } else {
              return -1
            }
          }
        })
        for (let i = arr.length; i--;) {
          if (arr[i].parent_id > 0) {
            let obj = arr.pop()
            arr.forEach(item => {
              if (item.id === obj.parent_id) {
                item.children = item.children || []
                item.children.unshift(obj)
              }
            })
          }
        }
        arr.forEach(lst => {
          lst.level = 1
          if (lst.children) {
            lst.children.forEach(item => {
              item.level = 2
              if (item.children) {
                item.children.forEach(pro => {
                  pro.level = 3
                })
              }
            })
          }
        })
        this.dataList = arr
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
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    edit (e) {
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.nextSibling.style.cssText = 'display:block'
      e.target.parentNode.nextSibling.childNodes[1].focus()
    },
    // 修改栏目标题
    columnNameEdit (e, val) {
      if (val.title.length < val.title_field_struct.min) {
        this.$message.error('栏目标题的长度最小为' + val.title_field_struct.min)
        return
      }
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.previousSibling.style.cssText = 'display:block'
      this.http5Put(API.addOrDelOeEditColumn + '/' + val.id + '/base-info', { title: val.title }
      ).then(res => {
        this.getColumnList()
      })
    },
    // 新建栏目或者编辑栏目
    addColumn (msg, data) {
      this.tabsValue = '1'
      this.creatColumn = true
      this.operateId = msg
      this.routineColumnInfo = {}
      // 新增一级栏目
      if (msg === 1) {
        this.operateTitle = '新建一级栏目'
        this.parent_id = '0'
        this.seniorColumnInfo = {
          display: ['PC', 'MOBILE']
        }
      }
      // 新增二级栏目或者三级栏目
      else if (msg === 2) {
        this.parent_id = data.id
        this.addColumnTitle = data.title
        if (data.level === 1) { // 新增二级栏目
          this.operateTitle = '新建二级栏目'
        } else if (data.level === 2) { // 新增三级栏目
          this.operateTitle = '新建三级栏目'
        }
        this.seniorColumnInfo = {
          display: ['PC', 'MOBILE']
        }
      }
      // 编辑栏目
      else if (msg === 3) {
        this.parent_id = data.parent_id
        this.edit_id = data.id
        this.operateTitle = '编辑栏目'
        this.http5Get(API.getColumnById + '/' + data.id
        ).then(res => {
          if (this.$refs['seniorColumnInfo'] && this.$refs['routineColumnInfo']) {
            this.$refs['seniorColumnInfo'].resetFields()
            this.$refs['routineColumnInfo'].resetFields()
          }
          this.routineColumnInfo = res.data.model_fields
          this.seniorColumnInfo.archive_model_id = res.data.archive_model_id
          this.seniorColumnInfo.seo_title = res.data.seo_title
          this.seniorColumnInfo.seo_keywords = res.data.seo_keywords
          this.seniorColumnInfo.seo_description = res.data.seo_description
          if (res.data.display === 'BOTH') {
            this.seniorColumnInfo.display = ['PC', 'MOBILE']
          } else {
            let arr = []
            this.seniorColumnInfo.display = arr.push(res.data.display)
          }
        })
      }
      if (this.$refs['seniorColumnInfo'] && this.$refs['routineColumnInfo']) {
        this.$refs['seniorColumnInfo'].resetFields()
        this.$refs['routineColumnInfo'].resetFields()
      }
    },
    // 新建或者编辑栏目
    columnSave (formName) {
      this.seniorColumnInfo.parent_id = this.parent_id
      this.seniorColumnInfo.model_fields = this.routineColumnInfo
      let validNum = 0
      if (this.operateId !== 3) {
        this.$refs['seniorColumnInfo'].validate((valid, message) => {
          if (valid) {
            validNum++
          } else {
            for (let i in message) {
              if (message[i] && message[i][0] && message[i][0].field === 'archive_model_id') {
                this.$message.error('请核对常规表单是否都填写正确！')
                this.tabsValue = '1'
              }
            }
            return false
          }
        })
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          validNum++
        } else {
          this.$message.error('请核对常规表单是否都填写正确！')
          this.tabsValue = '1'
          return false
        }
      })
      if ((this.operateId !== 3 && validNum === 2) || (this.operateId === 3 && validNum === 1)) {
        if (this.seniorColumnInfo.display && this.seniorColumnInfo.display.sort().toString() === 'MOBILE,PC') {
          this.seniorColumnInfo.display = 'BOTH'
        } else {
          this.seniorColumnInfo.display && (this.seniorColumnInfo.display = this.seniorColumnInfo.display.toString())
        }
        // 新建栏目
        if (this.operateId === 1 || this.operateId === 2) {
          this.http5Post(API.addOrDelOeEditColumn, this.seniorColumnInfo
          ).then(res => {
            this.creatColumn = false
            this.getColumnList()
          })
          // 修改栏目
        } else if (this.operateId === 3) {
          this.http5Put(API.addOrDelOeEditColumn + '/' + this.edit_id, this.seniorColumnInfo
          ).then(res => {
            this.creatColumn = false
            this.getColumnList()
          })
        }
      }
    },

    // 弹出删除框
    delCol (data) {
      this.delColumn = true
      this.delColumnId = data.id
    },
    // 删除函数
    doDelCol () {
      this.http5Put(API.addOrDelOeEditColumn + '/' + this.delColumnId + '/change-status', { status: 'DISABLE' }
      ).then(res => {
        this.delColumn = false
        this.delColumnId = null
        this.getColumnList()
      })
    },
    // 拖拽开始  @node-drag-start="handleDragStart"
    handleDragStart (node, ev) {
    },
    // 拖拽成功
    handleDrop (draggingNode, dropNode, dropType, ev) {
      this.category_id = draggingNode.data.id
      if (dropType === 'inner') {
        this.to_category_id = dropNode.data.id
        this.http5Put(API.moveColumn, { category_id: this.category_id, to_category_id: this.to_category_id }
        ).then(res => {
          this.getColumnList()
        }).catch(err => {
          this.getColumnList()
        })
      } else {
        this.to_category_id = dropNode.data.parent_id
        this.http5Put(API.moveColumn, { category_id: this.category_id, to_category_id: this.to_category_id }
        ).then(res => {
          let columnArr = []
          if (dropNode.parent && dropNode.parent.data) {
            dropNode.parent.data.forEach(lst => {
              columnArr.push(lst.id)
            })
            this.http5Put(API.sortColumn + columnArr.join(',')
            ).then(res => {
              this.getColumnList()
            }).catch(err => {
              this.getColumnList()
            })
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';

    .columnTabHead {
        width: 100%;
        thead {
            background: $gray-fh1;
        }
        th {
            width: 40%;
            font-weight: bold;
            &:last-child {
                width: 20%;
            }
        }
    }

    .createColumn {
        .el-tabs {
            min-height: 630px;
        }
        .form-title {
            line-height: 34px;
            font-size: 14px;
            font-weight: bold;
            border-bottom: 1px solid $m-border;
            margin-bottom: 20px;

        }
    }

    .column-tree {
        .el-tree-node {
            border: 1px solid $m-border;
            padding: 2px;
            margin-bottom: 10px;
            cursor: move;
            .el-tree-node__content {
                cursor: move;
                background: $gray-wd3;
                height: 40px;
                position: relative;
                .tr {
                    width: 100%;
                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: space-between;
                    .td {
                        flex: 2;
                        height: 40px;
                        &:last-child {
                            flex: 1;
                        }
                    }
                }
            }
            .el-tree-node__children {
                .el-tree-node {
                    border: none;
                    margin-bottom: 0px;
                }
                .tr {
                    background: $white;
                    border-bottom: 1px solid $m-border;
                }
                .el-tree-node__content {
                    border: none;
                    background: $white;
                }

            }
            .td {
                &:nth-child(2) {
                    margin-left: -24px;
                }
            }
            .el-tree-node__children {
                .td {
                    &:nth-child(2) {
                        margin-left: -84px;
                    }
                }
                .el-tree-node__children {
                    .td {
                        &:nth-child(2) {
                            margin-left: -144px;
                        }
                    }
                }
            }
        }
    }

    form label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .contentModelTip {
        color: $gray-wd4;
        a {
            color: $green-ct;
        }
    }
</style>
