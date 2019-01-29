<template>
  <div class="center-top-header h55">
    <div class="top-back  pr40 d-flex justify-end align-center ">
      <span class="fz12 text-gray-l10 ml5 dib p15 c-pointer iconfont iconfont-tuichu"
            @click="goOut()"><i class="ml5">退出</i></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goOut () {
      this.initAxiosHeaders({
        auth: ''
      })
      this.$router.push('/account')
    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/variables';

  .center-top-header {
    position: absolute;
    left: 140px;
    top: 0;
    right: 0;
  }
</style>
