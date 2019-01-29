<template>
  <div class="site-info">
    <div class="common-tit1">
      <h4 class="title">站点信息</h4>
      <div class="edit fz12">
        <span @click="returnTerminal">返回</span>
      </div>
    </div>

    <div v-if="editorShow"
         class="editor-info">
      <el-form ref="ruleForm"
               :rules="userInfoRules"
               :model="getData"
               label-width="100px">
        <el-form-item prop="name"
                      label="站点名称">
          <el-input type="input"
                    class="w300"
                    v-model="getData.name"
                    maxlength="20"
                    placeholder="请输入站点名称"></el-input>
        </el-form-item>
        <el-form-item prop="path"
                      label="站点图片">
          <bg-img-box class="mr20 w120 h120"
                      :path="[getData, 'image']"></bg-img-box>
        </el-form-item>
        <el-form-item prop="temporaryDomainName"
                      label="临时域名">
          <el-input type="input"
                    class="w300"
                    v-model="getData.domain_name"
                    maxlength="40"
                    placeholder="请输入临时域名"></el-input>
        </el-form-item>
        <el-form-item prop="address"
                      label="FTP地址">
          <el-input type="input"
                    class="w300"
                    v-model="getData.host"
                    maxlength="40"
                    placeholder="请输入FTP地址"></el-input>
        </el-form-item>
        <el-form-item prop="account"
                      label="FTP账号">
          <el-input type="input"
                    class="w300"
                    v-model="getData.user"
                    maxlength="20"
                    placeholder="请输入FTP账号"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      label="FTP密码">
          <el-input type="input"
                    class="w300"
                    v-model="getData.password"
                    maxlength="20"
                    placeholder="请输入FTP密码"></el-input>
        </el-form-item>
        <el-form-item prop="portNumber"
                      label="FTP端口号">
          <el-input type="input"
                    class="w300"
                    v-model="getData.port"
                    placeholder="请输入FTP端口号"
                    maxlength="10"></el-input>
        </el-form-item>
        <el-form-item prop="webDomain"
                      label="网站域名">
          <el-input placeholder="请输入网站域名"
                    v-model="getData.web"
                    class="input-with-select w300"
                    maxlength="40">
            <el-select v-model="selectWebPrefix"
                       slot="prepend"
                       placeholder="http://"
                       style="width: 90px;">
              <el-option label="http://"
                         value="http://"></el-option>
              <el-option label="https://"
                         value="https://"></el-option>
            </el-select>
          </el-input>
          <!-- <el-input type="input"
              class="w300"
              v-model="userInfo.webDomain"
              placeholder="请输入网站域名"></el-input> -->
        </el-form-item>
        <el-form-item class="mt25">
          <el-button type="primary"
                     class="w80"
                     @click="saveHand('ruleForm')">确定</el-button>
          <el-button type="info"
                     class="w80"
                     @click="cancelHand">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else
         class="info-get">
      <div class="d-flex pb20">
        <div class="left w80 text-right">站点名称：</div>
        <div class="right ml20">{{getData.name}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">站点图片：</div>
        <div class="right ml20">
          <bg-img-box class="w80 h80"
                      :path="[getData, 'image']"></bg-img-box>
        </div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">临时域名： </div>
        <div class="right ml20">{{getData.domain_name}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">FTP地址： </div>
        <div class="right ml20">{{getData.host}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">FTP账号： </div>
        <div class="right ml20">{{getData.user}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">FTP密码： </div>
        <div class="right ml20">{{getData.password}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">FTP端口号： </div>
        <div class="right ml20">{{getData.port}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80 text-right">网站域名： </div>
        <div class="right ml20">{{getData.prefix}}{{getData.web}}</div>
      </div>
      <div class="d-flex pb20">
        <div class="left w80"></div>
        <div class="right ml20">
          <el-button type="primary"
                     class="w160"
                     @click="changeSiteInfo(getData)">修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from './API'
import bgImgBox from '../../common/bg-img-box.vue'
export default {
  name: 'site-info',
  data () {
    return {
      editorId: '',
      getData: {},
      editorShow: false,
      userInfoRules: {
        name: [{
          required: true,
          message: '请填写站点名称',
          trigger: 'blur'
        }],
        image: [{
          message: '图片不能为空'
        } ],
        domain_name: [{
          required: true,
          message: '请输入正确临时域名',
          trigger: 'blur'
        }],
        host: [{
          required: true,
          message: '请输入正确FTP地址',
          trigger: 'blur'
        }],
        user: [{
          required: true,
          message: '请输入正确FTP账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入正确FTP密码',
          trigger: 'blur'
        }],
        port: [{
          required: true,
          message: '请输入正确FTP端口号',
          trigger: 'blur'
        }],
        web: [{
          required: true,
          message: '请输入正确网站域名',
          trigger: 'blur'
        }]
      },
      selectWebPrefix: 'http://'
    }
  },
  mounted () {
    this.editorId = window.location.href.split('=')[1]
    console.log('editorId', this.editorId)

    this.httpGet(`${API.getSiteInfo}${window.location.href.split('=')[1]}`).then(({
      data,
      state
    }) => {
      if (state === 0 || state === '0') {
        this.getData = data
        this.selectWebPrefix = data.prefix
      }
    })
  },
  computed: {},
  methods: {
    returnTerminal () {
      this.$router.go(-1)
    },
    changeSiteInfo (getData) {
      this.editorShow = true
    },
    cancelHand () {
      this.editorShow = false
      this.httpGet(`${API.getSiteInfo}/${window.location.href.split('=')[1]}`).then(({
        data,
        state
      }) => {
        if (state === 0 || state === '0') {
          this.getData = data
        }
      })
    },
    saveHand (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('success')
          this.httpPut(`${API.editorInfo}${this.editorId}`, {
            name: this.getData.name,
            image: this.getData.image,
            domain_name: this.getData.domain_name,
            host: this.getData.host,
            user: this.getData.user,
            password: this.getData.password,
            port: this.getData.port,
            web: this.getData.web,
            prefix: this.selectWebPrefix
          }).then(res => {
            console.log('res', res)
            // 清空表单
            this.getData = {
              name: '',
              image: '',
              domain_name: '',
              host: '',
              user: '',
              password: '',
              port: '',
              web: ''
            }
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
    }
  },
  components: {
    bgImgBox
  }
}
</script>

<style lang="scss">
  @import '../../../styles/variables';

  .site-info {
    color: $black-wd1;

    .common-tit1 {
      h4 {
        padding-left: 0;
        border-left: none;
      }
    }

    .info-get {
      .pic-box {
        .img-obj {
          background-size: cover;
        }

        .bj-close {
          display: none;
        }

        .add-img-btn {
          z-index: 10;
          visibility: hidden;
        }
      }
    }
  }
</style>
