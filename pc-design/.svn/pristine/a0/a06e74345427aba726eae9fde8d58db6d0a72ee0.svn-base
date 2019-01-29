<style lang="scss">
</style>

<template>
  <div>
    <h6 class="app-title">自提点设置</h6>
    <div class="mb20 mt20">
      <el-tabs
        type="card"
        v-model="activeName"
      >
        <el-tab-pane
          label="自提点管理"
          name="first"
        >
          <manage></manage>
        </el-tab-pane>
        <el-tab-pane
          label="设置"
          name="second"
        >
          <set></set>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>

import API from './API'
import manage from './manage.vue'
import set from './set.vue'

function getList () {
  this.$httpGet(API.pickupStationList, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      title: this.title,
      province_code: this.locationData.province,
      city_code: this.locationData.city,
      area_code: this.locationData.area,
      open_status: this.openStatus
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
      total: 0,
      activeName: 'first',
      title: '',
      openStatus: '',
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      statusOptions: [
        { label: '全部', value: '' },
        { label: '开启', value: 1 },
        { label: '关闭', value: 0 }
      ]
    }
  },
  components: { manage, set },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    // 新增自提点
    goAdd () {
      this.$router.push('add')
    },
    // 编辑
    edit (item) {
      this.$router.push({ name: `selfMentionPoint.edit`, params: { id: item.id } })
    },
    // 删除
    del (item) {
      this.$httpDelete(API.pickupStation, { resource: { id: item.id } }).then(() => { Reflect.apply(getList, this, []) })
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    search () {
      Reflect.apply(getList, this, [])
    }
  },
  watch: {
    locationData: {
      handler (newVal) {
        Reflect.apply(getList, this, [])
      },
      deep: true
    }
  }
}

</script>
