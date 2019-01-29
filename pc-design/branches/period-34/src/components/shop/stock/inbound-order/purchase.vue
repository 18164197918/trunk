<style lang="scss" scoped>
.inbound-order-purchase {
  .cancel {
    position: fixed;
    bottom: 20px;
    left: calc(50% + 90px);
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
<template>
  <div class="inbound-order-purchase">
    <h6 class="app-title">入库单 - 采购入库</h6>
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
          <el-button @click="chooseSingle" type="primary">选择单品</el-button>
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
        <el-table-column
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
        </el-table-column>
      </el-table>
    </div>
    <div class="cancel text-center">
      <el-button type="primary">确认入库</el-button>
      <el-button @click="returnPrevious">取消</el-button>
    </div>

    <!-- 选择商品弹窗 -->
    <el-dialog
      :visible.sync="chooseSingleDialogVisible"
      append-to-body
      title="选择单品"
      width="906px"
    >
      <div class="list-inner app-block-lv2">
        <div class="mt20 d-flex justify-between">
          <div class="left">
            <el-select
              class="w120"
              placeholder="单品分类"
              v-model="selectedSingleType"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in singleType"
              ></el-option>
            </el-select>
          </div>
          <div class="right">
            <el-select
              class="w120"
              placeholder="单品名称"
              v-model="selectedSingleName"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in singleName"
              ></el-option>
            </el-select>
            <el-input
              class="w320 ml20"
              placeholder="请输入单品名称"
              v-model="SingleNameInput"
            ></el-input>
          </div>
        </div>
        <div class="content df bg-white pt10 pl5 pr5 flex-wrap">
          <div
            :key="index"
            class="df w195 h80 bd-gray align-center p10 mb10 ml5 mr5"
            style="border-radius:4px;"
            v-for="(item, index) in singleInfoDataList"
          >
            <div
              class="w60 h60 mr5 bg-cover"
              style="background-image: url('https://image-c.weimobwmc.com/saas-wxbiz/696835e75da64713b2e12c734c66ad46.jpg');border-radius:4px;"
            ></div>
            <div class="h60 df flex-column justify-between">
              <p>{{item.name}}</p>
              <p>{{item.info}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn df justify-end">
        <el-button @click="makeSureAdd" type="primary">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'inbound-order-purchase',
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
      ],
      chooseSingleDialogVisible: false,
      selectedSingleType: '',
      singleType: [],
      selectedSingleName: '',
      singleName: [],
      SingleNameInput: '',
      singleInfoDataList: [
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        },
        {
          img: '',
          name: '小龙虾',
          info: '44'
        }
      ]
    }
  },
  methods: {
    deleteSingle () {},
    returnPrevious () {
      this.$router.go(-1)
    },
    // 选择商品弹窗出现
    chooseSingle () {
      this.chooseSingleDialogVisible = true
    },
    makeSureAdd () {
      this.chooseSingleDialogVisible = false
    },
    cancel () {
      this.chooseSingleDialogVisible = false
    }
  }
}
</script>
