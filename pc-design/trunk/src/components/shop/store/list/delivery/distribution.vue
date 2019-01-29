<style lang="scss">
</style>

<template>
  <div>
    <store-delivery :name="'distribution'"></store-delivery>
    <el-row class="bb-gray h40 mt10">
      <el-col class="w120">商家配送</el-col>
      <el-col :span="20">
        <el-switch
          @change="changeStatus"
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="status"
        ></el-switch>
      </el-col>
    </el-row>
    <el-tabs
      class="mt20"
      type="card"
    >
      <el-tab-pane label="运费模板">
        <my-template></my-template>
      </el-tab-pane>
      <el-tab-pane label="设置">
        <distribution-set
          :opens.sync="opens"
          :status.sync="status"
        ></distribution-set>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import API from '../API'
import storeDelivery from './index'
import myTemplate from './template'
import distributionSet from './distribution-set'
export default {
  name: 'distribution',
  data () {
    return {
      title: '商家配送',
      status: null,
      opens: null
    }
  },
  watch: {
    opens (val) {
      this.opens = val
    }
  },
  created () {},

  methods: {
    changeStatus () {
      if (this.opens) {
        this.$httpPut(API.deliveryStatus, {
          resource: {
            id: this.$route.params.id
          }
        })
      }
    }
  },
  components: {
    storeDelivery,
    myTemplate,
    distributionSet
  }
}
</script>
