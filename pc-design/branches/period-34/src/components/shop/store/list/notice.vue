<style lang="scss">
.notice-form {
  .el-checkbox + .el-checkbox {
    margin-left: 0 !important;
  }
  .el-checkbox {
    margin-right: 30px !important;
  }
}
</style>

<template>
  <div class="notice-form">
    <div class="mb10">
      <i class="iconfont fz14 iconfont-pingfang mr10"></i>
      {{storeName}}
    </div>
    <div class="app-block-lv2">
      <h6>买家通知</h6>
      <div class="dfc mb10">
        <span class="mr20">短信通知：</span> 买家何时收到短信通知
      </div>
      <el-checkbox
        :key="item.id"
        class="mb10"
        v-for="item in form.config.NOTIFICATION_BUYER"
        v-model="item.on"
      >{{item.name}}</el-checkbox>
    </div>
    <div class="app-block-lv2">
      <h6>商家通知</h6>
      <div class="dfc mb10">
        <span class="mr20">短信通知：</span> 商家何时收到短信通知
      </div>
      <el-checkbox
        :key="item.id"
        class="mb10"
        v-for="item in form.config.NOTIFICATION_BUSINESS "
        v-model="item.on"
      >{{item.name}}</el-checkbox>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information mt20"
        label-width="120px"
        ref="form"
      >
        <el-form-item
          label="提醒手机号："
          prop="mobile"
        >
          <el-input
            class="w200"
            placeholder="请输入提醒手机号"
            v-model="form.mobile"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button
      @click="save()"
      class="w80"
      type="primary"
    >保存</el-button>
  </div>
</template>
<script>
import API from './API'

export default {
  name: 'notice',
  data () {
    return {
      loading: true,
      storeName: window.localStorage.getItem('storeName'),
      form: {
        mobile: '',
        config: {
        }
      },
      rules: {
        mobile: [
          { required: true, message: '请输入电话号码', trigger: ['blur', 'change'] },
          { min: 1, max: 11, message: '长度为11个字', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$httpGet(API.smsScene, {
      resource: { id: this.$route.params.id }
    }).then((res) => {
      this.form = res.data
      this.loading = false
    })
  },
  methods: {
    save () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$httpPost(API.smsScene, {
            resource: { id: this.$route.params.id },
            data: this.form
          })
        }
      })
    }
  }
}
</script>
