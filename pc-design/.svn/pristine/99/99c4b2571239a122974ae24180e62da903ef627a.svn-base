<template>
  <sp-content :name="'商品分组'" :e-name="'GOODS GROUP'">
    <div class="shop-list">
      <div class="border-bottom-gray mb20 clearfix h30">
        <h4 class="pull-left">商品子分组</h4>
        <div class="pull-right"><a href="javascript:" @click="$router.back(-1)" class="text-link">返回</a>
        </div>
      </div>
      <div>
        <router-link to="/shop/group/add">
          <el-button type="primary" size="small">新建商品分组</el-button>
        </router-link>
        <el-form :inline="true" class="pull-right">
          <el-form-item>
            <el-input
              class="w180"
              size="small"
              placeholder="请输入商品分组"
              v-model="inputSearch">
              <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="listItems"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="子分组名称"
          width=""
          align="left" class="pl20">
          <template slot-scope="scope">
            <div class="mb5"><span class="text-danger" v-if="scope.row.is_show_home">「首页显示」</span><span
              v-text="scope.row.name"></span></div>
            <p class="break-word text-gray" v-text="scope.row.introduction"></p>
          </template>
        </el-table-column>
        <el-table-column
          prop="goods_sum"
          label="商品数"
          width=""
          align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width=""
          align="center">
        </el-table-column>

        <el-table-column
          prop="operate"
          label="操作"
          width=""
          align="center">
          <template slot-scope="scope">
            <el-tooltip class="item cup  mr5" effect="dark" :content="scope.row.is_show_home==0?'首页显示':'取消首页显示'"
                        placement="top">
              <i class="glyphicon glyphicon glyphicon-home" @click="showHome(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item cup mr5" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="edit(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item cup" effect="dark" content="删除" placement="top">
              <i class="el-icon-close" @click="deleteItem(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination v-if="listItems.length!=0" class="mt40" background layout="prev, pager, next"
                     :page-size="pageSize"
                     :current-page="pageIndex"
                     :total="total"
                     @current-change="currentChange">
      </el-pagination>
    </div>
  </sp-content>
</template>

<script>
  import API from './API'
  import router from '@/router'

  function getList () {
    this.httpGet(API.groupList, {
      query: {
        'name'     : this.inputSearch,
        'page'     : this.pageIndex,
        'per_page' : this.pageSize,
        'parent_id': this.$route.params.id,
      },
    }).then((res) => {
      this.listItems = res.data
      this.total     = res.meta.pagination.total
    })
  }

  export default {
    name   : 'groupList',
    data () {
      return {
        inputSearch  : '',
        listItems    : [],
        total        : null,
        pageSize     : 10,
        pageIndex    : 1,
        dialogVisible: false,
        myId         : null,
      }
    },
    created () {
      Reflect.apply(getList, this, [])
    },
    methods: {
      deleteItem (id) {
        this.$confirm('是否确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText : '取消',
          type             : 'warning',
        }).then(() => {
          this.$httpDelete(API.groupSingle, {
            resource: {
              id: id,
            },
          }).then(() => {
            this.$message({
              type   : 'success',
              message: '删除成功!',
            })
            this.pageIndex = 1
            Reflect.apply(getList, this, [])
          })

        })
      },

      comfirmDelete () {
        this.dialogVisible = false
        this.$httpDelete(API.groupSingle, {
          resource: {
            id: this.myId,
          },
        }).then(() => {
          Reflect.apply(getList, this, [])
        })
      },

      edit (id) {

        router.push({path: '/shop/group/edit/' + id})
      },
      currentChange (val) {
        this.pageIndex = val
        Reflect.apply(getList, this, [])
      },

      showHome (id) {
        this.httpPut(API.groupRecommend, {
          resource: {
            'id': id,
          },
        }).then((res) => {
          Reflect.apply(getList, this, [])
        })
      },
      search () {
        this.pageIndex = 1
        Reflect.apply(getList, this, [])
      },
    },
  }
</script>

<style scoped lang="scss">


</style>

<style lang="scss">
  .shop-list {
    .el-input__inner {
      padding: 0 8px !important;
    }
    .el-table th {
      background: #8eafee !important;
      color: #fff;
    }
  }
</style>

