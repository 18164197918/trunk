<template>
  <div class="pay-tentant">
    <div class="common-tit1 weight">
      <h4>百度平台</h4>
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

    <!--百度支付列表-->
    <div v-if="bdPayList.length > 0">
      <div
        :key="index"
        class="text-gray-d15 mr60 col-md-3 bd-gray pl20 pr10 pt30 payBox dib mb30"
        v-for="(item,index) in bdPayList"
      >
        <dl class="d-flex mb10">
          <dt class="mr20">支付名称 :</dt>
          <dd>{{item.name}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">百度商户号 :</dt>
          <dd>{{item.m_deal_id}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">商户秘钥(key) :</dt>
          <dd>{{item.encode_mapp_key}}</dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">支付私钥 :</dt>
          <dd :class="item.has_rsa_private_key?'text-primary':'text-gray-l30'">
            {{item.has_rsa_private_key ?
            '支付证书已上传':'支付证书未上传'}}
          </dd>
        </dl>
        <dl class="d-flex mb10">
          <dt class="mr20">平台公钥 :</dt>
          <dd :class="item.has_rsa_public_key?'text-primary':'text-gray-l30'">
            {{item.has_rsa_public_key ?
            '平台公钥已上传':'平台公钥未上传'}}
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
                >{{item.bind_num > 0 ?'百度终端 :':'暂未绑定终端'}}</span>
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
            <span class="ml3">编辑</span>
          </el-button>
          <el-button
            :disabled="item.bind_num > 0"
            @click="deletePayInfo(item.id)"
            class="iconfont iconfont-close fz14"
            type="text"
          >
            <span class="ml3">删除</span>
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
          :model="bdPayInfo"
          :rules="bdPayInfoRules"
          label-width="120px"
          ref="ruleBdPay"
          size="small"
        >
          <el-form-item
            label="支付名称 :"
            prop="name"
          >
            <el-input
              maxlength="20"
              placeholder="请输入支付名称"
              v-model="bdPayInfo.name"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="DealID :"
            prop="m_deal_id"
          >
            <el-input
              maxlength="18"
              placeholder="请输入DealID"
              v-model="bdPayInfo.m_deal_id"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="APP KEY :"
            prop="m_app_key"
          >
            <el-input
              @blur="mchKeyBlur('m_app_key')"
              @focus="mchKeyFocus('m_app_key')"
              maxlength="32"
              placeholder="请输入APP KEY"
              ref="mchKey"
              v-model="bdPayInfo.m_app_key"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="支付私钥 :"
            prop="rsa_private_key"
          >
            <el-input
              @blur="mchKeyBlur('rsa_private_key')"
              @focus="mchKeyFocus('rsa_private_key')"
              placeholder="请输入支付私钥"
              type="textarea"
              v-model="bdPayInfo.rsa_private_key"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="平台公钥 :"
            prop="rsa_public_key"
          >
            <el-input
              @blur="mchKeyBlur('rsa_public_key')"
              @focus="mchKeyFocus('rsa_public_key')"
              placeholder="请输入请输入平台公钥"
              type="textarea"
              v-model="bdPayInfo.rsa_public_key"
            ></el-input>
          </el-form-item>

          <el-form-item class="mt25">
            <el-button
              @click="addPayBox = !addPayBox"
              class="w120"
              type="info"
            >取消</el-button>
            <el-button
              @click="infoSave('ruleBdPay')"
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
      bdPayList: [],
      addTitle: '新建百度支付 NEWLY BUILD',
      sureTitle: '确定',
      chooseId: '',
      deleteId: '',
      bdPayInfo: {
        name: '', // 支付名称
        m_deal_id: '', // 百度商户号
        m_app_key: '', // 商户秘钥(key)
        rsa_private_key: '', // 支付私钥
        rsa_public_key: '' // 平台公钥
      },
      bdPayInfoRules: {
        name: [{
          required: true,
          message: '支付名称不能为空',
          trigger: 'blur'
        }, {
          max: 20,
          message: '最大不能超过20个字符',
          trigger: 'blur'
        }],
        m_deal_id: [{
          required: true,
          message: '百度商户号不能为空',
          trigger: 'blur'
        },
        {
          pattern: /[0-9]/g,
          message: '百度商户号必须为数字'
        },
        {
          max: 18,
          message: '最大不能超过18个字符',
          trigger: 'blur'
        }
        ],
        m_app_key: [{
          required: true,
          message: '商户秘钥不能为空',
          trigger: 'blur'
        }, {
          max: 32,
          message: '最大不能超过32个字符',
          trigger: 'blur'
        }]
      }
    }
  },
  created () {
    this.getBdPayList()
  },
  methods: {
    getBdPayList () {
      this.http4Get(API.bdPayList).then(res => {
        res.collection.forEach(list => {
          list.terminal = false
          list.bindTerminal = []
          list.oldAppKey = list.encode_mapp_key
          list.oldPrivateKey = list.has_rsa_private_key ? '支付证书已上传' : '支付证书未上传'
          list.oldPublicKey = list.has_rsa_public_key ? '平台公钥已上传' : '平台公钥未上传'
        })
        this.bdPayList = res.collection
      })
    },

    mchKeyFocus (key) {
      if (this.chooseId) {
        this.bdPayList.forEach(list => {
          if (list.id === this.chooseId) {
            if (key === 'm_app_key' && this.bdPayInfo[key] === list.oldAppKey) {
              this.bdPayInfo[key] = ''
            } else if (key === 'rsa_private_key' && this.bdPayInfo[key] === list.oldPrivateKey) {
              this.bdPayInfo[key] = ''
            } else if (key === 'rsa_public_key' && this.bdPayInfo[key] === list.oldPublicKey) {
              this.bdPayInfo[key] = ''
            }
          }
        })
      }
    },

    mchKeyBlur (key) {
      if (this.chooseId) {
        this.bdPayList.forEach(list => {
          if (list.id === this.chooseId && !this.bdPayInfo[key]) {
            if (key === 'm_app_key') {
              this.bdPayInfo[key] = list.oldAppKey
            } else if (key === 'rsa_private_key') {
              this.bdPayInfo[key] = list.oldPrivateKey
            } else if (key === 'rsa_public_key') {
              this.bdPayInfo[key] = list.oldPublicKey
            }
          }
        })
      }
    },

    addPay (data) {
      this.addPayBox = true
      if (data) {
        this.chooseId = data.id
        this.bdPayInfo = {
          name: data.name, // 支付名称
          m_deal_id: data.m_deal_id, // 百度商户号
          m_app_key: data.encode_mapp_key, // 商户秘钥(key)
          rsa_private_key: data.has_rsa_private_key ? '支付证书已上传' : '支付证书未上传', // 支付私钥
          rsa_public_key: data.has_rsa_public_key ? '平台公钥已上传' : '平台公钥未上传' // 平台公钥
        }
      } else {
        this.chooseId = ''
        this.bdPayInfo = {
          name: '', // 支付名称
          m_deal_id: '', // 百度商户号
          m_app_key: '', // 商户秘钥(key)
          rsa_private_key: '', // 支付证书
          rsa_public_key: '' // 证书秘钥
        }
      }
    },

    seeTerminal (data) {
      this.http4Get(`${API.bdPayTerminal}${data.id}`).then(res => {
        this.bdPayList.forEach(list => {
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
            url = `${API.bdAddPay}/${this.chooseId}`
            methods = 'put'
            this.bdPayList.forEach(list => {
              if (list.id === this.chooseId) {
                if (this.bdPayInfo.m_app_key === list.oldAppKey) {
                  this.bdPayInfo.m_app_key = ''
                }
                if (this.bdPayInfo.rsa_private_key === list.oldPrivateKey) {
                  this.bdPayInfo.rsa_private_key = ''
                }
                if (this.bdPayInfo.rsa_public_key === list.oldPublicKey) {
                  this.bdPayInfo.rsa_public_key = ''
                }
              }
            })
          } else {
            url = API.bdAddPay
            methods = 'post'
          }
          this.http4({
            method: methods,
            url: url,
            data: this.bdPayInfo
          }).then((res) => {
            this.getBdPayList()
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
      this.http4Delete(`${API.bdAddPay}/${this.deleteId}`).then((res) => {
        this.dialogRemove = false
        this.getBdPayList()
      })
    }
  }
}

</script>
