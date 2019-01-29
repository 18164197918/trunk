<style lang="scss">
// .inbound-order-purchase {
//   .cancel {
//     position: fixed;
//     bottom: 20px;
//     left: calc(50% + 90px);
//     transform: translate3d(-50%, 0, 0);
//   }
// }
.dialogReturnOrder {
  .el-select .el-input {
    width: 110px;
  }
}
</style>
<template>
  <div class="inbound-order-purchase">
    <h6 class="app-title">入库单 - {{modeName}}</h6>
    <div class="app-block-lv2">
      <h6 class="app-title">基本信息</h6>
      <el-form
        :form="form"
        label-width="100px"
      >
        <el-form-item
          label="供应商名称："
          prop="name"
          v-if="mode=== 'purchase' "
        >
          <el-select
            class="mr10 w320"
            placeholder="请选择"
            v-model="form.supplier_id"
          >
            <el-option
              :key="item.id"
              :label="item.supplier_name"
              :value="item.id"
              v-for="item in supplier"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="维权编号："
          required
          v-if="mode === 'return'"
        >
          <el-input
            class="w320 mr20"
            v-model="form.rights_id"
          ></el-input>
          <el-button
            size="mini" @click="dialogTableVisible=true"
            type="primary"
          >选择维权订单</el-button>
        </el-form-item>
        <el-form-item
          label="备注："
          prop="tips"
        >
          <el-input
            :rows="6"
            class="w320"
            placeholder="这里填写备注信息，最多200字"
            type="textarea"
            v-model="form.remark"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div
      class="app-block-lv2"
      v-if="this.form.in_stock_type !== 'RETURN_GOODS'"
    >
      <h6 class="app-title">选择单品</h6>
      <div class="df justify-between mt20">
        <div>
          <el-button
            @click="open=true"
            type="primary"
          >选择单品</el-button>
        </div>
      </div>
    </div>
    <div class="table-list">
      <el-table
        :data="stockList"
        show-summary
      >
        <el-table-column
          label="单品名称"
          prop="title"
        >
          <template slot-scope="scope">
            <div class="df align-stretch">
              <div
                :style="scope.row.cover_image | filterImgObj"
                class="w60 h60 mr5 bg-cover"
              ></div>
              <div class="df flex-column justify-between">
                <p>{{scope.row.title}}</p>
                <p>{{scope.row.code}}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="单品规格"
          prop="sku"
        ></el-table-column>
        <el-table-column
          label="单位"
          prop="unit"
        ></el-table-column>
        <el-table-column
          label="采购数量"
          prop="stock_change_num"
        >
          <template slot-scope="scope">
            <el-input-number
              :controls="false"
              :max="1000000000"
              :min="1"
              class="w200"
              v-model="scope.row.stock_change_num"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          prop="operate"
        >
          <template slot-scope="scope">
            <p
              @click="deleteSingle(scope.$index)"
              class="text-primary c-pointer"
            >移除</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="cancel text-center pb40 pt40">
      <el-button
        @click="submit"
        type="primary"
      >确认入库</el-button>
      <el-button @click="returnPrevious">取消</el-button>
    </div>

    <!-- 选择商品弹窗 -->
    <single-goods-choose
      :open.sync="open"
      :selected.sync="stockList"
      @response="pushGoods"
      mode="multiple"
    ></single-goods-choose>
    <!-- 维权订单弹窗 -->
    <el-dialog
      :visible.sync="dialogTableVisible"
      title="选择维权订单"
      width="900px"
    >
      <div class="text-right w320 mb20 dialogReturnOrder">
        <el-input
          @blur="search"
          class="input-with-select"
          placeholder="请输入关键字"
          v-model="inputValue"
        >
          <el-select
            placeholder="请选择"
            slot="prepend"
            v-model="inputType"
          >
            <el-option
              :value="0"
              label="维权单号"
            ></el-option>
            <el-option
              :value="1"
              label="订单编号"
            ></el-option>
          </el-select>
          <el-button
            @click="search"
            icon="el-icon-search"
            slot="append"
          ></el-button>
        </el-input>
      </div>
      <el-table :data="gridData">
        <el-table-column
          label="单品名称"
          property="date"
          width="150"
        ></el-table-column>
        <el-table-column
          label="单品规格"
          property="name"
          width="200"
        ></el-table-column>
        <el-table-column
          label="单位"
          property="address"
        ></el-table-column>
        <el-table-column
          label="退货数量"
          property="address"
        ></el-table-column>
        <el-table-column
          label="订单状态"
          property="address"
        ></el-table-column>
      </el-table>

      <div class="btn df justify-end">
        <el-button type="primary">确认</el-button>
        <el-button @click="dialogTableVisible=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from './API'
import singleGoodsChoose from './../../common/single-goods-choose'
import _ from 'lodash'
function getSupplier () {
  this.$httpGet(API.allSupplier).then((res) => {
    this.supplier = res.collection
  })
}
export default {
  name: 'inbound-order-purchase',
  components: {
    singleGoodsChoose
  },
  data () {
    return {
      open: false,
      form: {
        'in_stock_type': 'PURCHASE',
        'rights_id': '',
        'supplier_id': '',
        'remark': '',
        'order_item_list': [],
        'store_id': window.localStorage.getItem('store-id')
      },
      supplier: [],
      stockList: [],
      myGoodsList: [],
      mode: null,
      modeName: '',
      gridData: [],
      dialogTableVisible: true,
      inputValue: '',
      inputType: 0
    }
  },
  created () {
    this.mode = this.$route.params.mode
    switch (this.mode) {
      case 'purchase':
        this.modeName = '采购入库'
        this.form.in_stock_type = 'PURCHASE'
        break
      case 'return':
        this.modeName = '退货入库'
        this.form.in_stock_type = 'RETURN_GOODS'
        break
      case 'other':
        this.modeName = '其他入库'
        this.form.in_stock_type = 'OTHER_IN'
        break
    }
    Reflect.apply(getSupplier, this, [])
  },
  methods: {
    submit () {
      console.log(this.form)
      if (this.form.in_stock_type === 'RETURN_GOODS') {
        if (this.form.rights_id === '') {
          this.$message.warning('请选择维权单号')
          return
        }
      } else {
        if (this.stockList.length === 0) {
          this.$message.warning('请选择单品')
          return
        } else {
          for (let i in this.stockList) {
            this.form.order_item_list.push({
              'single_goods_id': this.stockList[i].id,
              'stock_change_num': this.stockList[i].stock_change_num
            })
          }
        }
      }
      this.$httpPost(API.inStockAdd, {
        data: this.form
      })
    },
    pushGoods (val) {
      for (let i in val) {
        if (_.findIndex(this.stockList, { 'id': val[i].id }) === -1) {
          this.$set(val[i], 'stock_change_num', 1)
          this.stockList.push(val[i])
        }
      }
    },
    search () {

    },
    deleteSingle (index) {
      this.stockList.splice(index, 1)
    },
    returnPrevious () {
      this.$router.go(-1)
    }
    // 选择商品弹窗出现
  }
}
</script>
