<template>
  <div class="pay-tentant">
    <div class="common-tit1 weight">
      <h4>微信平台</h4>
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

    <el-button
      @click="addPay()"
      class="w80 mb30"
      size="small"
      type="primary"
    >新建</el-button>

    <!--微信支付列表-->
    <div v-if="wxPayList.length > 0">
      <div
        :key="index"
        class="text-gray-d15 mr60 col-md-3 bd-gray pl20 pr10 pt30 payBox dib mb30"
        v-for="(item,index) in wxPayList"
      >
        <dl class="d-flex mb10">
          <dt class="mr20">支付名称 :</dt>
          <dd>{{item.name}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">微信商户号 :</dt>
          <dd>{{item.mch_id}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">商户秘钥(key) :</dt>
          <dd>{{item.encode_mch_key}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">私钥信息证书 :</dt>
          <dd
            :class="item.has_api_client_cert_pfx?'text-primary':'text-gray-l30'"
          >
            {{item.has_api_client_cert_pfx ?
            '私钥信息证书已上传':'私钥信息证书未上传'}}
          </dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">支付证书 :</dt>
          <dd :class="item.has_api_client_cert?'text-primary':'text-gray-l30'">
            {{item.has_api_client_cert ?
            '支付证书已上传':'支付证书未上传'}}
          </dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">证书秘钥 :</dt>
          <dd :class="item.has_api_client_key?'text-primary':'text-gray-l30'">
            {{item.has_api_client_key ?
            '支付证书秘钥已上传':'支付证书秘钥未上传'}}
          </dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">已绑定终端 :</dt>
          <dd
            @click="seeTerminal(item)"
            class="iconfont iconfont-chakan1 fz18 c-pointer text-primary"
          >
            <div
              class="seeTerminal bd-gray"
              v-if="item.terminal"
            >
              <div class="d-flex text-gray-d10 fz12">
                <span
                  class="mr10 dib pl10 pr5"
                >{{item.bind_num > 0 ?'微信终端 :':'暂未绑定终端'}}</span>
                <div class="text-left">
                  <p
                    :key="index"
                    v-for="(list,index) in item.bindTerminal"
                  >{{list.applet_name}}</p>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        <div class="text-right">
          <el-button
            @click="addPay(item)"
            class="iconfont iconfont-edit1 fz14"
            type="text"
          >
            <span class="ml5">编辑</span>
          </el-button>
          <el-button
            :disabled="item.bind_num > 0"
            @click="deletePayInfo(item.id)"
            class="iconfont iconfont-close fz14"
            type="text"
          >
            <span class="ml5">删除</span>
          </el-button>
        </div>
      </div>
    </div>
    <div
      class="d-flex align-center justify-center"
      style="min-height: 700px"
      v-if="nodataShow"
    >
      <img
        alt
        class="dib"
        src="../assets/no-data.jpg"
      >
    </div>

    <!--新建弹窗-->
    <div>
      <el-dialog
        :title="addTitle"
        :visible.sync="addPayBox"
        append-to-body
        class="pl40 pr40"
        lock-scroll
        width="630px"
      >
        <el-form
          :model="wxPayInfo"
          :rules="wxPayInfoRules"
          label-width="120px"
          ref="ruleWxPay"
          size="small"
        >
          <el-form-item
            label="支付名称 :"
            prop="name"
          >
            <el-input
              maxlength="20"
              placeholder="请输入支付名称"
              v-model="wxPayInfo.name"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="微信商户号 :"
            maxlength="40"
            prop="mch_id"
          >
            <el-input
              maxlength="40"
              placeholder="请输入微信商户号"
              v-model="wxPayInfo.mch_id"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="商户密钥(key) :"
            prop="mch_key"
          >
            <el-input
              @blur="mchKeyBlur('mch_key')"
              @focus="mchKeyFocus('mch_key')"
              maxlength="40"
              placeholder="请输入商户密钥"
              ref="mchKey"
              v-model="wxPayInfo.mch_key"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="私钥信息证书 :"
            prop="api_client_cert_pfx"
          >
            <div class="bd-gray pl20 d-flex justify-between">
              <span class="w200 dib">{{wxPayInfo.api_client_cert_pfx}}</span>
              <el-button
                @click="uploadSelfFile"
                class="w100"
                type="primary"
              >上传文件</el-button>
            </div>
          </el-form-item>

          <el-form-item
            label="支付证书 :"
            prop="api_client_cert"
          >
            <el-input
              @blur="mchKeyBlur('api_client_cert')"
              @focus="mchKeyFocus('api_client_cert')"
              placeholder="请输入支付证书"
              type="textarea"
              v-model="wxPayInfo.api_client_cert"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="证书秘钥 :"
            prop="api_client_key"
          >
            <el-input
              @blur="mchKeyBlur('api_client_key')"
              @focus="mchKeyFocus('api_client_key')"
              placeholder="请输入证书秘钥"
              type="textarea"
              v-model="wxPayInfo.api_client_key"
            ></el-input>
          </el-form-item>

          <el-form-item class="mt25">
            <el-button
              @click="addPayBox = !addPayBox"
              class="w120"
              type="info"
            >取消</el-button>
            <el-button
              @click="infoSave('ruleWxPay')"
              class="w120"
              type="primary"
            >{{sureTitle}}</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>

    <!-- 删除弹窗 -->
    <div>
      <el-dialog
        :visible.sync="dialogRemove"
        append-to-body
        lock-scroll
        title="提示 TIPS"
        width="354px"
      >
        <span>此操作将删除该商户支付信息，是否继续？</span>
        <span
          class="dialog-footer"
          slot="footer"
        >
          <el-button @click="dialogRemove = false">取 消</el-button>
          <el-button
            @click="sureRemove()"
            type="primary"
          >确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import API from './API'

export default {

  data () {
    return {
      nodataShow: false,
      dialogRemove: false,
      addPayBox: false,
      wxPayList: [],
      addTitle: '新建微信支付 NEWLY BUILD',
      sureTitle: '确定',
      chooseId: '',
      deleteId: '',
      wxPayInfo: {
        name: '', // 支付名称
        mch_id: '', // 微信商户号
        mch_key: '', // 商户秘钥(key)
        api_client_cert: '', // 支付证书
        api_client_key: '', // 证书秘钥
        api_client_cert_pfx: '' // 私钥信息证书文件
      },
      wxPayInfoRules: {
        name: [{
          required: true,
          message: '支付名称不能为空',
          trigger: 'blur'
        }, {
          max: 20,
          message: '最大不能超过20个字符',
          trigger: 'blur'
        }],
        mch_id: [{
          required: true,
          message: '微信商户号不能为空',
          trigger: 'blur'
        },
        {
          pattern: /[0-9]/g,
          message: '微信商户号必须为数字'
        },
        {
          max: 40,
          message: '最大不能超过40个字符',
          trigger: 'blur'
        }],
        mch_key: [{
          required: true,
          message: '商户秘钥不能为空',
          trigger: 'blur'
        },
        {
          max: 40,
          message: '最大不能超过40个字符',
          trigger: 'blur'
        }],
        api_client_cert_pfx: [{
          required: true,
          message: '私钥信息证书文件未上传',
          trigger: 'blur'
        }]
      }
    }
  },
  created () {
    this.getWxPayList()
  },
  methods: {
    getWxPayList () {
      this.http8Get(API.wxPayList).then(res => {
        res.collection.forEach(list => {
          list.terminal = false
          list.bindTerminal = []
          list.oldMchKey = list.encode_mch_key
          list.oldClientCert = list.has_api_client_cert ? '支付证书已上传' : '支付证书未上传'
          list.oldClientKey = list.has_api_client_key ? '证书秘钥已上传' : '证书秘钥未上传'
          list.oldClientCertPfx = list.has_api_client_cert_pfx ? '私钥信息证书文件已上传' : '私钥信息证书文件未上传'
        })
        this.wxPayList = res.collection
      })
    },

    uploadSelfFile () {
      this.$filemanager.open({
        limit: 1,
        type: 'file',
        success: obj => {
          this.wxPayInfo.api_client_cert_pfx = obj.ref_url
          console.log(this.wxPayInfo, obj.ref_url, 1111)
        }
      })
    },

    mchKeyFocus (key) {
      if (this.chooseId) {
        this.wxPayList.forEach(list => {
          if (list.id === this.chooseId) {
            if (key === 'mch_key' && this.wxPayInfo[key] === list.oldMchKey) {
              this.wxPayInfo[key] = ''
            } else if (key === 'api_client_cert' && this.wxPayInfo[key] === list.oldClientCert) {
              this.wxPayInfo[key] = ''
            } else if (key === 'api_client_key' && this.wxPayInfo[key] === list.oldClientKey) {
              this.wxPayInfo[key] = ''
            }
          }
        })
      }
    },

    mchKeyBlur (key) {
      if (this.chooseId) {
        this.wxPayList.forEach(list => {
          if (list.id === this.chooseId && !this.wxPayInfo[key]) {
            if (key === 'mch_key') {
              this.wxPayInfo[key] = list.oldMchKey
            } else if (key === 'api_client_cert') {
              this.wxPayInfo[key] = list.oldClientCert
            } else if (key === 'api_client_key') {
              this.wxPayInfo[key] = list.oldClientKey
            }
          }
        })
      }
    },

    addPay (data) {
      this.addPayBox = true
      if (data) {
        this.chooseId = data.id
        this.wxPayInfo = {
          name: data.name, // 支付名称
          mch_id: data.mch_id, // 微信商户号
          mch_key: data.encode_mch_key, // 商户秘钥(key)
          api_client_cert: data.has_api_client_cert ? '支付证书已上传' : '支付证书未上传', // 支付证书
          api_client_key: data.has_api_client_key ? '证书秘钥已上传' : '证书秘钥未上传', // 证书秘钥
          api_client_cert_pfx: data.has_api_client_cert_pfx ? '私钥信息证书文件已上传' : '私钥信息证书文件未上传' // 私钥信息证书
        }
      } else {
        this.chooseId = ''
        this.wxPayInfo = {
          name: '', // 支付名称
          mch_id: '', // 微信商户号
          mch_key: '', // 商户秘钥(key)
          api_client_cert: '', // 支付证书
          api_client_key: '', // 证书秘钥
          api_client_cert_pfx: '' // 私钥信息证书
        }
      }
    },

    seeTerminal (data) {
      this.http8Get(`${API.payTerminal}${data.id}`).then(res => {
        this.wxPayList.forEach(list => {
          if (list.id === data.id) {
            list.terminal = !data.terminal
            list.bindTerminal = res.collection
          }
        })
      })
    },
    infoSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = ''

          let methods = ''
          if (this.chooseId) {
            url = `${API.addPay}/${this.chooseId}`
            methods = 'put'
            this.wxPayList.forEach(list => {
              if (list.id === this.chooseId) {
                if (this.wxPayInfo.mch_key === list.oldMchKey) {
                  this.wxPayInfo.mch_key = ''
                }
                if (this.wxPayInfo.api_client_cert === list.oldClientCert) {
                  this.wxPayInfo.api_client_cert = ''
                }
                if (this.wxPayInfo.api_client_key === list.oldClientKey) {
                  this.wxPayInfo.api_client_key = ''
                }
                if (this.wxPayInfo.api_client_cert_pfx === list.oldClientCertPfx) {
                  this.wxPayInfo.api_client_cert_pfx = ''
                }
              }
            })
          } else {
            url = API.addPay
            methods = 'post'
          }
          this.http8({
            method: methods,
            url: url,
            data: this.wxPayInfo
          }).then((res) => {
            this.getWxPayList()
            this.addPayBox = false
          })
        } else {
          this.$message({
            message: '请补全表单内容！',
            type: 'warning'
          })
        }
      })
    },
    deletePayInfo (id) {
      this.dialogRemove = true
      this.deleteId = id
    },
    sureRemove () {
      this.http8Delete(`${API.addPay}/${this.deleteId}`).then((res) => {
        this.dialogRemove = false
        this.getWxPayList()
      })
    }
  }
}

</script>
