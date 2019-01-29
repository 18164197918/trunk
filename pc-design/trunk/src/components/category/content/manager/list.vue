<template>
    <div class="alert-confirm manage-cont" v-if="contList">
        <h6 class="app-title">内容管理</h6>
      <div class="app-block-lv2 df justify-between align-center">
        <div class="d-flex">
          <router-link to="create/1" class="mr5">
            <el-button type="primary-com">新建</el-button>
          </router-link>
          <el-button class="ml5" type="primary-com" @click="openCategoryDialog(multipleSelection)">移动</el-button>
          <el-button class="ml10" @click="alertConfirm(1)">加入回收站</el-button>
        </div>
        <div class="justify-end align-center pl60">

          <el-select v-model="selectDefault" slot="prepend" placeholder="创建时间" class="w100 mt0 mb5 prepend-input">
            <el-option v-for="item in selectBox" :label="item.label" :value="item.value" :key="item.value"></el-option>
          </el-select>

          <el-date-picker
            v-model="dateValue1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="w220 mr20 mt5 mb5"
            @change="dateSearch">
          </el-date-picker>

          <span class="text-nowrap mt5 mb5">栏目：</span>
          <el-select v-model="category_id" @change="getLists" placeholder="请选择栏目" class="mt10">
            <el-option :value="undefined"><b>-- 所有 --</b></el-option>
            <el-option
              v-for="item in equalColum"
              :key="item.id"
              :label="item.title"
              :value="item.id"
              :disabled="item.parent">
                        <span :class="item.level">
                            {{ item.title }}
                        </span>
            </el-option>
          </el-select>

          <span class="text-nowrap ml20 mt5 mb5">标签：</span>
          <el-select v-model="flags"
                     slot="prepend"
                     placeholder="请选择标签"
                     class="mr20 mt5 mb5"
                     multiple
                     filterable
                     allow-create
                     @change="getLists">
            <el-option
              v-for="item in lableList"
              :label="item.title"
              :value="item.name"
              :key="item.id">
            </el-option>
          </el-select>
          <!--<el-button @click="getLists" type="primary-com" class="mr10">搜索</el-button>-->
          <span class="text-nowrap mt5 mb5">标题：</span>
          <el-input v-model="title"
                    class="w200 mt5 mb5"
                    size="small"
                    placeholder="请输入标题"
                    prefix-icon="el-icon-search"
                    @keyup.enter.native="searchEnterFun($event)">
          </el-input>
        </div>
      </div>

        <!--<div class="d-flex justify-between align-center bg-gray-l64 p20 mb30">-->
            <!--<div class="d-flex">-->
                <!--<router-link to="creat/1" class="mr5">-->
                    <!--<el-button type="primary-com">新建</el-button>-->
                <!--</router-link>-->
                <!--<el-button class="ml5" type="primary-com" @click="openCategoryDialog(multipleSelection)">移动</el-button>-->
                <!--<el-button class="ml10" @click="alertConfirm(1)">加入回收站</el-button>-->
            <!--</div>-->
            <!--<div class="justify-end align-center pl60">-->

                <!--<el-select v-model="selectDefault" slot="prepend" placeholder="创建时间" class="w100 mt0 mb5 prepend-input">-->
                    <!--<el-option v-for="item in selectBox" :label="item.label" :value="item.value" :key="item.value"></el-option>-->
                <!--</el-select>-->

                <!--<el-date-picker-->
                        <!--v-model="dateValue1"-->
                        <!--type="daterange"-->
                        <!--range-separator="至"-->
                        <!--start-placeholder="开始日期"-->
                        <!--end-placeholder="结束日期"-->
                        <!--format="yyyy-MM-dd HH:mm:ss"-->
                        <!--value-format="yyyy-MM-dd HH:mm:ss"-->
                        <!--class="w220 mr20 mt5 mb5"-->
                        <!--@change="dateSearch">-->
                <!--</el-date-picker>-->

                <!--<span class="text-nowrap mt5 mb5">栏目：</span>-->
                <!--<el-select v-model="category_id" @change="getLists" placeholder="请选择栏目" class="mt10">-->
                    <!--<el-option :value="undefined"><b>&#45;&#45; 所有 &#45;&#45;</b></el-option>-->
                    <!--<el-option-->
                            <!--v-for="item in equalColum"-->
                            <!--:key="item.id"-->
                            <!--:label="item.title"-->
                            <!--:value="item.id"-->
                            <!--:disabled="item.parent">-->
                        <!--<span :class="item.level">-->
                            <!--{{ item.title }}-->
                        <!--</span>-->
                    <!--</el-option>-->
                <!--</el-select>-->

                <!--<span class="text-nowrap ml20 mt5 mb5">标签：</span>-->
                <!--<el-select v-model="flags"-->
                           <!--slot="prepend"-->
                           <!--placeholder="请选择标签"-->
                           <!--class="mr20 mt5 mb5"-->
                           <!--multiple-->
                           <!--filterable-->
                           <!--allow-create-->
                           <!--@change="getLists">-->
                    <!--<el-option-->
                            <!--v-for="item in lableList"-->
                            <!--:label="item.title"-->
                            <!--:value="item.name"-->
                            <!--:key="item.id">-->
                    <!--</el-option>-->
                <!--</el-select>-->
                <!--&lt;!&ndash;<el-button @click="getLists" type="primary-com" class="mr10">搜索</el-button>&ndash;&gt;-->
                <!--<span class="text-nowrap mt5 mb5">标题：</span>-->
                <!--<el-input v-model="title"-->
                          <!--class="w200 mt5 mb5"-->
                          <!--size="small"-->
                          <!--placeholder="请输入标题"-->
                          <!--prefix-icon="el-icon-search"-->
                          <!--@keyup.enter.native="searchEnterFun($event)">-->
                <!--</el-input>-->
            <!--</div>-->
        <!--</div>-->

        <el-table class="table-com w100p" ref="multipleTable" :data="contList" tooltip-effect="dark" @selection-change="handleSelectionChange" stripe>
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column prop="title" label="内容标题"></el-table-column>
            <el-table-column prop="created_at" label="创建时间" align="center"></el-table-column>
            <el-table-column prop="updated_at" label="修改时间" align="center"></el-table-column>
            <el-table-column label="点击量/伪点击量" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.pv + '/' + scope.row.fake_click}}</p>
                </template>
            </el-table-column>
            <el-table-column label="所属栏目" align="center" width="100">
                <template slot-scope="scope">
                    <p>
                        {{scope.row.category_title}}
                        <!--修改栏目-->
                        <el-tooltip effect="light" content="所属栏目" placement="top">
                            <span class="iconfont iconfont-bianji ml5 c-pointer" @click="openCategoryDialog(scope.row.id,scope.row.model_id)"></span>
                        </el-tooltip>
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="model_name" align="center" label="绑定模型"></el-table-column>
            <el-table-column prop="sort_rank" label="排序" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.sort_rank}}
                        <el-tooltip effect="light" content="修改" placement="top">
                            <span class="iconfont iconfont-bianji ml5 c-pointer" @click="editSortrank($event,scope.row)"></span>
                        </el-tooltip>
                    </p>
                    <el-input class="sort-rank" type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="3" v-model="scope.row.sort_rank" style="display: none" @blur="modelNameEdit($event,scope.row)"></el-input>

                </template>
            </el-table-column>
            <el-table-column prop="updated_at" label="标签" align="center">
                <template slot-scope="scope">
                    <el-badge class="item mr5 flag-item po-re" v-for="item in scope.row.flag_entities" :key="item.id">
                        <el-button class="fz12 pt4 pb4 pr10 pl10 bdr20">{{item.title}}</el-button>
                        <span style="top:-2px;right:-4px;" class="icon w14 h14 bsr po-ab text-weight lh11 c-pointer bg-danger text-white" @click="alertConfirm(3, scope.row, item.name)">×</span>
                    </el-badge>
                </template>
            </el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
                <template slot-scope="scope">
                    <el-tooltip effect="light" content="编辑" placement="top">
                        <router-link :to="'./create/'+scope.row.id"><span class="iconfont iconfont-edit1 c-pointer"></span></router-link>
                    </el-tooltip>
                    <el-tooltip effect="light" content="复制" placement="top">
                        <span class="pl14 iconfont iconfont-fuzhi c-pointer" @click="alertConfirm(2, scope.row)"></span>
                    </el-tooltip>
                    <el-tooltip effect="light" content="加入回收站" placement="top">
                        <span class="pl14 iconfont iconfont-delete c-pointer fz14" @click="alertConfirm(0, scope.row)"></span>
                    </el-tooltip>

                </template>
            </el-table-column>
        </el-table>
        <pagination :meta="meta"  :refresh-list="getLists"></pagination>

        <!--栏目列表 修改栏目弹框-->
        <el-dialog
                class="pl40 pr40"
                title="选择栏目"
                append-to-body
                lock-scroll
                :visible.sync="dialogVisible"
                width="400px">
            <div class="inner center">

                <div class="alert-popup  resColumnPop">
                    <el-form size="small" class="columnChooseBox" label-width="60px">
                        <el-form-item label="栏目">
                            <el-select v-model="modify_category_id2" placeholder="请选择">

                                <el-option
                                        v-for="item in equalColum"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.id"
                                        :disabled="!item.disabled || item.parent">
                                    <!--:disabled="!item.disabled"-->
                                    <span :class="item.level">{{ item.title }} </span>
                                </el-option>

                            </el-select>
                        </el-form-item>
                        <el-form-item class="mb0 text-right">
                            <el-button type="primary-com" class="w60" @click="modifyItemCategory">确认</el-button>
                            <el-button class="w60" @click="dialogVisible=false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import API from './API'
import pagination from '../../common/pagination.vue'

export default {
  data () {
    return {
      contList: null, // 获取初始内容列表
      meta: null,
      title: undefined,
      flags: [],
      created_after: '',
      created_before: '',
      updated_after: '',
      updated_before: '',
      multipleSelection: [],
      dialogSetMap: [
        { title: '删除内容', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将把该条内容加入回收站，是否继续？' },
        { title: '批量删除内容', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将把所选内容加入回收站，是否继续？' },
        { title: '复制内容', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将复制该内容，是否继续？' },
        { title: '删除标签', label: '<span class="iconfont iconfont-warning fz24"></span>此操作将删除该标签，是否继续？' }
      ],
      equalColum: null,
      category_id: undefined,

      dialogVisible: false,
      modify_category_id1: undefined,
      modify_category_id2: undefined,

      dateValue1: '',
      selectBox: [
        { label: '创建时间', value: '1' },
        { label: '修改时间', value: '2' }
      ],
      selectDefault: '1',
      lableList: []
    }
  },
  created () {
    this.getLists()
    this.getLabelList()
    this.getColumnList()
  },
  methods: {
    getLists (obj) {
      obj = obj || {}

      let tempPage = { page_size: obj.page_size || 10, page_num: obj.page_num || 1, title: this.title, flags: this.flags.join(), category_id: this.category_id, created_after: this.created_after, created_before: this.created_before, updated_after: this.updated_after, updated_before: this.updated_before }

      this.http5Get(API.contentList, { params: tempPage }).then(res => {
        this.contList = res.collection
        this.meta = res.meta
      })
    },
    // 打开dialog//修改栏目功能
    openCategoryDialog (obj, modelId) {
      this.equalColum.forEach(item => {
        this.modify_category_id2 = item.title
        if (item.archive_model_id === modelId) {
          item.disabled = true
        } else {
          item.disabled = false
        }
      })

      if (typeof obj === 'object') { // 批量移动栏目
        if (obj.length === 0) {
          this.$message({
            message: '请选择至少一条内容，然后移动栏目',
            type: 'warning'
          })
          return
        } else {
          let modelIdList = []
          obj.forEach(list => {
            modelIdList.push(list.model_id)
          })
          for (let i in modelIdList) {
            if (modelIdList[0] === modelIdList[i]) {
            } else {
              this.$message({
                message: '请选择相同内容模型的内容，移动栏目',
                type: 'warning'
              })
              return
            }
          }
          this.equalColum.forEach(item => {
            this.modify_category_id2 = item.title
            modelIdList.forEach(list => {
              item.archive_model_id === list ? item.disabled = true : item.disabled = false
            })
          })
          this.modify_category_id1 = obj.map(item => item.id)
        }
      } else { // 单个移动栏目
        this.modify_category_id1 = obj.split()
      }
      this.dialogVisible = true
    },

    // 修改数据所属栏目
    modifyItemCategory () {
      this.dialogVisible = false
      this.http5Put(API.changeContColum, {
        'category_id': this.modify_category_id2,
        'archive_ids': this.modify_category_id1
      }).then(() => this.getLists())
    },

    // 获取标签列表
    getLabelList () {
      this.http5Get(API.getLabel).then(res => this.lableList = res.collection)
    },

    // 获取栏目列表
    getColumnList () {
      this.http5Get(API.columnList).then(res => {
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
        let arr2 = []
        arr.forEach(list => {
          list.level = ''
          if (list.children) {
            list.parent = true
          } else {
            list.parent = false
          }
          arr2.push(list)
          if (list.children) {
            list.children.forEach(item => {
              item.level = 'pl20'
              if (item.children) {
                item.parent = true
              } else {
                item.parent = false
              }
              arr2.push(item)
              if (item.children) {
                item.children.forEach(pro => {
                  pro.level = 'pl40'
                  if (pro.children) {
                    pro.parent = true
                  } else {
                    pro.parent = false
                  }
                  arr2.push(pro)
                })
              }
            })
          }
        })
        this.equalColum = arr2
      })
    },

    // 回车搜索标题
    searchEnterFun () {
      this.getLists()
    },

    // 时间筛选
    dateSearch () {
      if (this.selectDefault === '1') { // 创建时间
        this.created_after = this.dateValue1[0]
        this.created_before = this.dateValue1[1]
      } else if (this.selectDefault === '2') { // 修改时间
        this.updated_after = this.dateValue1[0]
        this.updated_before = this.dateValue1[1]
      }
      this.getLists()
    },
    editSortrank (e, val) { // 修改排序按钮
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.nextSibling.style.cssText = 'display:block'
      e.target.parentNode.nextSibling.childNodes[1].focus()
      this.batchDelSaveId = []
      this.batchDelSaveId.push(val.id)
    },
    modelNameEdit (e, val) { // 修改排序
      e.target.parentNode.style.cssText = 'display:none'
      e.target.parentNode.previousSibling.style.cssText = 'display:block'
      this.http5Put(API.addArticle + this.batchDelSaveId + '/base-info', {
        'title': val.title,
        'sort_rank': val.sort_rank
      }).then(res => this.getLists())
    },

    // 选中行的信息
    handleSelectionChange (val) {
      this.multipleSelection = val
    },

    // 简单弹框
    alertConfirm (index, val, name) {
      if (index === 1 && this.multipleSelection.length === 0) {
        this.$message({
          message: '请至少选择一条内容，然后加入回收站',
          type: 'warning'
        })
        return
      }
      this.$confirm(this.dialogSetMap[index].label, this.dialogSetMap[index].title, {
        dangerouslyUseHTMLString: true
      }).then(() => {
        if (index === 0) {
          this.delConfirm(val.id.split())
        } else if (index === 1) {
          this.delConfirm(this.multipleSelection.map(item => item.id))
        } else if (index === 2) {
          this.http5Post(API.addArticle + val.id + '/copy').then(res => this.getLists())
        } else if (index === 3) {
          let arr = []
          val.flags.forEach(list => {
            name === list && (arr = val.flags.filter(x => x !== name))
          })
          this.http5Put(API.addArticle + val.id + '/base-info', {
            title: val.title,
            'flags': arr
          }).then(res => this.getLists())
        }
      })
    },

    // 弹框确认
    delConfirm (ids) {
      this.http5Put(API.changeContStatus, {
        archive_ids: ids,
        'status': 'DELETED'
      }).then(() => this.getLists())
    }
  },
  components: {
    pagination
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';
    /*.alert-confirm{//简单弹框样式*/
        .el-message-box{
            padding-bottom:20px!important;
            span.iconfont{
                color:$m-red1;
                position:relative;
                top:3px;
                margin-right:5px;
            }
            .el-button{
                float:right;
                margin-left:10px;
            }
            .el-button--primary{
                color: #fff;
                background-color: $primary-com;
                border-color: $primary-com;
            }
            .el-button--primary:hover,
            .el-button--primary:focus {
                color: #fff;
                background-color: lighten($primary-com, 5%);
                border-color: lighten($primary-com, 5%);
            }
            .el-button--primary:active {
                background-color: darken($primary-com, 5%);
                border-color: darken($primary-com, 5%);
                color: #fff;
                outline: none;
            }
            .el-button--primary.is-disabled,
            .el-button--primary.is-disabled:active,
            .el-button--primary.is-disabled:focus,
            .el-button--primary.is-disabled:hover {
                color: #fff;
                background-color: lighten($primary-com, 20%);
                border-color: lighten($primary-com, 20%);
            }
            .el-switch__label.is-active {
                color: $black-wd1;
            }

        }
    /*}*/

    .el-date-editor .el-range-separator {
        width: 22px !important;
    }

    .sort-rank input {
        padding: 5px !important;
        padding-right: 0 !important;
        width: 50px !important;
        height: 24px !important;
        line-height: 24px;
        border-radius: 0;
        border-color: $green-ct;
    }

    .manage-cont {
        .flag-item {
            span.icon {
                display: none;
            }
            &:hover {
                span.icon {
                    display: block;
                }
            }
        }
    }
    .prepend-input{
        .el-input--small .el-input__inner{
            background:#f6f6f6;
            border-top-right-radius:0;
            border-bottom-right-radius:0;
            position: relative;
            top: -2px;
            border-right:0;
        }
        &~.el-range-editor--small.el-input__inner{
            border-top-left-radius:0;
            border-bottom-left-radius:0;
        }
    }
</style>
