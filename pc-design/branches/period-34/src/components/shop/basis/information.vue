<style scoped lang="scss">
.dialog-title {
  span {
    text-transform: uppercase;
    color: $gray;
    font-weight: normal;
  }
}

.dialog-content {
  h3 {
    text-align: center;
    color: $black-wd1;
    margin-bottom: 10px;
  }

  p + p {
    margin-top: 10px;
  }
}
</style>
<style>
.store-information .el-checkbox__label {
  padding-left: 5px;
}
.customer-service .el-form-item__content {
  margin-left: 0 !important;
}
</style>

<template>
  <div>
    <div class="app-block-lv2">
      <h6>店铺信息</h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="100px"
        ref="form"
      >
        <el-form-item
          label="店铺名称"
          prop="name"
        >
          <el-input
            class="w300"
            placeholder="请输入店铺名称，最多30个字"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="店铺LOGO"
          prop="logo"
        >
          <div class="dfc">
            <bg-img-box
              :src.sync="form.logo"
              class="w70 h70 dib mr15"
              upload
            ></bg-img-box>
          </div>
        </el-form-item>
        <business-hours :hoursList.sync="form.business_hours" label="营业时间"></business-hours>
        <el-form-item
          label="联系电话"
          prop="mobile"
        >
          <el-input
            class="w300"
            placeholder="请输入联系电话"
            v-model="form.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="店铺简介"
          prop="remark"
        >
          <el-input
            :rows="6"
            class="w420"
            maxlength="255"
            placeholder="请输入店铺简介内容，不超过255个字"
            type="textarea"
            v-model="form.remark"
          ></el-input>
        </el-form-item>
        <a-map
          :labelWidth="labelWidth"
          :required="isRequired"
          label="门店地址"
          v-bind.sync="locationData"
        ></a-map>
      </el-form>
    </div>
    <div class="app-block-lv2">
      <h6>联系人信息</h6>
      <el-form
        :model="form"
        :rules="rules"
        :status-icon="true"
        class="store-information"
        label-width="100px"
        ref="form1"
      >
        <el-form-item
          label="联系人"
          prop="contact"
        >
          <el-input
            class="w300"
            placeholder="请填写您的昵称"
            v-model="form.contact"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input
            class="w300"
            placeholder="请填写您的手机号码"
            v-model.number="form.customer_service_phone"
          ></el-input>
        </el-form-item>
        <el-form-item label="QQ号">
          <el-input
            class="w300"
            placeholder="请填写您的QQ号"
            v-model="form.qq"
          ></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input
            class="w300"
            placeholder="请填写您的微信号"
            v-model="form.wechat_code"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input
            class="w300"
            placeholder="请填写您的邮箱"
            v-model="form.email"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dfc">
      <el-checkbox
        :false-label="0"
        :true-label="1"
        style="vertical-align:middle"
        v-model="is_agree"
      >我已阅读并同意</el-checkbox>
      <span
        @click="dialogVisible = true"
        class="text-primary"
        style="vertical-align:middle"
      >《担保交易服务协议》</span>

      <el-button
        @click="submit()"
        class="w150 ml50"
        type="primary"
      >保存并开通门店</el-button>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="600px"
    >
      <aside class="dialog-content">
        <h3>担保交易服务协议</h3>
        <p>1、本平台不对卖方发布的商品信息做任何保证或承诺，包括但不限于商品来源的合法性、商品权利瑕疵、商品质量瑕疵、卖家对商品描述的真实性等问题；</p>
        <p>2、本平台不负责审核卖方发布的商品信息中的图片、文字、Logo等是否基于合法权益，如该类信息涉及侵犯第三方知识产权等相关权益，本平台不承担任何责任；责任由卖方成担。</p>
        <p>3、本平台为买卖双方提供的担保交易，仅为确保买方能够确实收到交易中约定的商品，而不对商品质量、品质、真实性等负责。任何与商品质量、品质以及其他有关的交易纠纷，请买卖双方自行协商解决；</p>
        <p>4、买卖双方在担保交易中，均应提供真实有效的联系方式，任意一方提供的联系方式不实或无效，即视为放弃担保交易的保护；</p>
        <p>5、买卖双方通过担保交易方式达成交易后，交易款将进入卖方账号，卖方如果以买家交易行为来进行经济犯罪，一切民事和刑事责任由卖家自担，如出现此种事件，本平台会以维护买家的权益出发，积极配合有关部门进行处理。</p>
        <p>6、买方未进行购买票务的使用，且在约定的期限内，双方不提出任何争议，则担保交易服务截止。该笔交易不再受到担保交易的保护，不再受理买卖双方针对该笔交易的任何纠纷和争议；</p>
        <p>7、双方对交易提出争议后，本平台有权要求双方出示相关证据，并根据国家相关法规协调双方解决。仍不能解决的，买卖双方可提请仲裁机构或法律解决；</p>
        <p>8、本平台会尽力维护平台信息的安全，但法律规定的不可抗力，以及因为黑客入侵、计算机病毒等原因造成用户资料泄露、丢失、被盗用、被篡改的，本平台不承担任何责任。</p>
        <p>9、本平台仅提供技术服务，不是票务购买预订合同的权利义务主体，不介入买卖双方之间的票务纠纷，但本平台将提供一切协助，保护用户的合法权益。</p>
      </aside>
      <span
        class="dialog-title"
        slot="title"
      >
        <strong>担保交易服务协议</strong>
        <span class="fz18">Agreement</span>
      </span>
      <span
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          @click="dialogVisible = false"
          type="primary"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import API from './API'
import businessHours from '../common/business-hours.vue'

export default {
  name: 'open',
  components: { businessHours },
  data () {
    return {
      loading: false,
      dialogVisible: false,
      labelWidth: 100,
      isRequired: true,
      is_agree: 1,
      form: {
        'name': '',
        'logo': '111',
        'qq': '',
        'mobile': '',
        'contact': '',
        'wechat_code': '',
        'email': '',
        'address': '',
        'province_code': '',
        'city_code': '',
        'area_code': '',
        'remark': '',
        'customer_service_phone': '',
        'business_hours': [],
        'wx_longitude': '',
        'wx_latitude': ''
      },
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      rules: {
        name: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' },
          { max: 30, message: '最多30个字', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入联系人昵称', trigger: 'blur' }
        ],
        logo: [
          { required: true, message: '请上传店铺logo', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        remark: [
          { required: true, message: '请输入店铺简介', trigger: 'blur' },
          { max: 255, message: '最多255个字', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        is_agree: [
          {
            type: 'number',
            required: true,
            validator: (rule, value, callback) => {
              if (value === 0) {
                callback(new Error('请勾选阅读服务协议'))
              } else if (value === 1) {
                callback()
              }
            },
            message: '请勾选阅读服务协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created () {
    this.$httpGet(API.shop).then(({ data: shop }) => {
      if (shop.name) {
        this.form = shop
        this.locationData = {
          'province': this.form.province_code,
          'city': this.form.city_code,
          'area': this.form.area_code,
          'address': this.form.address,
          'lng': this.form.wx_longitude,
          'lat': this.form.wx_latitude
        }
      }
    }).finally(() => {
      this.loading = false
    })
  },

  methods: {
    handleChange (value) {
      let selectInfo = this.getCascaderObj(value, this.location, 'name', 'districts')
      this.form.province = selectInfo[0].adcode
      this.form.city = selectInfo[1].adcode
      this.form.area = selectInfo[2].adcode
    },

    // 上传logo
    submit () {
      this.form.wx_longitude = this.locationData.lng
      this.form.wx_latitude = this.locationData.lat
      this.form.province_code = this.locationData.province
      this.form.city_code = this.locationData.city
      this.form.area_code = this.locationData.area
      this.form.address = this.locationData.address

      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$refs['form1'].validate((valid) => {
            if (valid) {
              if (!this.is_agree) {
                this.$message({
                  message: '请阅读并同意担保交易服务协议',
                  type: 'warning'
                })
                return
              }
              this.$httpPost(API.shop, { data: this.form })
            }
          })
        }
      })
    }
  }
}
</script>
