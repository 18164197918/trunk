<style lang="scss">
.shop-top-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: $shopTopHeadHeight;
  background: #292c31 url("./images/head_logo.png") no-repeat 18px center;
  padding-left: 194px;

  .left {
    .item {
      line-height: $shopTopHeadHeight;

      &.on {
        background-color: $color-blue;
      }

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }

  .right {
    .head-img {
      width: 39px;
      height: 38px;
      background-image: url("./images/head_user_img.png");
    }

    @mixin line {
      &::before {
        content: "|";
        opacity: 0.5;
        margin: 0 12px;
        transform: translateY(-1px);
        display: inline-block;
      }
    }

    .info {
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 0 15px;

      span + i {
        @include line;
      }
    }

    .entrance {
      a + a {
        @include line;
      }
    }
  }
}
</style>

<template>
  <div class="shop-top-header df justify-between">
    <div class="left df h100p">
      <div
        :class="{'on':nowRoute === 'shop'}"
        class="item w120 text-center text-white fz18 cup"
      >
        <i class="iconfont iconfont-shangcheng mr5 fz22"></i>商城版
      </div>
      <div
        :class="{'on':nowRoute === 'category'}"
        class="item w120 text-center text-white fz18 cup">
        <i class="iconfont iconfont-qiye mr5 fz22"></i>企业版
      </div>
    </div>
    <div class="right df align-center">
      <div class="info mr40 fz13 lh28">
        <i class="text-white">108</i>
        <span class="text-white opa50 pl5">订单数</span>
        <i class="text-white">1056</i>
        <span class="text-white opa50 pl5">粉丝数</span>
        <i class="text-white">28</i>
        <span class="text-white opa50 pl5">待发货订单</span>
      </div>
      <span class="entrance mr40 fz13 text-white">
        <a href="javascript:;">消息</a>
        <router-link to="/bam">个人中心</router-link>
      </span>
      <div class="head-img bg-cover mr20"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-top-header',
  methods: {

  },
  computed: {
    nowRoute () {
      return this.$route.fullPath.split('/')[1]
    }
  }
}
</script>
