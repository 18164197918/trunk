<template>
  <div class="mt30 pagination-box">
    <el-pagination layout="prev, pager, next"
                   :page-size="meta.page_size"
                   :total="meta.total"
                   :current-page="meta.page_num"
                   @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    meta: {},
    refreshList: {}
  },
  methods: {
    currentChange (page_num) {
      this.meta.page_num = page_num
      this.refreshList({ page_num: page_num, page_size: this.meta.page_size })
    }
  }
}
</script>

<style lang="scss">
  .pagination-box {
    margin-top: 50px;
    text-align: center;
  }
</style>
