<template>
  <div>
    <div class="common-tit1 weight">
      <h4>{{$route.params.id === '1'?'新建':'编辑'}}</h4>
      <div
        @click="$router.back(-1)"
        class="edit"
      >
        <span>
          返回
          <i class="iconfont iconfont-back ml3"></i>
        </span>
      </div>
    </div>

    <!-- 新建 -->
    <div
      class="w500"
      v-if="$route.params.id === '1'"
    >
      <el-form
        :model="adminInfo"
        :rules="adminInfoRules"
        label-width="100px"
        ref="ruleTestAdmin"
        size="small"
      >
        <el-form-item
          label="昵称 :"
          prop="nickname"
        >
          <el-input
            maxlength="20"
            placeholder="请输入用户昵称"
            v-model="adminInfo.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="登录手机号 :"
          prop="phone"
        >
          <el-input
            maxlength="11"
            placeholder="请输入用户登录手机号"
            v-model="adminInfo.phone"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="短信验证码 :"
          prop="code"
        >
          <el-input
            placeholder="请输入验证码"
            v-model="adminInfo.code"
          ></el-input>
          <el-button
            :disabled="codeDisabled"
            @click.prevent="getPhoneCode()"
            class="code"
            type="text"
          >{{PhoneCodeText}}</el-button>
        </el-form-item>
        <el-form-item
          label="登录密码 :"
          maxlength="20"
          minlength="6"
          prop="password"
        >
          <el-input
            placeholder="请设置登录密码"
            type="password"
            v-model="adminInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码 :"
          prop="oldWord"
        >
          <el-input
            placeholder="请再次输入密码"
            type="password"
            v-model="adminInfo.oldWord"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="用户头像 :"
          prop="avatar"
        >
          <bg-img-box
            :path="[adminInfo, 'avatar']"
            class="mr20"
          ></bg-img-box>
          <span class="fz12 text-gray-l30">（建议尺寸：90*90像素 ）</span>
        </el-form-item>
        <el-form-item class="mt25">
          <el-button
            @click="adminSave('ruleTestAdmin')"
            class="w120"
            type="primary"
          >保存</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 编辑 -->
    <div
      class="w500"
      v-else
    >
      <el-form
        :model="adminInfo"
        :rules="adminInfoRules"
        label-width="100px"
        ref="ruleTestAdminEdit"
        size="small"
      >
        <el-form-item
          label="昵称 :"
          prop="nickname"
        >
          <el-input
            maxlength="20"
            placeholder="请输入用户昵称"
            v-model="adminInfo.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="登录手机号 :"
          prop="phone"
        >
          <span>{{adminInfo.phone}}</span>
        </el-form-item>
        <el-form-item
          label="用户头像 :"
          prop="avatar"
        >
          <bg-img-box
            :path="[adminInfo, 'avatar']"
            class="mr20"
          ></bg-img-box>
          <span class="fz12 text-gray-l30">（建议尺寸：90*90像素 ）</span>
        </el-form-item>
        <el-form-item class="mt25">
          <el-button
            @click="editadminSave('ruleTestAdminEdit')"
            class="w120"
            type="primary"
          >保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

import API from './API'
export default {
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.adminInfo.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      interval: 0,
      PhoneCodeText: '获取验证码',
      codeDisabled: false,
      adminInfo: {
        nickname: '',
        phone: '',
        avatar: '',
        password: '',
        oldWord: '',
        code: ''
      },
      adminInfoRules: {
        nickname: [{
          required: true,
          message: '昵称不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '最大值不能超过20个',
          trigger: 'blur'
        }
        ],
        phone: [{
          required: true,
          message: '登陆账号不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          message: '请重新输入有效的手机号',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        {
          max: 16,
          min: 6,
          pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
          message: '格式错误，必须包含数字、字母，6-20个字符',
          trigger: 'blur'
        }
        ],
        oldWord: [{
          required: true,
          message: '请再次输入新密码',
          trigger: 'blur'
        },
        {
          validator: validatePass2,
          message: '两次输入密码不一致',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  created () {
    this.getAdminInfo()
  },
  methods: {
    getPhoneCode () {
      let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g
      if (this.adminInfo.phone && phoneReg.test(this.adminInfo.phone)) {
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
        this.httpPost(API.phone + this.adminInfo.phone, null, {
          setTip: false
        }).then((res) => {
          calcInterval()
        })
      }
    },
    getAdminInfo () {
      if (this.$route.params.id !== 1) {
        this.httpGet(API.addAdmin + '/' + this.$route.params.id).then(({
          data
        }) => {
          this.adminInfo.avatar = data.user.avatar
          this.adminInfo.nickname = data.user.nickname
          this.adminInfo.phone = data.user.phone
          this.adminInfo.status = data.status
          this.adminInfo.id = data.id
        })
      }
    },
    adminSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPost(API.addAdmin, this.adminInfo).then((res) => {
            this.adminInfo = {}
            this.$router.go(-1)
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    },

    editadminSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.adminInfo.id = this.$route.params.id
          this.httpPut(API.addAdmin, this.adminInfo).then((res) => {
            this.adminInfo = {}
            this.$router.go(-1)
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    }
  }
  /*  components: {
    bgImgBox
  } */

}

</script>
