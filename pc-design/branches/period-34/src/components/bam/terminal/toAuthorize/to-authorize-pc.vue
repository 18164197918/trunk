<template>
  <div class="to-authorize-pc">
    <div class="common-tit1">
      <h4 class="title">站点信息</h4>
      <div class="edit fz12">
        <span @click="returnTerminal">返回</span>
      </div>
    </div>

    <!--站点信息提交表单-->
    <div class="info-form">
      <el-form
        :model="userInfo"
        :rules="userInfoRules"
        label-width="100px"
        ref="ruleForm"
      >
        <el-form-item
          label="站点名称"
          prop="name"
        >
          <el-input
            class="w300"
            maxlength="20"
            placeholder="请输入站点名称"
            type="input"
            v-model="userInfo.name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="站点图片"
          prop="path"
        >
          <bg-img-box
            :path="[userInfo, 'path']"
            class="mr20 w120 h120"
          ></bg-img-box>
        </el-form-item>
        <el-form-item
          label="临时域名"
          prop="temporaryDomainName"
        >
          <el-input
            class="w300"
            maxlength="40"
            placeholder="请输入临时域名"
            type="input"
            v-model="userInfo.temporaryDomainName"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="FTP地址"
          prop="address"
        >
          <el-input
            class="w300"
            maxlength="40"
            placeholder="请输入FTP地址"
            type="input"
            v-model="userInfo.address"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="FTP账号"
          prop="account"
        >
          <el-input
            class="w300"
            maxlength="20"
            placeholder="请输入FTP账号"
            type="input"
            v-model="userInfo.account"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="FTP密码"
          prop="password"
        >
          <el-input
            class="w300"
            maxlength="20"
            placeholder="请输入FTP密码"
            type="input"
            v-model="userInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="FTP端口号"
          prop="portNumber"
        >
          <el-input
            class="w300"
            maxlength="10"
            placeholder="请输入FTP端口号"
            type="input"
            v-model="userInfo.portNumber"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="网站域名"
          prop="webDomain"
        >
          <el-input
            class="input-with-select w300"
            maxlength="40"
            placeholder="请输入网站域名"
            v-model="userInfo.webDomain"
          >
            <el-select
              placeholder="http://"
              slot="prepend"
              style="width: 90px;"
              v-model="selectWebPrefix"
            >
              <el-option
                label="http://"
                value="http://"
              ></el-option>
              <el-option
                label="https://"
                value="https://"
              ></el-option>
            </el-select>
          </el-input>
          <!-- <el-input type="input"
                    class="w300"
                    v-model="userInfo.webDomain"
          placeholder="请输入网站域名"></el-input>-->
        </el-form-item>
        <el-form-item class="mt25">
          <el-button
            @click="saveHand('ruleForm')"
            class="w80"
            type="primary"
          >保存</el-button>
          <el-button
            @click="cancelHand"
            class="w80"
            type="info"
          >取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import bgImgBox from '../../../common/bg-img-box.vue'
import API from '../API'
export default {
  name: 'to-authorize-pc',
  data () {
    return {
      userInfo: {
        name: '',
        path: '../../assets/bd-author-icon.jpg',
        temporaryDomainName: '',
        address: '',
        account: '',
        password: '',
        portNumber: '',
        webDomain: ''
      },
      userInfoRules: {
        name: [{
          required: true,
          message: '请填写站点名称',
          trigger: 'blur'
        }],
        path: [{
          message: '图片不能为空'
        } ],
        temporaryDomainName: [{
          required: true,
          message: '请输入正确临时域名',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '请输入正确FTP地址',
          trigger: 'blur'
        }],
        account: [{
          required: true,
          message: '请输入正确FTP账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入正确FTP密码',
          trigger: 'blur'
        }],
        portNumber: [{
          required: true,
          message: '请输入正确FTP端口号',
          trigger: 'blur'
        }],
        webDomain: [{
          required: true,
          message: '请输入正确网站域名',
          trigger: 'blur'
        }]
      },
      selectWebPrefix: 'http://'
    }
  },
  methods: {
    returnTerminal () {
      this.$router.go(-1)
    },
    saveHand (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // if(userInfo.name.length > 20 && userInfo.temporaryDomainName.length > 40 && userInfo.address.length > 40 && userInfo.account.length > 20 && userInfo.password.length > 20 && userInfo.portNumber.length > 10 && userInfo.webDomain.length > 40){

          // }

          this.httpPost(API.pcCreate, {
            name: this.userInfo.name,
            image: this.userInfo.path,
            domain_name: this.userInfo.temporaryDomainName,
            host: this.userInfo.address,
            user: this.userInfo.account,
            password: this.userInfo.password,
            port: this.userInfo.portNumber,
            web: this.userInfo.webDomain,
            prefix: this.selectWebPrefix
          }).then(res => {
            console.log('res', res)
            // 清空表单
            this.userInfo = {
              name: '',
              path: '../../assets/bd-author-icon.jpg',
              temporaryDomainName: '',
              address: '',
              account: '',
              password: '',
              portNumber: '',
              webDomain: ''
            }
            this.handDialogVisible = false
            if (res.state === 0 || res.state === '0') {
              this.$router.go(-1)
            }
          }).catch(error => {
            console.log('error', error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelHand () {
      this.$router.go(-1)
    }
  },
  components: {
    bgImgBox
  }
}
</script>

<style scoped
       lang="scss">
@import "../../../../styles/variables";

.to-authorize-pc {
  .title {
    font-weight: bold;
    color: $black-wd1;
  }

  .common-tit1 {
    h4 {
      padding-left: 0;
      border-left: none;
    }
  }

  .el-input-group__append .el-input,
  .el-input-group__prepend .el-input {
    width: 100px !important;
  }

  /* .el-select .el-input {
      width: 50px !important;
    } */

  .input-with-select .el-input-group__prepend {
    background-color: #fff !important;
  }
}
</style>
