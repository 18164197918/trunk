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
    meta: {
      type: Object,
      default () {
        return {}
      }
    },
    refreshList: {}
  },
  methods: {
    currentChange (pageNum) {
      this.meta.page_num = pageNum
      this.refreshList()
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
