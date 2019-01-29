<template>
  <div>
    <h6 class="app-title">
      门店列表 - {{title}}
      <span>
        <i class="iconfont fz14 iconfont-pingfang mr10"></i>
        {{storeName}}
      </span>
    </h6>
    <div class="app-block-lv2">
      <h6>门店库存</h6>
      <el-row class="mb15 mt15">
        <el-col class="w120 pl20">线上渠道库存：</el-col>
        <el-col :span="20">
          <el-radio-group v-model="form.online_stock_mode">
            <el-radio :label="'SHOP_MAIN_STOCK'">使用总仓库存模式</el-radio>
            <el-radio :label="'STORE_INDEPENDENT_STOCK'">使用门店独立库存模式</el-radio>
          </el-radio-group>
          <div
            class="fz12 text-gray-l20 mt10"
          >线上渠道包括公众号、小程序、H5环境中的线上商城等，根据设置使用对应库存</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="w120 pl20">线下渠道库存：</el-col>
        <el-col :span="20">
          <span>使用门店独立库存模式</span>
          <div class="fz12 text-gray-l20 mt10">线下渠道包括门店收银、导购开单等，只使用门店的独立库存</div>
        </el-col>
      </el-row>
    </div>
    <div class="app-block-lv2">
      <h6>维权管理</h6>
      <el-row class="mb15 mt15">
        <el-col class="w120 pl20">维权管理：</el-col>
        <el-col :span="20">
          <el-radio-group v-model="form.rights_management_mode">
            <el-radio :label="'SHOP_UNITY_RIGHTS'">商家统一维权</el-radio>
            <el-radio :label="'STORE_INDEPENDENT_RIGHTS'">门店独立维权</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </div>
    <div class="app-block-lv2">
      <h6>门店物流</h6>
      <el-row class="mb15 mt15">
        <el-col class="w120 pl20">门店物流：</el-col>
        <el-col :span="20">
          <el-radio-group v-model="form.delivery_mode">
            <el-radio :label="'SHOP_UNITY_SETTING'">使用通用配送设置</el-radio>
            <el-radio :label="'STORE_INDEPENDENT_SETTING'">门店独立配送设置</el-radio>
          </el-radio-group>
          <div class="mt10">
            <el-checkbox v-model="form.able_pickup_service">支持为商家订单提供自提服务</el-checkbox>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="text-center">
      <el-button
        @click="submit()"
        type="primary"
      >保存</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </div>
  </div>
</template>

<script>
import API from './API'
export default {
  data () {
    return {
      title: '门店设置',
      form: {
        'online_stock_mode': 'STORE_INDEPENDENT_STOCK',
        'rights_management_mode': 'STORE_INDEPENDENT_RIGHTS',
        'delivery_mode': 'STORE_INDEPENDENT_SETTING',
        'able_pickup_service': true
      }
    }
  },
  created () {
    this.storeName = window.localStorage.getItem('storeName')
    this.$httpGet(API.storeConfig, {
      resource: {
        id: this.$route.params.id
      }
    }).then((res) => {
      if (res.data.id !== '0') {
        this.form = res.data
      }
    })
  },
  methods: {
    submit () {
      this.$httpPost(API.storeConfig, {
        resource: {
          id: this.$route.params.id
        },
        data: this.form
      }).then(() => {
        this.$router.back(-1)
      })
    }
  }
}

</script>
