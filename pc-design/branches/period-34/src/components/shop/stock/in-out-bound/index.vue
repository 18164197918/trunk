<style lang="scss" scoped>
</style>
<template>
  <div class="in-out-list">
    <h6 class="app-title">出入库明细</h6>
    <div class="filter">
      <div class="app-block-lv2">
        <div class="df justify-end">
          <el-date-picker
            :picker-options="pickerOptions2"
            @change="getDateInfo"
            align="right"
            class="mr10"
            end-placeholder="结束日期"
            range-separator="至"
            start-placeholder="开始日期"
            type="daterange"
            unlink-panels
            v-model="datePicker"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-select
            @change="classifyChange"
            class="mr10"
            placeholder="出入库类型"
            v-model="classify"
          >
            <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value"
              v-for="item in classifyList"
            ></el-option>
          </el-select>
          <el-input
            @change="keyWordsChange"
            class="input-with-select w300"
            maxlength="40"
            placeholder="请输入关键字"
            v-model="keyWords"
          >
            <el-select
              @change="singleValueChange"
              placeholder="单品名称"
              slot="prepend"
              style="width: 110px;"
              v-model="singleValue"
            >
              <el-option
                label="单品名称"
                value="singleGoodsTitle"
              ></el-option>
              <el-option
                label="单品条码"
                value="singleGoodsCode"
              ></el-option>
              <el-option
                label="出入库单号"
                value="stockChangeDocumentId"
              ></el-option>
            </el-select>
          </el-input>
        </div>
      </div>
    </div>
    <div class="table-list">
      <el-table
        :data="inOutBoundList"
        stripe
      >
        <el-table-column
          align="center"
          label="出入库单号"
          prop="stock_change_document_id"
        ></el-table-column>
        <el-table-column
          align="center"
          label="出入库类型"
          prop="stock_change_type_cn"
        ></el-table-column>
        <el-table-column
          align="center"
          label="创建时间"
          prop="create_time"
        ></el-table-column>
        <el-table-column
          align="center"
          label="单品名称"
          prop="single_goods_title"
        ></el-table-column>
        <el-table-column
          align="center"
          label="出入库数量"
          prop="stock_change_num"
        ></el-table-column>
        <el-table-column
          align="center"
          label="关联业务单号"
          prop="refer_id"
        ></el-table-column>
        <el-table-column
          align="center"
          label="经办人"
          prop="operator"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import API from './API'
export default {
  name: 'in-out-list',
  data () {
    return {
      classifyList: [
        {
          value: '',
          label: '出入库类型'
        },
        {
          value: 'inStockType-PURCHASE',
          label: '采购入库'
        },
        {
          value: 'inStockType-RETURN_GOODS',
          label: '退货入库'
        },
        {
          value: 'inStockType-ALLOT_IN',
          label: '调拨入库'
        },
        {
          value: 'inStockType-INVENTORY_PROFIT_IN',
          label: '盘盈入库'
        },
        {
          value: 'inStockType-OTHER_IN',
          label: '其他入库'
        },
        {
          value: 'outStockType-SHIP',
          label: '售卖出库'
        },
        {
          value: 'outStockType-ALLOT_OUT',
          label: '调拨出库'
        },
        {
          value: 'outStockType-INVENTORY_PROFIT_OUT',
          label: '盘亏出库'
        },
        {
          value: 'outStockType-EXPIRED',
          label: '过期出库'
        },
        {
          value: 'outStockType-OTHER_OUT',
          label: '其他出库'
        }
      ],
      classify: '',
      keyWords: '',
      singleValue: '',
      inOutBoundList: [],
      pickerOptions2: {},
      datePicker: []
    }
  },
  mounted () {
    this.getInOutBound()
  },
  methods: {
    getInOutBound ({
      startTime = '',
      endTime = '',
      inStockType = '',
      singleGoodsId = '',
      operator = '',
      outStockType = '',
      singleGoodsTitle = '',
      singleGoodsCode = '',
      stockChangeDocumentId = '',
      page_num: pageNum = 1,
      page_size: pageSize = 10
    } = {}) {
      this.$httpGet(API.getInOutBoundList, {
        query: {
          startTime,
          endTime,
          inStockType,
          singleGoodsId,
          operator,
          outStockType,
          singleGoodsTitle,
          singleGoodsCode,
          page_num: pageNum,
          stockChangeDocumentId,
          page_size: pageSize
        }
      }).then(({ collection, state }) => {
        if (state === 0) {
          collection.forEach(element => {
            element.stock_change_type_cn = ''
            if (element.stock_change_mode === 'OUT') {
              element.stock_change_type = element.out_stock_type
              this.classifyList.forEach(ele => {
                if (ele.value.indexOf(element.stock_change_type) > -1) {
                  element.stock_change_type_cn = ele.label
                }
              })
            } else if (element.stock_change_mode === 'IN') {
              element.stock_change_type = element.in_stock_type
              this.classifyList.forEach(ele => {
                if (ele.value.indexOf(element.stock_change_type) > -1) {
                  element.stock_change_type_cn = ele.label
                }
              })
            }
          })
          this.inOutBoundList = collection
        }
      })
    },
    // 选择日期
    getDateInfo (val) {
      console.log('date', val)
      let classify = this.classify.split('-')
      this.getInOutBound({
        startTime: val[0],
        endTime: val[1],
        [classify[0]]: classify[1],
        [this.singleValue]: this.keyWords
      })
    },
    // 搜索
    keyWordsChange (val) {
      console.log(val, 'search')
      let classify = this.classify.split('-')
      this.getInOutBound({
        startTime: this.datePicker[0],
        endTime: this.datePicker[1],
        [classify[0]]: classify[1],
        [this.singleValue]: this.keyWords
      })
    },
    // 单品类型
    singleValueChange (val) {
      console.log(val, 'single')
      let classify = this.classify.split('-')
      this.getInOutBound({
        startTime: this.datePicker[0],
        endTime: this.datePicker[1],
        [classify[0]]: classify[1],
        [this.singleValue]: this.keyWords
      })
    },
    // 出入库类型
    classifyChange (val) {
      console.log(val, 'type')
      let classify = this.classify.split('-')
      this.getInOutBound({
        startTime: this.datePicker[0],
        endTime: this.datePicker[1],
        [classify[0]]: classify[1],
        [this.singleValue]: this.keyWords
      })
    }
  }
}
</script>
