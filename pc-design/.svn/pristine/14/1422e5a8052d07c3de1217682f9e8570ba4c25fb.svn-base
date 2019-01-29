<template>
    <div class="content-recovery pt20 pr40 pb30 pl30" style="border-top-left-radius: 4px;">
        <div class="common-tit2"><h4><b>内容回收站</b></h4></div>
        <div class="d-flex bg-gray-l64 pt20 pb20 mb30 pr20 pl20 tb-upper">
            <div id="btns">
                <el-button type="primary-com" class="btn-primary" @click="delCol(1)">删除</el-button>
            </div>
            <div class="search-input">
                <span>标题:</span>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" clearable v-model="searchTitle" @blur="search()" @keyup.enter.native="search()" @clear="clearSearch">
                </el-input>
            </div>
        </div>
        <el-table
                stripe
                @selection-change="handleSelectionChange"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
                    prop="title"
                    label="内容标题"
                    class-name="title-col-width">
            </el-table-column>
            <el-table-column
                    prop="updated_at"
                    label="删除时间"
                    class-name="time-col-width"
                    sortable>
            </el-table-column>
            <el-table-column label="操作" class-name="operation-col-width">
                <template slot-scope="scope">
                    <el-tooltip class="item" content="恢复内容" effect="light" placement="top">
               <span class="iconfont iconfont-undo c-pointer" @click="revCurrent(scope.row)">
              </span>
                    </el-tooltip>
                    <el-tooltip class="item" content="永久删除" effect="light" placement="top">
              <span class="pl14 iconfont iconfont-close c-pointer" @click="delCol(2,scope.row)">
              </span>
                    </el-tooltip>

                </template>
            </el-table-column>
        </el-table>
        <div class="page mt60">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="meta.page_num"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    background
                    :total="meta.total">
            </el-pagination>
        </div>

        <!--删除内容-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="提示"
                    append-to-body
                    lock-scroll
                    :visible.sync="delContent"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup">
                        <el-form size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>
                                <span v-if="delMark===2">此操作将删除该内容，是否继续？</span>
                                <span v-if="delMark===1">此操作将删除你选中的内容，是否继续？</span>
                            </p>
                            <el-form-item class="mt25 operate-box mb0 text-right">
                                <el-button type="primary-com" class="w60" @click="delConfirm()">确认</el-button>
                                <el-button class="w60" @click="delContent = false">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-dialog>
        </div>

        <!--还原内容-->
        <div>
            <el-dialog
                    class="pl40 pr40"
                    title="选择栏目"
                    append-to-body
                    lock-scroll
                    :visible.sync="revContent"
                    width="400px">
                <div class="inner center">

                    <div class="alert-popup">
                        <el-form size="small" class="columnChooseBox" label-width="60px">
                            <el-form-item class="po-re" label="栏目">
                                <el-select v-model="category_id" class="w300" placeholder="请选择">
                                    <el-option
                                            :disabled="resContentModelId  ===item.archive_model_id ? false : true"
                                            v-for="item in equalColum"
                                            :key="item.id"
                                            :label="item.title"
                                            :value="item.id">
                                        <span :class="item.level">{{ item.title }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="mt25 operate-box mb0 text-right">
                                <el-button  :disabled="!!!category_id" type="primary-com" class="w60" @click="chooseColumn()">确认</el-button>
                                <el-button class="w60" @click="revContent = false">取消</el-button>
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
      tableData: [],
      meta: {
        page_num: 1,
        page_size: 10,
        total: null
      },
      equalColum: {}, // 栏目数据
      category_id: null, // 还原选取的父栏目id
      selectConIdList: [], // 选中内容的数组
      delConIdList: [], // 删除内容id的数组
      resContentID: null, // 还原内容id
      resContentModelId: null, // 还原内容的内容模型ID
      delContent: false,
      revContent: false,
      searchTitle: '',
      delMark: null
    }
  },
  methods: {
    archiveTrashedList () { // 获取内容回收站列表
      let param = { page_size: this.meta.page_size, page_num: this.meta.page_num, title: this.searchTitle }
      this.http5Get(API.trashList, { params: param }).then(res => {
        this.tableData = res.collection
        this.meta = res.meta
      }).catch(error =>
        console.log(error)
      )
    },
    getCategoryList () { // 获取栏目树列表
      this.http5Get(API.categoryList
      ).then(res => {
        let arr = res.collection
        console.log(res.collection)
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
        this.columnObjectOptions = arr
        let arr2 = []
        arr.forEach(list => {
          list.level = ''
          arr2.push(list)
          if (list.children) {
            list.children.forEach(item => {
              item.level = 'pl20'

              arr2.push(item)
              if (item.children) {
                item.children.forEach(pro => {
                  pro.level = 'pl40'

                  arr2.push(pro)
                })
              }
            })
          }
        })

        this.equalColum = arr2
      })
    },
    revCurrent (data) { // 回复内容
      this.revContent = true
      this.resColumn = true
      this.resContentID = data.id
      this.resContentModelId = data.model_id
    },
    chooseColumn () {
      this.http5Put(API.revTrashedArchive, { archive_ids: [this.resContentID], status: 'NORMAL', category_id: this.category_id }).then(res => {
        this.revContent = false
        this.archiveTrashedList()
      }).catch(error => console.log(error))
    },
    delCol (msg, data) {
      this.delConIdList = []
      this.delMark = msg
      if (msg === 1) { // 批量删除
        this.delConIdList = this.selectConIdList
      } else if (msg === 2) { // 删除单个
        this.delConIdList.push(data.id)
      }
      if (this.delConIdList.length > 0) {
        this.delContent = true
      }
    },
    delConfirm () {
      let data = { ids: this.delConIdList }
      this.http5Delete(API.rmTrashedArchives, { data }).then(res => {
        this.delContent = false
        this.archiveTrashedList()
      }).catch(error => console.log(error))
    },
    handleSelectionChange (val) {
      this.selectConIdList = []
      val.forEach(item => {
        this.selectConIdList.push(item.id)
      })
    },
    search () {
      this.page_num = 1
      this.archiveTrashedList()
    },
    clearSearch () {
      this.searchTitle = ''
      this.archiveTrashedList()
    },
    handleSizeChange (val) {
      this.meta.page_size = val
      this.archiveTrashedList()
    },
    handleCurrentChange (val) {
      this.meta.page_num = val
      this.archiveTrashedList()
    }
  },
  mounted () {
    this.archiveTrashedList()
    this.getCategoryList()
  }
}
</script>

<style lang="scss">
    @import "../../../../styles/variables";

    .content-recovery {
        background: $white;
        min-height: 100%;
        height: auto;
        .tb-upper {
            justify-content: space-between;
            .el-button.btn-primary {
                background: $green-ct;
                color: $white;
                border-color: $green-ct;
                transition: all 0.4s;
                &:hover {
                    background: lighten($green-ct, 10%);
                    border-color: lighten($green-ct, 10%);
                }
            }
            div.search-input {
                width: 300px;
                display: inline-block;
                .el-input {
                    width: 80%;
                    margin-left: 8px;
                }
            }
        }
        .el-table {
            .el-checkbox__inner:hover {
                border-color: $green-ct;
            }
            .el-checkbox__input.is-checked,
            .el-checkbox__input.is-indeterminate {
                .el-checkbox__inner {
                    background: $green-ct;
                    border-color: $green-ct;
                }
                .el-checkbox__input.is-focus {
                    .el-checkbox__inner {
                        border-color: $green-ct;
                    }
                }
            }
            th {
                color: #000;
                font-weight: bold;
                background: $gray-zl;
            }
            .title-col-width {
                width: 55%;
            }
            .time-col-width {
                width: 45%;
            }
            .operations-col-width {
                width: 5%;
            }
        }
    }
</style>
