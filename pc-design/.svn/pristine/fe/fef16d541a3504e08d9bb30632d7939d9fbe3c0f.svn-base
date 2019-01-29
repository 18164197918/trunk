<template>
  <div class="mt30 pagination-box">
    <el-pagination
      :current-page="pagination.current_page"
      :page-size="pagination.per_page"
      :total="pagination.total"
      @current-change="currentChange"
      layout="prev, pager, next"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pagination: {
      type: Object,
      default () {
        return {}
      }
    },
    refreshList: {}
  },
  methods: {
    currentChange (currentPage) {
      this.refreshList({
        page: currentPage,
        per_page: this.pagination.per_page
      })
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
