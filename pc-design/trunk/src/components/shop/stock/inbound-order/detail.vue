<style lang="scss" scoped>
.inbound-order-detail {
  .cancel {
    position: fixed;
    bottom: 20px;
    left: calc(50% + 90px);
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
<template>
  <div class="inbound-order-detail">
    <h6 class="app-title">入库单 - 入库详情</h6>
    <div class="app-block-lv2">
      <h6 class="app-title">基本信息</h6>
      <el-form
        label-width="90px"
        ref="ruleForm"
      >
        <el-form-item
          label="供应商名称:"
          prop="name"
        >
          <el-select
            class="mr10 w320"
            placeholder="请选择"
            v-model="classify"
          >
            <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value"
              v-for="item in classifyList"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="备注:"
          prop="tips"
        >
          <el-input
            :rows="6"
            class="w320"
            placeholder="这里填写备注信息，最多200字"
            type="textarea"
            v-model="textarea"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="app-block-lv2">
      <h6 class="app-title">选择单品</h6>
      <div class="df justify-between mt20">
        <div class="left">
          <!-- <el-button type="primary">选择单品</el-button> -->
        </div>
        <div class="right">
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
    <div class="table-list">
      <el-table
        :data="stockList"
        stripe
      >
        <el-table-column
          align="center"
          label="单品名称"
          prop="name"
        >
          <template slot-scope="scope">
            <div class="df align-stretch">
              <div
                class="w60 h60 mr5 bg-cover"
                style="background-image: url('https://image-c.weimobwmc.com/saas-wxbiz/696835e75da64713b2e12c734c66ad46.jpg')"
              ></div>
              <div class="df flex-column justify-between">
                <p>{{scope.row.name}}</p>
                <p>qqq</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="单品规格"
          prop="size"
        ></el-table-column>
        <el-table-column
          align="center"
          label="单位"
          prop="unit"
        ></el-table-column>
        <el-table-column
          align="center"
          label="采购数量"
          prop="purchaseNumber"
        ></el-table-column>
        <!-- <el-table-column
          align="center"
          label="操作"
          prop="operate"
        >
          <template slot-scope="scope">
            <p
              @click="deleteSingle(scope.row.operate)"
              class="text-primary c-pointer"
            >移除</p>
          </template>
        </el-table-column>-->
      </el-table>
    </div>
    <div class="cancel text-center">
      <el-button
        @click="returnPrevious"
        type="primary"
      >取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inbound-order-detail',
  data () {
    return {
      textarea: '',
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
      stockList: [
        {
          name: 'ww',
          size: '11',
          unit: '11',
          purchaseNumber: '11'
        }
      ]
    }
  },
  methods: {
    deleteSingle () {},
    returnPrevious () {
      this.$router.go(-1)
    }
  }
}
</script>
