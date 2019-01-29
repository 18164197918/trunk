<template>
  <div class="login-index d-flex justify-center align-center">
    <div class="login-content d-flex justify-between align-stretch">
      <div class="login-info shrink-1">
        <router-view />
      </div>
      <div class="login-logo d-flex justify-center align-center grow-0 shrink-1">
        <div class="w430 h390 bg-contain logo-img"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../styles/variables';
  .login-index {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-image: url(../../assets/login-bg.png);
    min-width: 1200px;
    z-index: -1;

    .login-content {
      z-index: 1;
      padding: 120px;
      min-width: 1200px;
      box-shadow: -10px 15px 50px 5px lighten($primary, 30%);
      background-color: $white;

      .login-info {
        width: 400px;
        padding-bottom: 15px;

        .code,
        .password {
          position: absolute;
          left: 300px;
          top: 25px;
        }

        .password {
          left: 350px;
        }
      }

      .login-logo {
        .logo-img {
          max-width: 430px;
          background-image: url(../../assets/login-logo.png);
        }
      }

    }
  }
</style>
