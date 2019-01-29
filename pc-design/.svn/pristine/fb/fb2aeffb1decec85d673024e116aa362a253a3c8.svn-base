<style lang="scss">
.myPickup {
  .el-input__inner {
    padding: 0 5px;
  }
  .el-radio,
  .el-radio__label {
    font-size: 12px;
    color: #333;
  }
}
</style>
<template>
  <div class="myPickup">
    <el-form
      :model="form"
      :rules="rules"
      class="mt20"
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
      <el-form-item label="系统自动完成备货：">
        <el-switch
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="form.auto_stock"
        ></el-switch>
        <div
          class="app-block-lv2 fz12"
          v-if="form.auto_stock"
        >
          <el-radio-group v-model="form.auto_stock_mode">
            <el-radio
              :label="'PICKUP_ON_CURRENT_DAY'"
              class="dfc lh25"
            >
              <span>最早当天可提货，下单</span>
              <el-input-number
                :controls="false"
                :disabled="form.auto_stock_mode !== 'PICKUP_ON_CURRENT_DAY'"
                :max="23"
                :min="0"
                :precision="0"
                class="w60 pl5 pr5"
                size="mini"
                v-model="myTempValue.value1"
              ></el-input-number>
              <span class="mr5">小时
                <el-input-number
                  :controls="false"
                  :disabled="form.auto_stock_mode !== 'PICKUP_ON_CURRENT_DAY'"
                  :max="59"
                  :min="0"
                  :precision="0"
                  class="w60 pl5 pr5"
                  size="mini"
                  v-model="myTempValue.value2"
                ></el-input-number>分钟后，可提货
              </span>
            </el-radio>
            <el-radio
              :label="'PICKUP_ON_SETTING_DAY'"
              class="dfc lh25 ml0 mt10"
            >
              <span>按指定天数备货，下单</span>
              <el-input-number
                :controls="false"
                :disabled="form.auto_stock_mode !== 'PICKUP_ON_SETTING_DAY'"
                :max="60"
                :min="0"
                :precision="0"
                class="w60 pl5 pr5"
                size="mini"
                v-model="form.standard_days"
              ></el-input-number>
              <span class="mr5">天后，买家可提货</span>
            </el-radio>
            <el-radio
              :label="'PICKUP_BY_ORDER_TIME'"
              class="lh25 ml0 mt10"
            >
              <span>按下单时间，确认备货天数</span>
            </el-radio>
          </el-radio-group>
          <div class="dfc pl25 mt10">
            <span>当下单时间早于</span>
            <!-- <el-input
              :disabled="form.auto_stock_mode !== 'PICKUP_BY_ORDER_TIME'"
              class="w40 ml5"
              size="mini"
              v-model="myTempValue.value3"
            ></el-input>-->
            <el-input-number
              :controls="false"
              :disabled="form.auto_stock_mode !== 'PICKUP_BY_ORDER_TIME'"
              :max="23"
              :min="0"
              :precision="0"
              class="w60 pl5 pr5"
              size="mini"
              v-model="myTempValue.value3"
            ></el-input-number>
            <span class="mr5">时</span>
            <el-input-number
              :controls="false"
              :disabled="form.auto_stock_mode !== 'PICKUP_BY_ORDER_TIME'"
              :max="59"
              :min="0"
              :precision="0"
              class="w60 pl5 pr5"
              size="mini"
              v-model="myTempValue.value4"
            ></el-input-number>

            <span class="ml5 mr5">分</span>，则
            <el-input-number
              :controls="false"
              :disabled="form.auto_stock_mode !== 'PICKUP_BY_ORDER_TIME'"
              :max="60"
              :min="0"
              :precision="0"
              class="w60 pl5 pr5"
              size="mini"
              v-model="form.before_order_days"
            ></el-input-number>
            <span>天后，买家可提货</span>
          </div>
          <div class="dfc pl25 mt10">
            <span>当下单时间晚于该时间点，则</span>
            <span class="ml5 mr5">
              <el-input-number
                :controls="false"
                :disabled="form.auto_stock_mode !== 'PICKUP_BY_ORDER_TIME'"
                :max="60"
                :min="0"
                :precision="0"
                class="w60 pl5 pr5"
                size="mini"
                v-model="form.after_order_days"
              ></el-input-number>天后，买家可提货
            </span>
          </div>
        </div>
      </el-form-item>
      <el-form-item
        label="买家可选自提时间:"
        v-if="form.auto_stock"
      >
        <el-switch
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="form.able_select_pickup_time"
        ></el-switch>
        <span
          class="fz12 text-gray-l20 ml40"
        >1、开启自动备货后，才能开启可选自提时间；2、开启后，买家在下单页必须选择可提货时间，不开启则屏蔽可提货时间</span>
        <div
          class="app-block-lv2 fz12"
          v-if="form.able_select_pickup_time"
        >
          <el-row :gutter="24">
            <el-col
              :span="4"
              class="fz12 text-right"
            >
              <span class="fz12">
                可配送时间段
                <i class="text-danger">*</i>
              </span>
            </el-col>
            <el-col :span="8">
              <el-time-picker
                :clearable="false"
                end-placeholder="结束时间"
                format="HH:mm"
                is-range
                placeholder="选择时间范围"
                range-separator="-"
                start-placeholder="开始时间"
                style="width:200px"
                v-model="timeValue"
              ></el-time-picker>
            </el-col>
            <el-col :span="12">
              <div>
                <el-button
                  @click="addTime"
                  plain
                  size="mini"
                >新增时间段</el-button>
                <span class="fz12 ml10">输入时间格式参考：08:00-13:00，请按顺序添加</span>
              </div>
            </el-col>
          </el-row>
          <el-row
            :gutter="24"
            class="mt20"
          >
            <el-col
              :offset="4"
              :span="20"
            >
              <el-tag
                :key="index"
                @close="deletTime(index)"
                class="mr10"
                closable
                v-for="(item, index) in pickup_period_list"
              >{{item}}</el-tag>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-form-item label="提货有效期：">
        <el-switch
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="form.able_pickup_expired"
        ></el-switch>
        <div
          class="app-block-lv2 fz12"
          v-if="form.able_pickup_expired"
        >
          <el-row :gutter="24">
            <el-col
              :span="4"
              class="text-right"
            >
              备货完成
              <i class="text-danger">*</i>
            </el-col>
            <el-col :span="20">
              <el-input-number
                :controls="false"
                :max="365"
                :min="0"
                :precision="0"
                class="w80 pl5 pr5"
                size="mini"
                v-model="form.pickup_expired"
              ></el-input-number>天后，停止提货
              <span class="text-gray-l40">填写0天，即仅限当天可提货</span>
            </el-col>
            <el-col
              :span="4"
              class="text-right"
            >
              过期订单处理
              <i class="text-danger">*</i>
            </el-col>
            <el-col :span="20">
              <el-radio-group v-model="form.expired_order_handle_type">
                <el-radio
                  :label="'ORDER_COMPLETE_NO_REFUND'"
                  class="fz12"
                >过期后，订单将自动完成，不退款</el-radio>
                <el-radio
                  :label="'ORDER_RIGHTS_AUTO_REFUND'"
                  class="fz12"
                >过期后，订单将自动维权，自动向买家退款</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-form-item label="是否开启跨自提点核销：">
        <el-switch
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="form.auto_stock"
        ></el-switch>
        <span
          class="fz12 text-gray-l30 ml15"
        >开启后，买家可在任意自提点完成核销和提货。未开启状态下，买家只能在下单时选择的自提点进行提货并核销。</span>
      </el-form-item>
      <el-form-item label="线下支付：">
        <el-switch
          active-color="#34cd96"
          active-text="已开启"
          inactive-color="#ddd"
          inactive-text="已关闭"
          v-model="form.offline_payment"
        ></el-switch>
        <div
          class="mt10"
          maxlength="6"
          v-if="form.offline_payment"
        >
          <el-input
            class="w200 mr5"
            maxlength="6"
            placeholder="最多输入6个字"
            size="mini"
            v-model="form.payment_name"
          ></el-input>
          <span class="fz12 text-gray-l20">用户提交订单在订单页面显示的自定义名称</span>
        </div>
      </el-form-item>
      <el-form-item label="自定义系统字段名称：">
        <span class="fz12 text-gray-l40">前台显示的自定义名称，最多10个字</span>
        <el-form-item
          class="mb20"
          label="自提点名称"
          label-width="110px"
          prop="custom_pickup_name"
        >
          <el-input
            class="w250"
            size="mini"
            v-model="form.custom_pickup_name"
          ></el-input>
        </el-form-item>
        <el-form-item
          class="mb20"
          label="提货时间名称"
          label-width="110px"
          prop="custom_pickup_time_name"
        >
          <el-input
            class="w250"
            size="mini"
            v-model="form.custom_pickup_time_name"
          ></el-input>
          <span class="fz12 text-gray-l40 ml10">商家未开启自动备货或未开启可选自提时间，则手机端将屏蔽该字段</span>
        </el-form-item>
        <el-form-item
          label="提货手机名称"
          label-width="110px"
          prop="custom_pickup_phone_name"
        >
          <el-input
            class="w250"
            size="mini"
            v-model="form.custom_pickup_phone_name"
          ></el-input>
          <el-checkbox
            class="ml10"
            style="display:inline"
            v-model="form.custom_field_required"
          >设为必填项</el-checkbox>
        </el-form-item>
      </el-form-item>
      <el-form-item label="自定义下单名称：">
        <span class="text-primary">刷新</span>
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="字段名称"></el-table-column>
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
        >添加自定义字段</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import API from '../API'
import { Message } from 'element-ui'
export default {
  name: 'set',
  data () {
    return {
      title: '到店自提',
      form: {
        'name': '',
        'able_select_pickup_time': false, // 买家可选自提时间
        'pickup_period': '',
        'able_pickup_expired': false, // 提货有效期
        'pickup_expired': 10, // 提货有效期天数
        'expired_order_handle_type': 'ORDER_COMPLETE_NO_REFUND', // 提货有效期天数
        'able_pickup': false, // 总开关
        'auto_stock': false, // 系统自动完成备货
        'auto_stock_mode': 'PICKUP_ON_CURRENT_DAY',
        'pickup_after_minutes': '15',
        'standard_days': 10,
        'order_time': '11:00',
        'before_order_days': 1,
        'after_order_days': 10,
        'custom_pickup_name': '',
        'custom_pickup_time_name': '',
        'custom_pickup_phone_name': '',
        'custom_field_required': true, // 是否必填
        'offline_payment': false, // 线下支付,
        'payment_name': null
      },
      myTempValue: {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      },
      pickup_period_list: [],
      timeValue: [new Date(2019, 1, 1, 8, 30), new Date(2019, 1, 1, 22, 40)],
      tableData: [],
      rules: {
        // name: [
        //   { required: true, message: '请输入自定义名称', trigger: 'blur' },
        //   { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        // ],
        custom_pickup_name: [
          { required: true, message: '请输入自提点名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        custom_pickup_phone_name: [
          { required: true, message: '请输入提货手机名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        custom_pickup_time_name: [
          { required: true, message: '请输入提货时间名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // this.$httpGet(API.pickup, {
    //   resource: {
    //     id: this.$route.params.id
    //   }
    // }).then((res) => {
    //   if (res.data.id !== '0') {
    //     this.form = res.data
    //     if (this.form.pickup_period.length > 0) {
    //       this.pickup_period_list = this.form.pickup_period.split('|')
    //     }
    //   }
    //   this.myTempValue.value1 = Math.floor(this.form.pickup_after_minutes / 60)
    //   this.myTempValue.value2 = this.form.pickup_after_minutes % 60
    //   this.myTempValue.value3 = this.form.order_time.split(':')[0]
    //   this.myTempValue.value4 = this.form.order_time.split(':')[1]
    // })
  },
  methods: {
    submit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.pickup_period = this.pickup_period_list.join('|')
          this.form.pickup_after_minutes = parseInt(this.myTempValue.value1) * 60 + parseInt(this.myTempValue.value2)
          this.form.order_time = this.myTempValue.value3 + ':' + this.myTempValue.value4
          if (this.form.auto_stock && this.form.able_select_pickup_time && this.form.pickup_period.length === 0) {
            Message.warning({
              message: '请选择配送时段'
            })
            return
          }
          this.$httpPost(API.pickup, {
            resource: {
              id: this.$route.params.id
            },
            data: this.form
          })
        } else {
          return false
        }
      })
    },
    addTime () {
      if (this.timeValue.length === 0) {
        Message.warning({
          message: '请正确选择时间'
        })
        return
      }
      let tempTime = this.timeValue[0].getHours() + ':' + this.timeValue[0].getMinutes() + '-' + this.timeValue[1].getHours() + ':' + this.timeValue[1].getMinutes()
      this.pickup_period_list.push(tempTime)
      this.timeValue = [new Date(2016, 9, 10, 8, 30), new Date(2016, 9, 10, 22, 40)]
    },
    deletTime (index) {
      this.pickup_period_list.splice(index, 1)
    }
  }
}
</script>
