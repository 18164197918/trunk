<template>
  <div>
    <!--客户信息头部-->
    <div>
      <div class="common-tit1">
        <h4>客户信息</h4>
        <div>
          <el-button
            :disabled="grade==='NORMAL'"
            @click="userEdit()"
            class="iconfont iconfont-edit1 fz14"
            type="text"
          >编辑</el-button>
        </div>
      </div>
    </div>
    <!--客户信息内容-->
    <div>
      <div
        class="d-flex align-center text-gray-d20"
        v-if="infoShow"
      >
        <img
          :src="userInfo.avatar | filterImg"
          alt
          class="img-cover w120 h120 mr40 bd-gray"
          v-if="userInfo.avatar"
        >
        <img
          :src="defaultImg"
          alt
          class="img-cover w120 h120 mr40 bd-gray"
          v-if="!userInfo.avatar"
        >
        <div>
          <dl class="d-flex mb20">
            <dt class="mr20">公司名称 :</dt>
            <dd>{{userInfo.name}}</dd>
          </dl>
          <dl class="d-flex mb20">
            <dt class="mr20">联系电话 :</dt>
            <dd>{{userInfo.phone}}</dd>
          </dl>
          <dl class="d-flex">
            <dt class="mr20">公司行业 :</dt>
            <dd>{{userInfo.industry_name}}</dd>
          </dl>
        </div>
      </div>

      <!--客户编辑-->
      <div
        class="w530"
        v-if="!infoShow"
      >
        <el-form
          :model="userInfo"
          :rules="userInfoRules"
          label-width="100px"
          ref="ruleTestUser"
          size="small"
        >
          <el-form-item
            label="公司名称 :"
            prop="name"
          >
            <el-input
              maxlength="20"
              placeholder="请输入公司名称"
              v-model="userInfo.name"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="联系电话 :"
            prop="phone"
          >
            <el-input
              maxlength="11"
              placeholder="请输入联系电话"
              v-model="userInfo.phone"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="客户行业 :"
            prop="selectedTrades"
          >
            <el-cascader
              :options="tradesList"
              :show-all-levels="true"
              @change="tradesChange"
              class="w430"
              expand-trigger="hover"
              v-model="userInfo.selectedTrades"
            ></el-cascader>
          </el-form-item>
          <el-form-item
            label="LOGO :"
            prop="avatar"
          >
            <bg-img-box
              :path="[userInfo, 'avatar']"
              class="mr10"
            ></bg-img-box>
            <span class="fz12 text-gray-l30">（请上传公司logo，建议尺寸：90*90像素）</span>
          </el-form-item>
          <el-form-item class="mt25">
            <el-button
              @click="infoSave('ruleTestUser')"
              class="w120"
              type="primary"
            >保存修改</el-button>
            <el-button
              @click="infoShow = !infoShow"
              class="w120"
              type="info"
            >返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--管理员信息头部-->
    <div class="mt50">
      <div class="common-tit1">
        <h4>管理员信息</h4>
        <div>
          <el-button
            @click="adminCode = true"
            class="iconfont iconfont-yaochi mr10 fz14"
            type="text"
            v-if="grade==='SUPERMAN'"
          >
            <i class="ml3">修改密码</i>
          </el-button>
          <el-button
            @click="adminShow? adminShow = !adminShow : adminShow"
            class="iconfont iconfont-edit1 fz14"
            size="small"
            type="text"
          >编辑</el-button>
        </div>
      </div>
    </div>

    <div>
      <div
        class="d-flex align-center"
        v-if="adminShow"
      >
        <div class="text-gray-d20">
          <dl class="d-flex mb20">
            <dt class="mr20 w90 text-right">昵称 :</dt>
            <dd>{{adminInfo.nickname}}</dd>
          </dl>
          <dl class="d-flex mb20">
            <dt class="mr20 w90 text-right">联系电话 :</dt>
            <dd>{{adminInfo.phone}}</dd>
          </dl>
          <dl class="d-flex mb20">
            <dt class="mr20 w90 text-right">头像 :</dt>
            <dd>
              <img
                :src="adminInfo.avatar | filterImg "
                alt
                class="img-cover w120 h120 mr40 bd-gray"
                v-if="adminInfo.avatar"
              >
              <img
                :src="defaultImg"
                alt
                class="img-cover w120 h120 mr40 bd-gray"
                v-if="!adminInfo.avatar"
              >
            </dd>
          </dl>
        </div>
      </div>

      <!--管理员编辑-->
      <div
        class="w500"
        v-if="!adminShow"
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
              placeholder="请输入昵称"
              v-model="adminInfo.nickname"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录账号 :">
            <p>{{adminInfo.phone}}</p>
          </el-form-item>
          <el-form-item
            label="头像 :"
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
            >保存修改</el-button>
            <el-button
              @click="adminShow = !adminShow"
              class="w120"
              type="info"
            >返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--修改密码-->
    <div>
      <el-dialog
        :visible.sync="adminCode"
        append-to-body
        class="pl40 pr40"
        lock-scroll
        title="修改密码 CHANGE PASSWORD"
        width="630px"
      >
        <div class="inner center">
          <div class="alert-popup">
            <el-form
              :model="codeInfo"
              :rules="codeRules"
              label-width="90px"
              ref="ruleTestCode"
              size="small"
            >
              <el-form-item
                label="原密码:"
                prop="old_password"
              >
                <el-input
                  class="w270"
                  maxlength="20"
                  minlength="6"
                  placeholder="请输入原始密码"
                  type="password"
                  v-model="codeInfo.old_password"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="新密码:"
                prop="new_password"
              >
                <el-input
                  class="w270"
                  maxlength="20"
                  minlength="6"
                  placeholder="请输入新密码"
                  type="password"
                  v-model="codeInfo.new_password"
                ></el-input>
                <span class="text-gray-l20 fz12">（必须包含数字、字母，6-20个字符）</span>
              </el-form-item>
              <el-form-item
                label="确认密码:"
                prop="sureCode"
              >
                <el-input
                  class="w270"
                  maxlength="20"
                  minlength="6"
                  placeholder="请再次输入新密码"
                  type="password"
                  v-model="codeInfo.sureCode"
                ></el-input>
              </el-form-item>
              <el-form-item class="mt25">
                <el-button
                  @click="codeSave('ruleTestCode')"
                  class="w80"
                  type="primary"
                >确认</el-button>
                <el-button
                  @click="adminCode = false"
                  class="w80"
                  type="info"
                >取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import bgImgBox from '../../common/bg-img-box.vue'
import API from './API'
import user from '../common/user'

export default {

  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.codeInfo.new_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      user,
      defaultImg: require('../assets/head-img1.png'),
      infoShow: true,
      adminShow: true,
      tradesList: [],
      grade: '', // 身份SUPERMAN 为超管;NORMAL 为普通管理员
      userInfo: {
        avatar: '',
        name: '',
        phone: '',
        industry: '',
        industry_name: '',
        selectedTrades: ''
      },
      userInfoRules: {
        name: [{
          required: true,
          message: '公司名称不能为空',
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
          message: '联系电话不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g,
          message: '联系电话格式错误,请重新输入',
          trigger: 'blur'
        }
        ],
        selectedTrades: [{
          required: true,
          message: '行业不能为空',
          trigger: 'blur'
        }]
      },
      adminInfo: {
        avatar: '',
        nickname: '',
        phone: ''
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
        ]
      },
      adminCode: false,
      codeInfo: {
        old_password: '',
        new_password: '',
        sureCode: ''
      },
      codeRules: {
        old_password: [{
          required: true,
          message: '请输入原始密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
          message: '格式错误，必须包含数字、字母，6-20个字符',
          trigger: 'blur'
        }
        ],
        new_password: [{
          required: true,
          message: '请输入新密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
          message: '格式错误，必须包含数字、字母，6-20个字符',
          trigger: 'blur'
        }
        ],
        sureCode: [{
          required: true,
          message: '请再次输入新密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          validator: validatePass2,
          message: '两次输入密码不一致',
          trigger: 'blur'
        }
        ]
      }
    }
  },

  mounted () {
    user.getUserInfo().then(() => {
      this.userInfo = this.user.customer
      this.grade = this.user.customerUser.grade
      this.adminInfo = this.user.user
    })
    this.getTradesList()
  },

  methods: {

    // 获取行业信息
    getTradesList () {
      this.httpGet(API.trades).then((res) => {
        res.collection.forEach((item, i) => {
          if (item.son_industry instanceof Array) {
            this.tradesList.push({
              value: item.code,
              label: item.name,
              children: []
            })
            res.collection[i].son_industry.forEach(li => {
              this.tradesList[i].children.push({
                value: li.code,
                label: li.name
              })
            })
          } else {
            this.tradesList.push({
              value: item.code,
              label: item.name
            })
          }
        })
      })
    },

    // 行业选择
    tradesChange (e) {
      this.userInfo.industry = e[e.length - 1]
    },

    userEdit () {
      if (this.grade === 'SUPERMAN') {
        this.infoShow ? this.infoShow = !this.infoShow : this.infoShow = this.infoShow
        if (this.userInfo.industry.length > 3) {
          this.userInfo.selectedTrades = [this.userInfo.industry.slice(0, 3), this.userInfo.industry]
        } else {
          this.userInfo.selectedTrades = [this.userInfo.industry]
        }
      }
    },

    infoSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPut(API.customer, this.userInfo).then((res) => {
            this.infoShow = true
            this.userInfo = res.data
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    },

    adminSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPut(API.admin, this.adminInfo).then((res) => {
            this.user.getUserInfo()
            this.adminShow = true
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    },

    // 修改
    codeSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.httpPut(API.code, this.codeInfo).then((res) => {
            this.adminCode = false
            this.codeInfo = {
              old_password: '',
              new_password: '',
              sureCode: ''
            }
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    }

  },

  components: {
    bgImgBox
  }

}

</script>
<style lang="scss">
@import "../../../styles/variables";
</style>
