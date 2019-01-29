<template>
  <div class="to-authorize-mobile">
    <div class="common-tit1">
      <h4 class="title">授权信息</h4>
      <div class="edit fz12">
        <span @click="returnTerminal">返回</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <div
        class="automation d-flex justify-center align-center shrink-0 mr40 mb40 w414 h138"
      >
        <div class="icon pr26">
          <img
            alt
            src="../../assets/bd-author-icon.jpg"
          >
          <p class="text pt10">自动授权</p>
        </div>
        <div class="three pr68">
          <p>
            <i class="iconfont iconfont-renzheng"></i> 微信官方许可
          </p>
          <p>
            <i class="iconfont iconfont-renzheng"></i> 小程序免繁琐设置
          </p>
          <p>
            <i class="iconfont iconfont-renzheng"></i> 安全可靠的授权
          </p>
        </div>
        <div
          @click="toThirdAuthorize"
          class="cancel w80 h26 text-center lh26 c-pointer"
        >自动授权</div>
      </div>
      <div
        class="automation d-flex justify-center align-center shrink-0 mr40 mb40 w414 h138"
      >
        <div class="icon pr26">
          <img
            alt
            src="../../assets/bd-author-icon.jpg"
          >
          <p class="text pt10">手动授权</p>
        </div>
        <div class="three pr68">
          <p>
            <i class="iconfont iconfont-renzheng"></i> 步骤明了简易
          </p>
          <p>
            <i class="iconfont iconfont-renzheng"></i> 认证小程序
          </p>
        </div>
        <div
          @click="toThirdMan"
          class="cancel w80 h26 text-center lh26 c-pointer"
        >手动授权</div>
      </div>
    </div>
    <!--手动绑定弹窗-->
    <div class="hand-bind">
      <el-dialog
        :visible.sync="handDialogVisible"
        append-to-body
        title="信息收集 INFORMATION GATHERING"
        width="604px"
      >
        <el-form
          :model="userInfo"
          :rules="userInfoRules"
          label-width="100px"
          ref="ruleForm"
        >
          <el-form-item
            label="小程序名称"
            prop="desc"
          >
            <el-input
              class="w300"
              placeholder="请输入小程序名称"
              type="input"
              v-model="userInfo.name"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="小程序头像"
            prop="path"
          >
            <bg-img-box
              :path="[userInfo, 'path']"
              class="mr20 w120 h120"
            ></bg-img-box>
          </el-form-item>
          <el-form-item
            label="AppID"
            prop="desc"
          >
            <el-input
              class="w300"
              placeholder="请输入小程序ID"
              type="input"
              v-model="userInfo.appId"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="AppSecret"
            prop="desc"
          >
            <el-input
              class="w300"
              placeholder="请输入小程序密钥"
              type="input"
              v-model="userInfo.appSecret"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="AppKEY"
            prop="desc"
          >
            <el-input
              class="w300"
              placeholder="请输入小程序key"
              type="input"
              v-model="userInfo.appKey"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="小程序描述"
            prop="desc"
          >
            <el-input
              class="w300"
              placeholder="请输入小程序内容"
              type="textarea"
              v-model="userInfo.desc"
            ></el-input>
          </el-form-item>
          <el-form-item class="mt25">
            <el-button
              @click="savehand('ruleForm')"
              class="w80"
              type="primary"
            >保存</el-button>
            <el-button
              @click="cancelHand"
              class="w80"
              type="info"
            >返回</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import config from '../../../../config'
import bgImgBox from '../../../common/bg-img-box.vue'
export default {
  name: 'to-authorize-mobile',
  data () {
    return {
      encodeCid: '',
      handDialogVisible: false,
      userInfo: {
        name: '',
        path: '',
        appId: '',
        appSecret: '',
        appKey: '',
        desc: ''
      },
      userInfoRules: {
        name: [
          { required: true, message: '请填写小程序名称', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '图片不能为空' }
        ],
        appId: [
          { required: true, message: '请输入小程序ID', trigger: 'blur' }
        ],
        appSecret: [
          { required: true, message: '请输入小程序密钥', trigger: 'blur' }
        ],
        appKey: [
          { required: true, message: '请输入小程序key', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入小程序内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    returnTerminal () {
      this.$router.go(-1)
    },
    toThirdAuthorize () {
      let href = window.location.href
      this.encodeCid = href.split('encodeCid=')[1]
      window.location.href = config.baseURL.http4 + 'applet/authorization/' + this.encodeCid
    },
    toThirdMan () {
      this.handDialogVisible = true
    },
    savehand (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelHand () {
      this.handDialogVisible = false
    }
  },
  components: {
    bgImgBox
  }
}
</script>

<style scoped lang="scss">
@import "../../../../styles/variables";

.to-authorize-mobile {
  .title {
    font-weight: bold;
    color: $black-wd1;
  }
  .automation {
    border: 1px solid $primary;
    .text {
      color: $black-wd1;
      font-weight: bold;
    }
  }
  .three {
    p {
      line-height: 2;
      .iconfont {
        color: #70d6bc;
      }
    }
  }
  .cancel {
    background-color: $primary;
    color: $white;
  }
}
</style>
