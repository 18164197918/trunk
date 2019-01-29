<template>
  <div>
    <div class="mb10">
      <i class="iconfont fz14 iconfont-pingfang mr10"></i>
      {{storeName}}
    </div>

    <el-tabs
      :value="name"
      @tab-click="goDetail"
      type="card"
    >
      <el-tab-pane
        :key="item.router"
        :label="item.name"
        :name="item.router"
        v-for="item in router"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'delivery',
  data () {
    return {

      title: '',
      storeName: window.localStorage.getItem('storeName'),
      router: [
        {
          'name': '商家配送',
          'router': 'distribution'
        },
        {
          'name': '到店自提',
          'router': 'pickup'
        },
        {
          'name': '地址库',
          'router': 'address'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    goDetail (router) {
      this.$router.push({ name: `store.delivery.${router.name}`, params: { id: this.$route.params.id } })
    }

  },
  props: ['name']

}

</script>
