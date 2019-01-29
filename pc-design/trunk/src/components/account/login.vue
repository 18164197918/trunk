<template>
  <div>
    <el-form
      :model="loginInfo"
      :rules="loginRules"
      label-width="0"
      ref="ruleLoginInfo"
      size="small"
    >
      <div class="mb30">
        <span class="text-gray-d15 fz18 text-weight">账户登录</span>
        <span class="text-gray-l30 fz14 pl8">LOGIN</span>
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
          v-model="loginInfo.phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div class="lh18 h18 mb5 fz14 text-gray-d15 text-weight">密码</div>
        <el-input
          :type="logPwType"
          class="w400"
          maxlength="20"
          minlength="6"
          placeholder="请输入登录密码"
          v-model="loginInfo.password"
        ></el-input>
        <span
          :class="[logPwShow?'iconfont-chakan1':'iconfont-chakan','iconfont','password']"
          @click.prevent="logPwShow =!logPwShow"
        ></span>
      </el-form-item>
      <el-form-item
        label
        prop="code"
      >
        <el-input
          class="w190"
          placeholder="请输入验证码"
          v-model="loginInfo.code"
        ></el-input>
        <div class="ml50 dib">
          <img
            :src="codeImg"
            alt
            class="h30"
          >
          <span
            @click="getTicket()"
            class="text-primary ml5 pl5 pr5 c-pointer dib"
          >换一张</span>
        </div>
      </el-form-item>
      <el-form-item class="mt25">
        <div class="d-flex justify-between align-center w400">
          <div class="d-flex align-center">
            <el-checkbox
              class="mr10 text-gray-d15"
              v-model="checked"
            >保存登陆状态</el-checkbox>
            <el-select
              @change="dateChange"
              class="w100"
              placeholder="请选择"
              size="mini"
              v-model="dateValue"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in loginDate"
              ></el-option>
            </el-select>
          </div>
          <router-link
            class="text-primary c-pointer"
            to="register"
          >我要试用</router-link>
        </div>
      </el-form-item>
      <el-form-item class="mt30">
        <el-button
          @click="login('ruleLoginInfo')"
          class="w400"
          type="primary"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import API from './API'

export default {
  data () {
    return {
      codeImg: '',
      checked: false,
      logPwShow: false,
      loginInfo: {
        phone: '',
        password: '',
        code: '',
        effective_time: 4 * 60,
        ticket: ''
      },
      loginRules: {
        phone: [{
          required: true,
          message: '请输入登录手机号码',
          trigger: 'blur'
        },
        {
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g,
          message: '登录账号错误,请重新输入',
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
          pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/,
          message: '密码输入有误',
          trigger: 'blur'
        }
        ],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }]
      },
      loginDate: [{
        value: '1',
        label: '1天'
      },
      {
        value: '7',
        label: '7天'
      },
      {
        value: '30',
        label: '30天'
      }
      ],
      dateValue: '',
      loginTime: 1
    }
  },
  created () {
    this.getTicket()
  },
  methods: {
    // 选择记住登陆状态时间
    dateChange (e) {
      this.loginTime = e
    },
    // 获取验证码
    getTicket () {
      this.http3Get(API.getTicket).then((res) => {
        this.loginInfo.ticket = res.data.ticket
        let time = new Date().getDate()
        this.codeImg = API.getCodeImg + this.loginInfo.ticket + '/image-code/viewport?' + time
      })
    },

    // 登录
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.checked) {
            this.loginInfo.effective_time = this.loginTime * 24 * 60
          }
          this.httpPost(API.login, this.loginInfo, {
            setTip: '登陆成功'
          }).then((res) => {
            this.initAxiosHeaders({
              auth: res.data.token
            })
            this.$router.push('/bam')
          }).catch(err => {
            let code = err.data.code
            if (code === 30005 || code === 30006) {
              this.getTicket()
            }
          })
        } else {
          this.$message({
            message: '请完善登陆信息！',
            type: 'warning'
          })
        }
      })
    }
  },
  computed: {
    logPwType () {
      if (this.logPwShow) {
        return ''
      } else {
        return 'password'
      }
    }
  }
}

</script>
