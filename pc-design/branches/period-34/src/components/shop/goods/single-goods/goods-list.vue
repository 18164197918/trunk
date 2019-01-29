<style lang="scss">
</style>

<template>
  <div>
    <h6 class="app-title">单品库列表</h6>
    <div class="app-block-lv2">
      <div class="df justify-between">
        <div>
          <el-button
            @click="goAdd"
            type="primary"
          >新增单品</el-button>
          <el-button>修改分类</el-button>
          <el-button>删除</el-button>
        </div>
        <div>
          <div class="dib mr20">
            <span class="mr5">单品分类 :</span>
            <el-cascader
              :options="goodsClassify"
              :show-all-levels="true"
              @change="classifyChange"
              class="w200"
              expand-trigger="hover"
              v-model="selectedClassify"
            ></el-cascader>
          </div>
          <div class="dib">
            <span class="mr5">单品名称 :</span>
            <el-input
              @change="searchTitle"
              class="w200"
              placeholder="请输入标题"
              size="small"
              suffix-icon="el-icon-search"
              v-model="title"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodsClassify: [],
      selectedClassify: '',
      title: ''
    }
  },
  methods: {
    // 新增单品
    goAdd () {
      this.$router.push('goodsAdd')
    },

    // 选择商品分类
    classifyChange () {

    },
    searchTitle () {

    }
  }

}

</script>
