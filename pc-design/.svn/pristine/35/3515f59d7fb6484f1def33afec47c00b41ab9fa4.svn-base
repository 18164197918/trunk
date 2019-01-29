<style lang="scss" scoped>
</style>
<template>
  <div class="outbound-order-index">
    <h6 class="app-title">出库单</h6>
    <div class="filter">
      <div class="app-block-lv2">
        <div class="df justify-between">
          <div class="left">
            <el-button
              type="primary"
            >新建出库</el-button>
          </div>
          <div class="right">
            <el-date-picker
              :picker-options="pickerOptions2"
              align="right"
              class="mr10"
              end-placeholder="结束日期"
              range-separator="至"
              start-placeholder="开始日期"
              type="daterange"
              unlink-panels
              v-model="datePicker"
            ></el-date-picker>
            <el-select
              class="mr10"
              placeholder="出库类型"
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
              class="input-with-select w300"
              maxlength="40"
              placeholder="请输入关键字"
              v-model="keyWords"
            >
              <el-select
                placeholder="请输入单品名称"
                slot="prepend"
                style="width: 110px;"
                v-model="singleValue"
              >
                <el-option
                  label="单品名称"
                  value="name"
                ></el-option>
                <el-option
                  label="单品条码"
                  value="code"
                ></el-option>
              </el-select>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="table-list">
      <el-table
        :data="stockList"
        stripe
      >
        <el-table-column
          align="center"
          label="出库单号"
          prop="enterOrder"
        ></el-table-column>
        <el-table-column
          align="center"
          label="出库类型"
          prop="enterType"
        ></el-table-column>
        <el-table-column
          align="center"
          label="出库时间"
          prop="enterTime"
        ></el-table-column>
        <el-table-column
          align="center"
          label="备注"
          prop="tips"
        ></el-table-column>
        <el-table-column
          align="center"
          label="关联业务单号"
          prop="relativeOrderNumber"
        ></el-table-column>
        <el-table-column
          align="center"
          label="经办人"
          prop="manager"
        ></el-table-column>
        <el-table-column
          align="center"
          label="操作"
          prop="operate"
        >
          <template slot-scope="scope">
            <p
              @click="enterOutBoundDetail(scope.row.operate)"
              class="text-primary c-pointer"
            >详情</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'outbound-order-index',
  data () {
    return {
      classifyList: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      classify: '',
      keyWords: '',
      singleValue: '单品名称',
      datePicker: '',
      stockList: [
        {
          enterOrder: '22',
          enterType: '22',
          enterTime: '22',
          tips: '22',
          manager: '22',
          relativeOrderNumber: '22',
          operate: '11'
        }
      ],
      pickerOptions2: []
    }
  },
  methods: {
    enterOutBoundDetail (operate) {}
  }
}
</script>
