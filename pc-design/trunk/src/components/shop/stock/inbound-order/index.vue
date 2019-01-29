<style lang="scss">
.el-select .el-input {
  width: 130px;
}
</style>
<template>
  <div class="inbound-order-index">
    <h6 class="app-title">入库单</h6>
    <div class="app-block-lv2">
      <div class="df">
        <div class="fx1">
          <el-button
            @click="toAdd('purchase')"
            type="primary"
          >采购入库</el-button>
          <el-button
            @click="toAdd('return')"
            type="primary"
          >退货入库</el-button>
          <el-button
            @click="toAdd('other')"
            type="primary"
          >其他入库</el-button>
        </div>
        <el-date-picker
          @change="search"
          class="w300 mr10 fz12"
          end-placeholder="结束日期"
          range-separator="-"
          start-placeholder="开始日期"
          type="datetimerange"
          v-model="timeValue"
          value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
        <el-select
          @change="search"
          class="mr10"
          placeholder="供应商名称"
          v-model="supplierId"
        >
          <el-option
            :key="item.id"
            :label="item.supplier_name"
            :value="item.id"
            v-for="item in supplier"
          ></el-option>
        </el-select>
        <el-select
          @change="search"
          class="mr20 w120"
          placeholder="入库类型"
          v-model="inStockType"
        >
          <el-option
            :key="item.value"
            :label="item.name"
            :value="item.name"
            v-for="item in inStockTypeList"
          ></el-option>
        </el-select>
        <div>
          <el-input
            @blur="search"
            class="input-with-select"
            placeholder="请输入关键字"
            v-model="inputValue"
          >
            <el-select
              placeholder="请选择"
              slot="prepend"
              v-model="searchType"
            >
              <el-option
                :value="0"
                label="入库单号"
              ></el-option>
              <el-option
                :value="1"
                label="关联业务单号"
              ></el-option>
            </el-select>
            <el-button
              @click="search"
              icon="el-icon-search"
              slot="append"
            ></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="table-list">
      <el-table :data="listItems">
        <el-table-column
          label="入库单号"
          prop="id"
          width="180"
        ></el-table-column>
        <el-table-column
          label="入库类型"
          prop="enterType"
        >
          <template slot-scope="scope">
            <div>
              <span v-if="scope.row.in_stock_type==='PURCHASE'">采购入库</span>
              <span v-if="scope.row.in_stock_type==='RETURN_GOODS'">退货入库</span>
              <span v-if="scope.row.in_stock_type==='OTHER_IN'">其他入库</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="入库时间"
          prop="create_at"
        ></el-table-column>
        <el-table-column
          label="备注"
          prop="remark"
        ></el-table-column>
        <el-table-column
          label="关联业务单号"
          prop="relativeOrderNumber"
        ></el-table-column>
        <el-table-column
          label="经办人"
          prop="operator"
        ></el-table-column>
        <el-table-column
          label="操作"
          prop="operate"
        >
          <template slot-scope="scope">
            <p
              @click="enterInBoundDetail(scope.row.operate)"
              class="text-primary c-pointer"
            >详情</p>
          </template>
        </el-table-column>
      </el-table>
       <el-pagination
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        background
        class="mt40"
        layout="prev, pager, next"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import API from './API'
function getList () {
  this.$httpGet(API.inStockList, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      startTime: this.timeValue[0], // 搜索
      endTime: this.timeValue[1],
      inStockType: this.inStockType,
      supplierId: this.supplierId
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}
function getSupplier () {
  this.$httpGet(API.allSupplier).then((res) => {
    this.supplier = res.collection
  })
}
export default {
  name: 'inbound-order-index',
  data () {
    return {
      total: null,
      pageSize: 10,
      pageIndex: 1,
      timeValue: [],
      inStockType: '',
      inStockTypeList: [{
        name: '全部',
        value: ''
      },
      {
        name: '采购入库',
        value: 'PURCHASE'
      },
      {
        name: '退货入库',
        value: 'RETURN_GOODS'
      },
      {
        name: '其他入库',
        value: 'OTHER_IN'
      }
      ],
      listItems: [],
      supplier: [],
      searchType: 1,
      supplierId: null,
      inputValue: ''
    }
  },
  created () {
    Reflect.apply(getList, this, [])
    Reflect.apply(getSupplier, this, [])
  },
  methods: {
    toAdd (mode) {
      this.$router.push({
        name: 'inboundOrderForm',
        params: {
          mode
        }
      })
    },
    currentChange (val) {
     this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    search () {
      
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    }
  }
}
</script>
