<style lang="scss">
.distributionSet {
  .el-radio,
  .el-radio__label {
    font-size: 12px;
    color: #333;
  }
}
</style>
<template>
  <el-form
    :model="form"
    :rules="rules"
    class="mt20 distributionSet"
    label-position="right"
    label-width="180px"
    ref="form"
  >
    <el-form-item
      label="自定义名称："
      prop="name"
    >
      <el-input
        class="w200"
        size="mini"
        v-model="form.name"
      ></el-input>
      <span class="fz12 text-gray-l20 ml20">用户提交订单在订单页面显示的自定义名称</span>
    </el-form-item>
    <el-form-item
      label="设置为默认配送方式："
      prop="name"
    >
      <el-switch
        active-color="#34cd96"
        active-text="已开启"
        inactive-color="#ddd"
        inactive-text="已关闭"
        v-model="form.default_delivery"
      ></el-switch>
      <span class="fz12 text-gray-l20 ml20">买家下单时，默认[普通快递]作为默认配送方式</span>
    </el-form-item>
    <el-form-item
      label="线下支付："
      prop="name"
    >
      <el-switch
        active-color="#34cd96"
        active-text="已开启"
        inactive-color="#ddd"
        inactive-text="已关闭"
        v-model="form.offline_payment"
      ></el-switch>
      <div
        class="mt10"
        v-if="form.offline_payment"
      >
        <el-input
          class="w200 mr5"
          size="mini" maxlength="6" placeholder="最多输入6个字"
          v-model="form.payment_name"
        ></el-input>
        <span class="fz12 text-gray-l20">用户提交订单在订单页面显示的自定义名称</span>
      </div>
    </el-form-item>
    <el-form-item
      label="自定义配送时间："
      prop="name"
    >
      <el-switch
        active-color="#34cd96"
        active-text="已开启"
        inactive-color="#ddd"
        inactive-text="已关闭"
        v-model="form.able_custom_delivery"
      ></el-switch>
      <span class="fz12 text-gray-l20 ml20">开启自定义配送时间后，买家在下单时，可选择配送日期</span>
      <div
        class="fz12"
        v-if="form.able_custom_delivery"
      >
        <el-radio-group v-model="form.delivery_mode">
          <el-radio
            :label="'STANDARD_DELIVERY'"
            class="fz12"
          >使用固定配送时间选项</el-radio>
          <el-radio
            :label="'CUSTOM_DELIVERY'"
            class="fz12"
          >自定义配送时间选项</el-radio>
        </el-radio-group>
        <div
          v-if="form.delivery_mode==='STANDARD_DELIVERY'"
        >工作日、双休日或节假日可送货/只工作日送货/只双休日、节假日送货</div>
        <div v-if="form.delivery_mode==='CUSTOM_DELIVERY'">
          <div>最早可配送时间，下单后
            <el-input-number
              :controls="false"
              :max="60"
              :min="1" :precision="0"
              class="w150 mr5"
              size="mini"
              v-model="form.earliest_days"
            ></el-input-number>
            <span class="text-gray-l20">天，可送货上门</span>
          </div>
          <div>最晚可配送时间，下单后
            <el-input-number
              :controls="false"
              :max="60"
              :min="1" :precision="0"
              class="w150 mr5"
              size="mini"
              v-model="form.latest_days"
            ></el-input-number>
            <span class="text-gray-l20">天，可送货上门</span>
          </div>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="自定义下单名称：">
      <span class="text-primary">刷新</span>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          label="字段名称"
          prop="date"
        ></el-table-column>
        <el-table-column
          label="姓名"
          prop="字段格式"
        ></el-table-column>
        <el-table-column
          label="是否必填"
          prop="address"
        ></el-table-column>
        <el-table-column
          label="排序"
          prop="address"
        ></el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="submit"
        type="primary"
      >保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import API from '../API'

export default {
  name: 'distribution-set',
  props: ['status'],
  data () {
    return {
      form: {
        'able_custom_delivery': false,
        'able_delivery': false,
        'default_delivery': false,
        'delivery_mode': 'STANDARD_DELIVERY',
        'earliest_days': '',
        'latest_days': '',
        'name': '商家配送',
        'offline_payment': false,
        'payment_name': null
      },
      tableData: [],
      rules: {
        name: [{
          required: true,
          message: '请输入自定义名称',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 10,
          message: '长度在 2 到 10 个字符',
          trigger: 'blur'
        }]

      }

    }
  },
  watch: {
    status (val) {
      this.form.able_delivery = val
    },
    p_show (val) {
      this.$emit('update:show', val)
    }
  },
  created () {
    this.$httpGet(API.deliverySet, {
      resource: {
        id: this.$route.params.id
      }
    }).then((res) => {
      if (res.data.id !== '0') {
        this.form = res.data
        this.$emit('update:status', this.form.able_delivery)
        this.$emit('update:opens', true)
      }
      if (res.data.id === '0') {
        this.$emit('update:opens', false)
      }
    })
  },
  methods: {
    submit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$httpPost(API.deliverySet, {
            resource: {
              id: this.$route.params.id
            },
            data: this.form
          }).then(() => {
            // this.$router.back(-1)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
