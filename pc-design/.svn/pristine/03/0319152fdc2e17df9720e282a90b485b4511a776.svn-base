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
<template>
  <div class="shop-list">
    <h6 class="app-title">商品分组</h6>
    <div class="dfc">
      <div class="fx1">
        <router-link to="/shop/goods/groupAdd">
          <el-button type="primary">新建商品分组</el-button>
        </router-link>
      </div>
      <el-input
        class="w200"
        placeholder="请输入商品分组"
        size="small"
        v-model="inputSearch"
      >
        <el-button
          @click="search()"
          icon="el-icon-search"
          slot="append"
        ></el-button>
      </el-input>
    </div>
    <el-table
      :data="listItems"
      class="mt20"
      stripe
      style="width: 100%"
    >
      <el-table-column
        align="left"
        label="商品分组名称"
        prop="name"
        width
      >
        <template slot-scope="scope">
          <div class="mb5">
            <span
              class="text-danger"
              v-if="scope.row.show_home"
            >「首页显示」</span>
            <span v-text="scope.row.name"></span>
          </div>
          <p
            class="break-word text-gray"
            v-text="scope.row.introduction"
          ></p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="商品数"
        prop="goods_sum"
        width
      ></el-table-column>
      <el-table-column
        align="center"
        label="子分组数/首页显示"
        prop="is_pickup"
        width
      >
        <template slot-scope="scope">
          <span v-text="scope.row.child_count"></span>/
          <span
            class="text-danger"
            v-if="scope.row.child_index_count != 0"
            v-text="scope.row.child_index_count"
          ></span>
          <span
            class="text-danger"
            v-if="scope.row.child_index_count == 0"
          >--</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="创建时间"
        prop="create_time"
        width
      ></el-table-column>

      <el-table-column
        align="center"
        label="操作"
        prop="operate"
        width
      >
        <template slot-scope="scope">
          <el-tooltip
            :content="!scope.row.show_home? '首页显示' : '取消首页显示'"
            class="item cup mr5"
            effect="dark"
            placement="top"
          >
            <i
              @click="showHome(scope.row.id)"
              class="glyphicon glyphicon glyphicon-home"
            ></i>
          </el-tooltip>
          <el-tooltip
            class="item cup mr5"
            content="查看子分组"
            effect="dark"
            placement="top"
          >
            <i
              @click="jump(scope.row.id,'view')"
              class="glyphicon glyphicon-sort-by-attributes"
            ></i>
          </el-tooltip>
          <el-tooltip
            class="item cup mr5"
            content="编辑"
            effect="dark"
            placement="top"
          >
            <i
              @click="jump(scope.row.id,'edit')"
              class="el-icon-edit"
            ></i>
          </el-tooltip>
          <el-tooltip
            class="item cup"
            content="删除"
            effect="dark"
            placement="top"
          >
            <i
              @click="deleteItem(scope.row.id)"
              class="el-icon-close"
            ></i>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :page-size="pageSize"
      :total="total"
      @current-change="currentChange"
      background
      class="mt40"
      layout="prev, pager, next"
      v-if="listItems.length!=0"
    ></el-pagination>
  </div>
</template>

<script>
import API from './API'

function getList () {
  this.$httpGet(API.groupList, {
    query: {
      name: this.inputSearch,
      page_num: this.pageIndex,
      page_size: this.pageSize
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}

export default {
  name: 'groupList',
  data () {
    return {
      inputSearch: '',
      listItems: [],
      total: 0,
      pageSize: 10,
      pageIndex: 1,
      myId: null
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {

    deleteItem (id) {
      this.$confirm('是否确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$httpDelete(API.group, {
          resource: {
            id: id
          }
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.pageIndex = 1
          Reflect.apply(getList, this, [])
        })
      })
    },

    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },

    jump (id, type) {
      if (type === 'view') {
        this.$router.push({ path: '/shop/group/listChildren/' + id })
      }
      if (type === 'edit') {
        this.$router.push({ path: '/shop/goods/groupEdit/' + id })
      }
    },
    showHome (id) {
      this.httpPut(API.groupRecommend, {
        resource: {
          'id': id
        }
      }).then((res) => {
        Reflect.apply(getList, this, [])
      })
    },
    search () {
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    }
  }
}
</script>
