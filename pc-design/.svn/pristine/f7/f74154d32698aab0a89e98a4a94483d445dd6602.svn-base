<template>
  <div class="product">
    <div class="product-title">
      <span class="iconfont iconfont-warning text-danger"></span>
      <em class="pl6 text-gray-d15">请选择您要配置的收款平台!</em>
    </div>

    <!--支付选择-->
    <div class="row d-flex align-center mt25">
      <div
        @click="goWxPay()"
        class="d-flex flex-column justify-center col-md-3 h200 bdChange bd-gray mr80"
      >
        <div class="text-center">
          <img
            :src="wxImg"
            alt
            class="w55 h60 dib"
          >
        </div>
        <p class="fz14 text-weight text-center text-gray-d15 mt4">微信平台</p>
        <p class="text-gray-l10 text-center mt15">配置微信支付收款账号</p>
      </div>
      <div
        @click="goBdPay()"
        class="d-flex flex-column justify-center col-md-3 h200 bd-gray bdChange"
      >
        <div class="text-center">
          <img
            :src="bdImg"
            alt
            class="w55 h60"
          >
        </div>
        <p class="fz14 text-weight text-center text-gray-d15 mt4">百度平台</p>
        <p class="text-gray-l10 text-center mt15">配置百度支付收款账号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      bdImg: require('../assets/bd-author-icon.jpg'),
      wxImg: require('../assets/wx-author-icon.jpg')
    }
  },
  methods: {
    goWxPay () {
      this.$router.push('wxPay')
    },
    goBdPay () {
      this.$router.push('bdPay')
    }
  }
}

</script>

<style lang="scss">
@import "../../../styles/init";

.bdChange {
  transition: all 0.3s;

  &:hover {
    border: 1px solid $primary;
  }
}
</style>
