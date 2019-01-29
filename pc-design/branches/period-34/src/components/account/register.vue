<template>
  <div>
    <el-form
      :model="registerInfo"
      :rules="registerRules"
      label-width="0"
      ref="RuleRegisterInfo"
      size="small"
    >
      <div class="mb30">
        <span class="text-gray-d15 fz18 text-weight">我要试用</span>
        <span class="text-gray-l30 fz14 pl8">TRYOUT</span>
      </div>
      <el-form-item
        label
        prop="phone"
      >
        <div class="lh18 h18 mb5 fz14 text-gray-d15 text-weight">手机号</div>
        <el-input
          class="w400"
          maxlength="11"
          placeholder="请输入手机号码"
          v-model="registerInfo.phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div class="lh18 h18 mb5 fz14 text-gray-d15 text-weight">短信验证码</div>
        <el-input
          class="w400"
          placeholder="请输入验证码"
          v-model="registerInfo.code"
        ></el-input>
        <el-button
          :disabled="codeDisabled"
          @click.prevent="getPhoneCode()"
          class="code"
          type="text"
        >{{PhoneCodeText}}</el-button>
      </el-form-item>
      <el-form-item
        label
        prop="password"
      >
        <div class="lh18 h18 mb5 fz14 text-gray-d15 text-weight">设置密码</div>
        <el-input
          class="w400"
          maxlength="20"
          minlength="6"
          placeholder="必须包含数字、字母，6-20个字符"
          type="password"
          v-model="registerInfo.password"
        ></el-input>
      </el-form-item>
      <el-form-item
        label
        prop="sureCode"
      >
        <div class="lh18 h18 mb5 fz14 text-gray-d15 text-weight">确认密码</div>
        <el-input
          class="w400"
          maxlength="20"
          minlength="6"
          placeholder="请再次输入密码"
          type="password"
          v-model="registerInfo.sureCode"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt25">
        <div class="d-flex justify-between w400">
          <div></div>
          <router-link
            class="text-primary c-pointer"
            to="login"
          >已有账号,立即登录</router-link>
        </div>
      </el-form-item>
      <el-form-item class="mt25">
        <el-button
          @click="register('RuleRegisterInfo')"
          class="w400"
          type="primary"
        >确认注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import API from './API'
export default {
  data () {
    var validatePass4 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerInfo.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      codeImg: '',
      interval: 0,
      PhoneCodeText: '获取验证码',
      codeDisabled: false,
      registerInfo: {
        phone: '',
        code: '',
        password: '',
        effective_time: 12 * 60 * 60 * 1000,
        sureCode: ''
      },
      registerRules: {
        phone: [{
          required: true,
          message: '请输入登录手机号码',
          trigger: 'blur'
        },
        {
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g,
          message: '手机号码错误,请重新输入',
          trigger: 'blur'
        }
        ],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          pattern: /\d{6}/,
          message: '验证码输入有误',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '请输入登录密码',
          trigger: 'blur'
        },
        {
          max: 20,
          min: 6,
          pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
          message: '格式错误，必须包含数字、字母，6-20个字符',
          trigger: 'blur'
        }
        ],
        sureCode: [{
          required: true,
          message: '请再次输入密码',
          trigger: 'blur'
        },
        {
          max: 20,
          min: 6,
          validator: validatePass4,
          pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
          message: '两次输入密码不一致',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods: {
    // 注册
    getPhoneCode () {
      let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g
      if (this.registerInfo.phone && phoneReg.test(this.registerInfo.phone)) {
        this.interval = 59

        let calcInterval = () => {
          this.PhoneCodeText = '倒计时' + this.interval + 's'
          this.codeDisabled = true
          let timeId = setTimeout(() => {
            this.interval--
            calcInterval()
          }, 1000)
          if (this.interval === 0) {
            this.PhoneCodeText = '获取验证码'
            this.codeDisabled = false
            clearTimeout(timeId)
          }
        }
        // 开始发送短信
        this.httpPost(API.phone + this.registerInfo.phone, null, {
          setTip: false
        }).then((res) => {
          calcInterval()
        })
      }
    },

    register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPost(API.register, this.registerInfo, {
            setTip: false
          }).then((res) => {
            this.initAxiosHeaders({
              auth: res.data.token
            })
            this.$router.push('/userInit/user')
          })
        } else {
          this.$message({
            message: '请完善注册信息！',
            type: 'warning'
          })
        }
      })
    }
  }
}

</script>
<style lang="scss">
@import "../../styles/variables";

.code {
  position: absolute;
  left: 320px;
  top: 2px;
}
</style>
