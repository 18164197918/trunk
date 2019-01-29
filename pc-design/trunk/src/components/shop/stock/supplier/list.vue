<style lang="scss">
</style>

<template>
  <div>
    <h6 class="app-title">供应商管理</h6>
    <div class="app-block-lv2">
      <el-button
        @click="goAdd"
        type="primary"
      >新增供应商</el-button>
    </div>
    <el-table
      :data="listItems"
      style="width: 100%"
      tooltip-effect="dark"
    >
      <el-table-column
        align="left"
        label="编码"
        prop="supplier_code"
      ></el-table-column>

      <el-table-column
        label="供应商名称"
        prop="supplier_name"
      ></el-table-column>
      <el-table-column
        label="单位电话"
        prop="work_telephone"
      ></el-table-column>
      <el-table-column
        label="联系人"
        prop="contacts"
      ></el-table-column>
      <el-table-column
        label="联系电话"
        prop="telephone"
      ></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.use_status"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span
            @click="edit(scope.row)"
            class="text-primary cup mr10"
          >编辑</span>
          <span
            @click="del(scope.row)"
            class="text-primary cup"
          >删除</span>
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
      v-if="total!==0"
    ></el-pagination>
  </div>
</template>
<script>

import API from './API'

function getList () {
  this.$httpGet(API.supplierList, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}

export default {
  data () {
    return {
      pageIndex: 1,
      pageSize: 10,
      listItems: [],
      total: 0
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    // 新增单品
    goAdd () {
      this.$router.push('add')
    },
    // 编辑
    edit (item) {
      this.$router.push({ name: `supplier.edit`, params: { id: item.id } })
    },
    // 删除
    del (item) {
      this.$httpDelete(API.supplier, { resource: { id: item.id } }).then(() => { Reflect.apply(getList, this, []) })
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    }
  }

}

</script>
