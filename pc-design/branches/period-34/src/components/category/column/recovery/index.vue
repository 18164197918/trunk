<template>
    <div class="contmodel pt20 pr40 pb30 pl30" style="border-top-left-radius: 4px;">
        <!--客户信息头部-->
        <div>
            <div class="common-tit2">
                <h4><b>栏目回收站</b></h4>
            </div>
        </div>
        <!--客户信息内容-->
        <div class="d-flex justify-start bg-gray-l64 pt20 pb20 mb30 pr20 pl20">
            <el-button type="primary-com"  class="btn-primary"  @click="delCol(1)" >删除</el-button>
        </div>

        <div>
            <el-table class="table-com" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe>
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="title" label="栏目标题"></el-table-column>
                <el-table-column prop="updated_at" label="删除时间" align="center"></el-table-column>
                <el-table-column prop="operate" width="140" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-tooltip class="item" content="还原" effect="light" placement="top">
                            <span class="iconfont  iconfont-undo c-pointer" @click="resCol(scope.row)"></span>
                        </el-tooltip>
                        <el-tooltip class="item" content="永久删除" effect="light" placement="top">
                            <span class="pl14 iconfont iconfont-close c-pointer" @click="delCol(2,scope.row)"></span>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page mt60">
                <el-pagination
                        background
                        :current-page="meta.page_num"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[10, 20, 30, 40]"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="meta.total">
                </el-pagination>
            </div>
        </div>

        <!--删除内容-->
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
                        <el-form  size="small">
                            <p class="dialog-warn-icon fz14"><span class="iconfont iconfont-warning fz24"></span>此操作将永久删除该栏目，是否继续？</p>
                            <el-form-item class="mt25 operate-box mb0 text-right">
                                <el-button type="primary-com" class="w60" @click="delSave()">确认</el-button>
                                <el-button class="w60" @click="delColumn = false">取消</el-button>
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
                    :visible.sync="resColumn"
                    width="400px">
                <div class="inner center">
                    <div class="alert-popup  resColumnPop">
                        <el-form  size="small" class="columnChooseBox" label-width="60px">
                            <el-form-item  class="po-re" label="栏目">
                                <el-select v-model="category_id"  class="w300" placeholder="请选择">
                                    <el-option label="--根栏目--" :value="0"><b>--根栏目--</b></el-option>
                                    <el-option
                                            v-for="item in equalColum"
                                            :key="item.id"
                                            :label="item.title"
                                            :value="item.id">
                                        <span :class="item.level">{{ item.title }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="mt25 operate-box mb0 text-right">
                                <el-button type="primary-com" class="w60" @click="chooseColumn()">确认</el-button>
                                <el-button class="w60" @click="resColumn = false">取消</el-button>
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
      equalColum: {},
      category_id: 0, // 还原选取的父栏目id
      delColumn: false,
      resColumn: false,
      selectColIdList: [], // 选中栏目的数组
      delColIdList: [], // 删除栏目的数组
      resColumnID: null // 还原栏目id
    }
  },
  created () {
    this.getTrueColumnList()
    this.getColumnList()
  },
  methods: {
    // 获取现有的栏目列表
    getTrueColumnList () {
      this.http5Get(API.trueColumnList
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
    // 获取回收站栏目列表
    getColumnList () {
      this.http5Get(API.columnList
      ).then(res => {
        this.tableData = res.collection
        this.meta = res.meta
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
      this.selectColIdList = []
      val.forEach(item => {
        this.selectColIdList.push(item.id)
      })
    },

    // 删除
    delCol (msg, data) {
      this.delColIdList = []
      if (msg === 1) { // 批量删除
        this.delColIdList = this.selectColIdList
      } else if (msg === 2) { // 删除单个
        this.delColIdList.push(data.id)
      }
      if (this.delColIdList.length > 0) {
        this.delColumn = true
      }
    },
    delSave () {
      this.delColumn = false
      this.http5Delete(API.delOrEditColumn + '?ids=' + this.delColIdList.join(',')
      ).then(res => {
        this.getColumnList()
      })
    },
    // 还原
    resCol (data) {
      this.resColumn = true
      this.resColumnID = data.id
    },
    // 还原栏目
    chooseColumn () {
      this.resColumn = false
      console.log(this.category_id)
      this.http5Put(API.delOrEditColumn + '/' + this.resColumnID + '/change-status', { status: 'ENABLE', parent_id: this.category_id }
      ).then(res => {
        this.getColumnList()
      })
    },
    // 改变每页的个数
    handleSizeChange (data) {
      this.meta.page_size = data
      this.http5Get(API.columnList + '?page_size=' + data + '&page_num=' + this.meta.page_num
      ).then(res => {
        this.tableData = res.collection
        this.meta.page_num = res.meta.page_num
        this.meta.total = res.meta.total
      })
    },
    // 改变页码
    handleCurrentChange (data) {
      this.meta.page_num = data
      this.http5Get(API.columnList + '?page_size=' + this.meta.page_size + '&page_num=' + data
      ).then(res => {
        this.tableData = res.collection
        this.meta.page_num = res.meta.page_num
        this.meta.total = res.meta.total
      })
    }
  }
}
</script>
<style lang="scss">
    @import '../../../../styles/variables';

    /*.contmodel {
        .el-button.btn-primary {
            background: $green-ct;
            color: $white;
            border-color: $green-ct;
            transition: all .4s;

        }

        .el-button.btn-primary:hover, .el-button.btn-primary:focus {
            background: lighten($green-ct, 10%);
            border-color: lighten($green-ct, 10%);
        }

        .el-button + .el-button {
            padding-left: 15px;
        }

        .el-table {
            font-size: 14px;
            color:$black-wd1;
            font-family: "微软雅黑";
            th.is-leaf, td {
                border: none;
            }
            th {
                background: $gray-zl;
                font-weight: bold;
            }
            thead {
                color: $gray-zl1;

            }
        }
        .el-table--small th, .el-table--small td {
            padding: 13px 0;
        }
        .el-switch{
            height:auto;
        }
        .el-switch__label.is-active{
            color: $black-wd1;
        }
        span{
            &.iconfont{
                color: #a9b7b7;
            }
        }
    }*/
    .columnChooseBox{
        /*.el-form-item__content{*/
            .objectTree {
                position: absolute;
                top: 44px;
                overflow: auto;
                z-index: 100;
                width: 100%;
                padding-left: 20px;
                height: auto;
                border-radius: 5px;
                border: 1px solid $m-border;
                .el-tree-node {
                    .el-tree-node__content {
                        height: 34px;
                        line-height: 34px;
                        .el-tree-node__expand-icon{
                            display: none;
                        }
                    }
                }
            }
        /*}*/
    }

</style>
