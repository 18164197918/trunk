<template>
  <div class="mt30 pagination-box">
    <el-pagination
      layout="prev, pager, next"
      :page-size="pagination.per_page"
      :total="pagination.total"
      :current-page="pagination.current_page"
      @current-change="currentChange"
    >
    </el-pagination>
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
    currentChange (current_page) {
      this.refreshList({ page: current_page, per_page: this.pagination.per_page })
    }
  }
}
</script>

<style lang="less">
  .pagination-box{
    margin-top: 50px;
    text-align: center;
  }
</style>
