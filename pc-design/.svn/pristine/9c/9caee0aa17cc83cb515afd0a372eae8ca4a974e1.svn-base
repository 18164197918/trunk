<style lang="scss">
.common-settings {
  position: relative;
  .comm-title {
    border-bottom: 1px solid $color-gray-lv2-bd;
  }

  .el-form-item__label {
    font-size: 12px;
    color: $gray;
  }
  .el-form-item {
    margin-right: 30px;
  }
}
</style>

<template>
  <div class="common-settings">
    <div class="app-block-lv2">
      <h6>网店设置</h6>
      <el-row class="mb15 mt15">
        <el-col class="w120 pl20">网店模式</el-col>
        <el-col :span="20">
          <el-radio-group v-model="form.more_store">
            <el-radio :label="false">单网店模式</el-radio>
            <el-radio :label="true">多网店模式</el-radio>
          </el-radio-group>
          <span
            class="fz12 text-gray-l20 ml30"
          >启用单店模式，手机端只展示一个商家店铺。门店可作为商家的自提点或配送点</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="w120 pl20">加入购物车</el-col>
        <el-col :span="20">
          <el-switch
            :active-value="true"
            :inactive-value="false"
            class="mr15"
            v-model="form.open_cart"
          ></el-switch>
          <span v-if="form.open_cart">已开启</span>
          <span v-else>已关闭</span>
          <span class="fz12 text-gray-l20 ml30">开启后，商品可以加入购物车</span>
        </el-col>
      </el-row>
    </div>
    <div class="app-block-lv2">
      <h6>{{form.more_store ? '总店设置' : '前置仓'}}</h6>
      <template v-if="!form.more_store">
        <el-row class="mb15 mt15">
          <el-col class="w120 pl20">是否自动转单</el-col>
          <el-col :span="20">
            <el-switch
              :active-value="true"
              :inactive-value="false"
              class="mr15"
              v-model="form.auto_migrate_order"
            ></el-switch>
            <span v-if="form.auto_migrate_order">已开启</span>
            <span v-else>已关闭</span>
          </el-col>
        </el-row>
        <template v-if="form.auto_migrate_order">
          <el-row class="mb15">
            <el-col class="w120 pl20">分配优先级</el-col>
            <el-col :span="20">
              <el-radio-group v-model="form.front_warehouse.distance_priority">
                <el-radio :label="true">距离优先</el-radio>
                <el-radio :label="false">手动分配</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="w120 pl20">参与门店</el-col>
            <el-col :span="20">
              <el-radio-group v-model="form.front_warehouse.all_store">
                <el-radio :label="true">全部门店</el-radio>
                <el-radio :label="false">部分门店</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <template v-if="!form.front_warehouse.all_store">
            <div class="df flex-wrap mb15 pl120 mt10">
              <p
                :key="index"
                class="dfc bd-gray w200 h30 pl10 pr10 mr10 mb10"
                v-for="(item,index) in selectedStores"
              >
                <span class="fx1">{{item.name}}</span>
                <i
                  @click="delStore(index)"
                  class="text-primary cup"
                >删除</i>
              </p>
            </div>
            <div class="mb15 ml120">
              <el-button
                @click="openStore=true"
                type="mini"
              >选择门店</el-button>
              <span
                class="ml10"
                v-if="selectedStores.length!==0"
              >已添加{{selectedStores.length}}个门店</span>
            </div>
          </template>
        </template>
      </template>
      <template v-else>
        <el-row class="mb15 mt15">
          <el-col class="w120 pl20">是否展示总店</el-col>
          <el-col :span="20">
            <el-switch
              :active-value="true"
              :inactive-value="false"
              class="mr15"
              v-model="form.on_head_store"
            ></el-switch>
            <span v-if="form.on_head_store">已开启</span>
            <span v-else>已关闭</span>
            <span class="fz12 text-gray-l20 ml30">关闭后网店门店列表中不再显示总店信息</span>
          </el-col>
        </el-row>
        <el-row
          class="mb15"
          v-if="form.on_head_store"
        >
          <el-col class="w120 pl20">优先进入总店</el-col>
          <el-col :span="20">
            <el-button type="mini">请选择区域</el-button>
            <span
              class="fz12 text-gray-l20 ml30"
            >当买家定位于选中区域时，系统将推荐总店作为的买家进入的默认门店；其他地区的买家，按距离推荐门店</span>
          </el-col>
        </el-row>
      </template>
    </div>
    <div class="app-block-lv2">
      <h6>
        关键词设置
        <span
          class="fz12 text-gray-l20 ml15"
        >页面关键词调整后保存即可使用，前台展示页面更新为修改后的关键词。</span>
      </h6>
      <el-form
        :inline="true"
        :model="form"
        class="demo-form-inline"
        label-position="left"
        label-width="60px"
      >
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.sale_price.default_value"
        >
          <el-input
            class="w230"
            v-model="form.keyword_config_rule.keyword_config_value.sale_price.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.market_price.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.market_price.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.index_title.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.index_title.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.cart_name.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.cart_name.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.goods_group_name.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.goods_group_name.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.all_goods_title.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.all_goods_title.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.goods_list.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.goods_list.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.goods_detail_title.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.goods_detail_title.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="form.keyword_config_rule.keyword_config_value.at_once_pay_name.default_value"
        >
          <el-input
            class="w230"
            size="mini"
            v-model="form.keyword_config_rule.keyword_config_value.at_once_pay_name.value"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="save-btn">
      <el-button
        @click="submit()"
        class="w80"
        type="primary"
      >保存</el-button>
    </div>
    <store-choose
      :open.sync="openStore"
      :selected.sync="selectedStores"
      :type="0"
      :url="storeListUrl"
      @response="pushStores"
    ></store-choose>
  </div>
</template>
<script>

import storeChoose from '../common/store-choose.vue'
import API from './API'

export default {
  name: 'common-settings',
  components: { storeChoose },
  data () {
    return {
      openStore: false,
      selectedStores: [],
      storeListUrl: API.storeListUrl,
      form: {
        more_store: true,
        open_cart: true,
        auto_migrate_order: false,
        on_head_store: true,
        front_warehouse: {
          all_store: true,
          distance_priority: true,
          part_stores: []
        },
        keyword_config_rule: {
          keyword_config_value: {
            sale_price: { value: '', default_value: '销售价' },
            market_price: { value: '', default_value: '市场价' },
            cart_name: { value: '', default_value: '购物车' },
            index_title: { value: '', default_value: '首页' },
            goods_group_name: { value: '', default_value: '商品分组' },
            all_goods_title: { value: '', default_value: '全部商品' },
            goods_list: { value: '', default_value: '商品列表' },
            goods_detail_title: { value: '', default_value: '商品详情' },
            at_once_pay_name: { value: '', default_value: '立即购买' }
          }
        }
      }
    }
  },
  created () {
    this.$httpGet(API.baseConfig).then((res) => {
      if (res.data.length !== 0) this.form = res.data
      this.selectedStores = this.form.front_warehouse.part_stores
    })
  },
  methods: {
    delStore (index) {
      this.selectedStores.splice(index, 1)
    },
    pushStores (val) {
      if (val instanceof Array) {
        val.forEach((item) => {
          this.selectedStores.push({ id: item.id, name: item.name })
        })
      } else {
        this.selectedStores.push({ id: val.id, name: val.name })
      }
    },
    submit () {
      this.form.front_warehouse.part_stores = this.selectedStores
      this.$httpPost(API.baseConfig, { data: this.form })
    }
  }
}

</script>
