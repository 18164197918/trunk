<style lang="scss">
.sale-settings {
  .el-radio + .el-radio {
    margin-left: 0;
  }
  .el-input__inner {
    padding: 0 5px;
  }
}
</style>

<template>
  <div class="sale-settings">
    <div class="app-block-lv2">
      <h6>订单流程设置</h6>
      <div>
        <div class="dfc pl20 mb10">
          <span>
            <i class="text-danger">*</i>未支付订单：
          </span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.sale_flow_config.payment_delay_config.delay_days"
          ></el-input>
          <span class="ml5 mr5">天</span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.sale_flow_config.payment_delay_config.delay_hours"
          ></el-input>
          <span class="ml5 mr5">小时</span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.sale_flow_config.payment_delay_config.delay_minutes"
          ></el-input>
          <span class="ml5 mr5">分</span>
          <span class="ml20 fz12 text-gray-l20">最长可设置90天，货到付款订单不适用，不填则不自动关闭</span>
        </div>
        <div class="dfc pl20 mb10">
          <span>
            <i class="text-danger">*</i>已发货订单：
          </span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.sale_flow_config.auto_receipt_process_days"
          ></el-input>
          <span class="ml5 mr5">天后自动确认收货</span>
          <span class="ml40 fz12 text-gray-l20">请考虑物流运输时间，最长可设置90天，自提订单在配送方式中设置</span>
        </div>
        <div class="dfc pl20 mb10">
          <span>
            <i class="text-danger">*</i>已收货订单：
          </span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.sale_flow_config.auto_close_rights_process_days"
          ></el-input>
          <span class="ml5 mr5">天后关闭退款/退货功能</span>
          <span
            class="ml40 fz12 text-gray-l20"
          >买家可在确认收货后进行退款/退货申请，最长可设置365天，0代表确认收货后无法维权</span>
        </div>
        <div class="dfc pl25 mb10">
          <span>默认支付方式：</span>
          <el-radio-group v-model="form.sale_flow_config.payment_preferred">
            <el-radio :label="'ON_LINE'">优先选中线上支付</el-radio>
            <el-radio
              :label="'OFF_LINE'"
              class="ml20"
            >优先选中线下支付</el-radio>
          </el-radio-group>
          <span class="ml40 fz12 text-gray-l20">仅在对应配送方式支持多支付方式时生效</span>
        </div>
        <div class="dfc pl25">
          <span>商品规格库存不足处理方式：</span>
          <el-radio-group
            v-model="form.sale_flow_config.stock_not_enough_process_mode"
          >
            <el-radio :label="'ALLOW_NEGATIVE_STOCK'">允许扣成负库存</el-radio>
            <el-radio
              :label="'AUTO_RIGHTS'"
              class="ml20"
            >订单自动维权</el-radio>
          </el-radio-group>
          <span class="ml40 fz12 text-gray-l20">仅针对支付减库存的商品</span>
        </div>
      </div>
    </div>
    <div class="app-block-lv2">
      <h6>维权原因设置</h6>
      <div class="df pl20 mb10">
        <span>
          <i class="text-danger">*</i>维权原因：
        </span>
        <div>
          <div>
            <el-switch
              :active-value="true"
              :inactive-value="false"
              class="mr15"
              v-model="form.rights_reason_config.rights_reason_open"
            ></el-switch>
            <span v-if="form.rights_reason_config.rights_reason_open">已开启</span>
            <span v-else>已关闭</span>
          </div>
          <div
            class="df mt20"
            v-if="form.rights_reason_config.rights_reason_open"
          >
            <el-tag
              :disable-transitions="false"
              :key="tag"
              @close="handleClose(index)"
              class="mr20"
              closable
              v-for="(tag, index) in form.rights_reason_config.rights_reason_items"
            >{{tag}}</el-tag>
            <el-button
              @click="dialogVisible=true"
              class="pt5 pb5"
              size="small"
              type="primary"
            >点击新增原因</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="app-block-lv2">
      <h6>
        维权流程设置
        <i class="text-danger el-icon-warning fz14 ml15"></i>
        <span
          class="fz12 text-gray-l20 ml5"
          style="font-weight: 400"
        >线上支付的订单系统做自动同意处理，线下支付的订单系统做自动拒绝处理。</span>
      </h6>
      <div class="dfc pl20 mb10">
        <span>
          <i class="text-danger">*</i>买家发起退款申请：
        </span>
        <el-input
          class="w40"
          size="mini"
          v-model.number="form.rights_flow_config.apply_refund_auto_process_days"
        ></el-input>
        <span class="ml5 mr5">天后商家未处理，系统将自动同意/拒绝退款。</span>
      </div>
      <div class="dfc pl20 mb10">
        <span>
          <i class="text-danger">*</i>买家发起退货退款申请：
        </span>
        <el-input
          class="w40"
          size="mini"
          v-model.number="form.rights_flow_config.apply_return_auto_process_days"
        ></el-input>
        <span class="ml5 mr5">天后商家未处理，系统将自动同意维权。</span>
      </div>
      <div class="dfc pl20 mb10">
        <span>
          <i class="text-danger">*</i>商家同意退货：
        </span>
        <el-input
          class="w40"
          size="mini"
          v-model.number="form.rights_flow_config.agree_return_auto_process_days"
        ></el-input>
        <span class="ml5 mr5">天后商家未处理，系统将自动同意维权。</span>
      </div>
      <div class="dfc pl20">
        <span>
          <i class="text-danger">*</i>买家已退货：
        </span>
        <el-input
          class="w40"
          size="mini"
          v-model.number="form.rights_flow_config.returned_auto_process_days"
        ></el-input>
        <span class="ml5 mr5">天后商家未处理，系统将自动同意维权。</span>
      </div>
    </div>
    <div class="app-block-lv2">
      <h6>运费设置</h6>
      <div class="df pl20 mb10">
        <span class="mr10">
          <i class="text-danger">*</i>运费组合策略：
        </span>
        <div>
          <el-radio-group v-model="form.freight_strategy">
            <el-radio
              :label="'SUPERIMPOSED'"
              class="db h25 lh25"
            >叠加</el-radio>
            <el-radio
              :label="'LOWEST'"
              class="db h25 lh25"
            >以最低运费结算</el-radio>
            <el-radio
              :label="'HIGHEST'"
              class="db h25 lh25"
            >以最高运费结算</el-radio>
          </el-radio-group>
        </div>
        <div class="fz12 text-gray-l20 ml35">
          <p class="h25 lh25">订单中的商品有多个运费模板时，将每个商品的运费之和订为订单总运费</p>
          <p class="h25 lh25">订单中的商品有多个运费模板时，取订单中运费最少的商品的运费计为订单总运费</p>
          <p class="h25 lh25">订单中的商品有多个运费模板时，取订单中运费最多的商品的运费计为订单总运费</p>
        </div>
      </div>
    </div>
    <div class="app-block-lv2">
      <h6>商品评论</h6>
      <div class="dfc pl20 mb10">
        <span class="w100">商品评论：</span>
        <el-switch
          :active-value="true"
          :inactive-value="false"
          class="mr15"
          v-model="form.goods_comment_config.comment_open"
        ></el-switch>
        <span v-if="form.goods_comment_config.comment_open">已开启</span>
        <span v-else>已关闭</span>
      </div>
      <template v-if="form.goods_comment_config.comment_open">
        <div class="dfc pl20 mb10">
          <span class="w100">买家交易成功：</span>
          <el-input
            class="w40"
            size="mini"
            v-model.number="form.goods_comment_config.auto_comment_process_days"
          ></el-input>
          <span class="ml5">天后买家未评论，系统将将自动评论。</span>
        </div>
        <div class="dfc pl20 mb10">
          <span
            class="w100"
          >评论默认{{form.goods_comment_config.comment_display? '显示' : '隐藏'}}：</span>
          <el-switch
            :active-value="true"
            :inactive-value="false"
            class="mr15"
            v-model="form.goods_comment_config.comment_display"
          ></el-switch>
          <span v-if="form.goods_comment_config.comment_display">已开启</span>
          <span v-else>已关闭</span>
        </div>
        <div class="dfc pl20">
          <span class="w100">默认评论：</span>
          <el-input
            class="w300"
            placeholder="用户超时未评，系统自动好评。"
            v-model="form.goods_comment_config.default_comment"
          ></el-input>
        </div>
      </template>
    </div>
    <div class="save-btn">
      <el-button
        @click="save()"
        class="w80"
        type="primary"
      >保存</el-button>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="新增原因"
      width="600px"
    >
      <div class="dfc">
        <span class="mr20">维权原因：</span>
        <el-input
          class="w380"
          placeholder="请输入原因"
          v-model="reason"
        ></el-input>
      </div>
      <span
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          @click="addReason()"
          type="primary"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import API from './API'

export default {
  name: 'common-settings',
  data () {
    return {
      dialogVisible: false,
      reason: null,
      form: {
        sale_flow_config: {
          auto_receipt_process_days: 7,
          auto_close_rights_process_days: 0,
          stock_not_enough_process_mode: 'AUTO_RIGHTS',
          payment_preferred: 'ON_LINE',
          payment_delay_config: {
            delay_days: 1,
            delay_hours: 0,
            delay_minutes: 0
          }
        },
        rights_reason_config: {
          rights_reason_open: true,
          rights_reason_items: ['多拍/拍错/不想要', '7天无理由退换货', '其它']
        },
        rights_flow_config: {
          agree_return_auto_process_days: 7,
          apply_refund_auto_process_days: 7,
          apply_return_auto_process_days: 7,
          returned_auto_process_days: 7
        },
        goods_comment_config: {
          auto_comment_process_days: 7,
          comment_open: true,
          comment_display: true,
          default_comment: ''
        },
        freight_strategy: 'SUPERIMPOSED'
      }
    }
  },
  created () {
    this.$httpGet(API.saleConfig).then((res) => {
      if (res.data.length !== 0) this.form = res.data
    })
  },
  methods: {
    handleClose (index) {
      this.form.rights_reason_config.rights_reason_items.splice(index, 1)
    },

    addReason () {
      if (this.reason) this.form.rights_reason_config.rights_reason_items.push(this.reason)
      this.dialogVisible = false
      this.reason = null
    },

    save () {
      this.$httpPost(API.saleConfig, { data: this.form })
    }
  }

}

</script>
