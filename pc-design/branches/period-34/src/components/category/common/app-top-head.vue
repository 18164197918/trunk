<template>
  <div class="center-header h80">
    <div class="d-flex h80 po-re">
      <div class="h80  w80 edition-img">
        <img src="../assets/qiyeban.png"
             alt="企业版">
      </div>
      <div class="head-portrait w60 h60 ml30 mt10"
           style="object-fit: cover;"
           v-if="user.user">
        <img :src="user.user.avatar || defaultImg | filterImg"
             alt="头像"
             style='width:60px;height:60px;border-radius:50%;object-fit: cover;'>
      </div>
      <div class="ml15 h80 w80 user-name"
           v-if="user.user">
        <p class="fz12 h20 mt30">{{user.user.nickname}}</p>
      </div>

      <div class="po-ab"
           style="right:42px;bottom:-15px;z-index:99;">
        <span @click="enterToUser"
              class="text-gray-l10 h34 w34 lh34 fz15 bsr text-center dib c-pointer iconfont iconfont-nanshengmoren back-to-user bg-white text-gray-l30"
              title="用户中心"></i></span>
        <!--//用户中心-->
        <span class="text-gray-l10 h34 w34 lh34 fz15 bsr text-center dib c-pointer iconfont iconfont-tuichu text-white bg-primary-com ml10"
              @click="goOut()"
              title="退出"></span>
      </div>

    </div>
  </div>
</template>

<script>
import API from './API'
import user from '../../bam/common/user'

export default {
  data () {
    return {
      user,
      defaultImg: require('../assets/head-img1.png')
    }
  },
  mounted () {
    this.user.getUserInfo().then(() => {
      this.grade = this.user.customerUser.grade
    })
  },
  methods: {
    goOut () {
      this.initAxiosHeaders({
        auth: ''
      })
      this.$router.push('/account')
    },
    enterToUser () {
      this.$router.push({
        path: '../../../bam/info/customerUser'
      })
    }

  }
}

</script>

<style lang="scss">
  @import '../../../styles/variables';

  .center-header {
    background: $white;

    .edition-img {
      background: $green-ct;
      text-align: center;
      vertical-align: middle;
      line-height: 80px;
    }

    .head-portrait {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }

    .back-to-user {
      border: 1px solid #dedede;
      border-radius: 50%;
    }
  }

</style>
