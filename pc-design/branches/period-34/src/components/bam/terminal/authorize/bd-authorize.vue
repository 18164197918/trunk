<template>
  <div class="bd-authorize">
    <div>
      <div class="common-tit1">
        <h4 class="title">授权信息</h4>
        <div class="edit fz12">
          <span @click="returnTerminal">返回</span>
        </div>
      </div>
      <div class="automation d-flex justify-center align-center w414 h138">
        <div class="icon pr26">
          <img
            alt
            src="../../assets/bd-author-icon.jpg"
          >
          <p
            class="text pt10"
            v-show="infoData.bound_mode.indexOf('MANUAL') > -1"
          >手动授权</p>
          <p
            class="text pt10"
            v-show="infoData.bound_mode.indexOf('MANUAL') < 0"
          >自动授权</p>
        </div>
        <div class="three pr68">
          <p>
            <i class="iconfont iconfont-renzheng"></i> 百度官方许可
          </p>
          <p>
            <i class="iconfont iconfont-renzheng"></i> 小程序免繁琐设置
          </p>
          <p>
            <i class="iconfont iconfont-renzheng"></i> 安全可靠的授权
          </p>
        </div>
        <div
          @click="deleteBindTips(infoData.id)"
          class="cancel w80 h26 text-center lh26 c-pointer"
        >解除授权</div>
      </div>
    </div>
    <div class="info pb50 pt30">
      <div class="common-tit1">
        <h4 class="title">
          授权信息
          <i class="min-text fz12 text-gray-d50">当前版本号v.3.9.1</i>
        </h4>
        <div class="edit fz12">
          <span
            @click="mannalEdit"
            class="iconfont iconfont-bianji text-primary fz14 des-editor pr10 c-pointer"
            v-show="infoData.bound_mode.indexOf('MANUAL') > -1"
          ></span>
          <span
            @click="oneStepUpdate(infoData.id)"
            class="dib w80 h26 text-center lh26 refresh"
            v-show="infoData.bound_mode.indexOf('MANUAL') < 0"
          >一键更新</span>
        </div>
      </div>
      <div
        class="info-detail d-flex"
        v-if="mannualShow"
      >
        <div class="left mr90">
          <div class="d-flex">
            <div class="name w110">小程序头像</div>
            <bg-img-box
              :path="[infoData.photo_addresses[0], 'cover']"
              class="w70 h70"
            ></bg-img-box>
          </div>
          <div class="d-flex pt26">
            <div class="name w110">小程序名称</div>
            <div class="about text-gray-l30">
              <el-input
                maxlength="20"
                minlength="2"
                placeholder="请输入小程序名称"
                v-model="infoData.app_name"
              ></el-input>
            </div>
          </div>
          <div class="d-flex pt26">
            <div class="name w110">小程序描述：</div>
            <div class="about text-gray-l30">
              <el-input
                maxlength="100"
                placeholder="请输入小程序描述"
                v-model="infoData.app_desc"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="d-flex">
            <div class="name pr10">小程序码</div>
            <bg-img-box
              :path="[infoData, 'qr_code']"
              class="about w70 h70 bg-contain"
            ></bg-img-box>
          </div>
          <div class="d-flex pt26">
            <div class="name pr10">APPKey</div>
            <div class="about text-gray-l30">
              <el-input
                maxlength="32"
                placeholder="请输入APPKey"
                v-model="infoData.app_key"
              ></el-input>
            </div>
          </div>
          <div
            class="d-flex pt26"
            v-show="infoData.applet_secret"
          >
            <div class="name pr10">AppSecret(小程序密钥)</div>
            <div class="about text-gray-l30">
              <el-input
                maxlength="32"
                placeholder="请输入AppSecret"
                v-model="infoData.applet_secret"
              ></el-input>
            </div>
          </div>
        </div>
      </div>
      <div
        class="info-detail d-flex"
        v-else
      >
        <div class="left mr184">
          <div class="d-flex">
            <div class="name w110">小程序头像</div>
            <div
              :style="infoData.photo_addresses[0].cover | filterImgObj"
              class="w70 h70 bg-contain bsr"
              v-if="infoData.photo_addresses"
            ></div>
            <div
              class="w70 h70 bg-contain bsr"
              style="background-image: url(../../assets/0.jpg);"
              v-else
            ></div>
          </div>
          <div class="d-flex pt26">
            <div class="name w110">小程序名称</div>
            <div class="about text-gray-l30">{{infoData.app_name}}</div>
          </div>
          <div class="d-flex pt26">
            <div class="name w110">小程序描述：</div>
            <div class="about text-gray-l30">{{infoData.app_desc}}</div>
          </div>
        </div>
        <div class="right">
          <div class="d-flex">
            <div class="name pr10">小程序码</div>
            <div
              :style="infoData.qr_code | filterImgObj"
              class="about w70 h70 bg-contain"
              v-if="infoData.qr_code"
            ></div>
            <div
              class="about w70 h70 bg-contain"
              style="background-image: url(../../assets/0.jpg);"
              v-else
            ></div>
          </div>
          <div class="d-flex pt26">
            <div class="name pr10">APPID</div>
            <div class="about text-gray-l30">{{infoData.app_id}}</div>
          </div>
          <div class="d-flex pt26">
            <div class="name pr10">APPKey</div>
            <div class="about text-gray-l30">{{infoData.app_key}}</div>
          </div>
          <div class="d-flex pt26">
            <div class="name pr10">AppSecret(小程序密钥)</div>
            <div class="about text-gray-l30">{{infoData.appletSecret}}</div>
          </div>
        </div>
      </div>
      <div
        class="btn mt30"
        v-show="mannualShow"
      >
        <el-button
          @click="editorDone"
          type="primary"
        >保存</el-button>
        <el-button
          @click="cancelEditor"
          plain
          type="info"
        >返回</el-button>
      </div>
    </div>
    <div class="info-more pt30 bt-gray">
      <div class="info-detail">
        <div class="d-flex pt26">
          <div class="name w166">小程序描述</div>
          <div class="about text-gray-l30">独立便捷的小程序商城，帮助企业商家及个人解决小程序终端销售渠道。</div>
        </div>
        <div class="d-flex pt26">
          <div class="name w166">服务器域名</div>
          <div class="about text-gray-l30">https://xcx.jjiehao.com</div>
        </div>
        <div class="d-flex pt26">
          <div class="name w166">request合法域名</div>
          <div class="about text-gray-l30">https://xcx.jjiehao.com</div>
        </div>
        <div class="d-flex pt26">
          <div class="name w166">socket合法域名</div>
          <div class="about text-gray-l30">https://xcx.jjiehao.com</div>
        </div>
        <div class="d-flex pt26">
          <div class="name w166">uploadFile合法域名</div>
          <div class="about text-gray-l30">https://xcx.jjiehao.com</div>
        </div>
        <div class="d-flex pt26">
          <div class="name w166">downloadFile合</div>
          <div class="about text-gray-l30">https://xcx.jjiehao.com</div>
        </div>
      </div>
    </div>

    <!--解绑提示弹窗-->
    <div class="publish">
      <el-dialog
        :visible.sync="deleteBindDialogVisible"
        append-to-body
        title="提示 TIPS"
        width="355px"
      >
        <div class="publish-inner">
          <div class="publish-title text-center">
            <span class="iconfont iconfont-warning text-danger"></span>
            <em class="pl6 text-gray-d30">是否解绑小程序</em>
          </div>
          <div class="publish-btn pt42 mb15 text-center">
            <el-button
              @click="deleteAuthorize"
              type="primary"
            >确定</el-button>
            <el-button
              @click="cancelDeleteBind"
              type="info"
            >取消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import API from '../API'
import bgImgBox from '../../../common/bg-img-box.vue'
export default {

  name: 'bd-authorize',
  data () {
    return {
      infoData: null,
      deleteBindDialogVisible: false,
      infoDataId: '',
      mannualShow: false,
      routerId: ''
    }
  },
  mounted () {
    console.log('bd-authorize')
    this.routerId = window.location.href.split('=')[1]
    this.detailInfoData()
    // this.http4Get(API.authorizeInfo + window.location.href.split('=')[1]).then(res => {
    //   console.log('res', res);
    //   if (res.state === 0 || res.state === '0') {
    //     this.infoData = res.data
    //   }
    // }).catch(error => {
    //   console.log('error', error);
    // })
  },
  methods: {
    // 详情接口
    detailInfoData () {
      this.http4Get(API.authorizeInfo + window.location.href.split('=')[1]).then(res => {
        let data = res.data
        if (res.state === 0 || res.state === '0') {
          if (data.applet_secret) {
            let len = data.applet_secret.length
            let appletSecret = ''
            for (let i = 0; i < len; i++) {
              appletSecret += '*'
            }
            data.appletSecret = appletSecret
          }
          this.infoData = data
          console.log('this.infoData', this.infoData)
        }
      }).catch(error => {
        console.log('error', error)
      })
    },
    returnTerminal () {
      this.$router.go(-1)
    },
    // 一键更新接口
    oneStepUpdate (id) {
      this.http4Put(API.putUpdate + id).then(res => {
        console.log('update---res===', res)
        if (res.state === 0 || res.state === '0') {
          this.infoData = res.data
        }
      })
    },
    // 接触绑定弹窗
    deleteBindTips (id) {
      this.deleteBindDialogVisible = true
      this.infoDataId = id
    },
    // 取消绑定弹窗
    cancelDeleteBind () {
      this.deleteBindDialogVisible = false
    },
    // 接除绑定
    deleteAuthorize () {
      this.http4Delete(API.deleteAuthorize + this.infoDataId).then(res => {
        console.log('deleteAuthorize---res===', res)
        this.$router.go(-1)
      })
    },
    // 手动绑定编辑显示
    mannalEdit () {
      this.mannualShow = true
    },
    // 编辑
    editorDone () {
      this.http4Put(`${API.editorHandInfo}/${this.infoData.id}`, {
        applet_key: this.infoData.app_key,
        applet_secret: this.infoData.applet_secret,
        app_name: this.infoData.app_name,
        app_desc: this.infoData.app_desc,
        photo_addresses: this.infoData.photo_addresses[0].cover,
        qr_code: this.infoData.qr_code
      }).then(res => {
        this.mannualShow = false
        this.detailInfoData()
      }).catch(error => {
        console.log('error', error)
      })
    },
    cancelEditor () {
      this.mannualShow = false
      this.detailInfoData()
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

.bd-authorize {
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

  .info {
    .min-text {
      font-weight: 100;
    }

    .refresh {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
