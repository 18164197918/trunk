<style lang="scss" scoped>
// .store-stock {
// }
</style>
<template>
  <div class="store-stock">
    <h6 class="app-title">门店库存</h6>
    <div class="filter">
      <div class="app-block-lv2">
        <div class="df justify-end">
          <el-cascader
            :options="classifyList"
            @change="classifyChange"
            class="mr10"
            v-model="classify"
          ></el-cascader>
          <el-input
            @change="searchSingle"
            class="input-with-select w300"
            maxlength="40"
            placeholder="请输入关键字"
            v-model="keyWords"
          >
            <el-select
              @change="chooseSingleType"
              placeholder="请输入单品名称"
              slot="prepend"
              style="width: 110px;"
              v-model="singleValue"
            >
              <el-option
                label="单品名称"
                value="title"
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
          prop="title"
        >
          <template slot-scope="scope">
            <div class="df align-stretch">
              <div
                class="w60 h60 mr5 bg-cover"
                style="background-image: url('https://image-c.weimobwmc.com/saas-wxbiz/696835e75da64713b2e12c734c66ad46.jpg')"
              ></div>
              <div class="df flex-column justify-between">
                <p>{{scope.row.title}}</p>
                <p>qqq</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="单品规格"
          prop="sku"
        ></el-table-column>
        <el-table-column
          align="center"
          label="单位"
          prop="unit"
        ></el-table-column>
        <el-table-column
          align="center"
          label="实物库存"
          prop="real_stock"
        ></el-table-column>
        <el-table-column
          align="center"
          label="占用状态"
          prop="occupy_stock"
        ></el-table-column>
        <el-table-column
          align="center"
          label="可用状态"
          prop="able_stock"
        ></el-table-column>
        <el-table-column
          align="center"
          label="成本"
          prop="cost_price"
        ></el-table-column>
        <el-table-column
          align="center"
          label="操作"
          prop="code"
        >
          <template slot-scope="scope">
            <p
              @click="enterInOutBoundDetail(scope.row.code)"
              class="text-primary c-pointer"
            >出入库明细</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import API from './API'
export default {
  name: 'store-stock',
  data () {
    return {
      classifyList: [],
      classify: [''],
      keyWords: '',
      singleValue: 'title',
      stockList: []
    }
  },
  mounted () {
    this.getStockList()
    // 全部单品分类数据树
    this.$httpGet(API.getClassifyTree).then(({ collection, state }) => {
      console.log('collection', collection)
      if (state === 0) {
        console.log(collection, 55)
        let classifyList = this.recursionTree(collection)
        classifyList.unshift({
          value: '',
          label: '全部单品'
        })
        classifyList.push({
          value: '0',
          label: '未分类'
        })
        this.classifyList = classifyList
        console.log('this.classifyList', this.classifyList)
      }
    })
  },
  methods: {
    getStockList ({
      categoryId = '',
      title = '',
      code = '',
      page_num: pageNum = 1,
      page_size: pageSize = 10
    } = {}) {
      this.$httpGet(API.getStockList, {
        resource: {
          id: '2901668360367022085'
        },
        query: {
          categoryId,
          title,
          code,
          page_num: pageNum,
          page_size: pageSize
        }
      }).then(({ collection, state }) => {
        if (state === 0) {
          this.stockList = collection
        }
      })
    },
    // 单品类型
    classifyChange (val) {
      console.log(val, 111)
      this.getStockList({
        categoryId: val[val.length - 1],
        [this.singleValue]: this.keyWords
      })
    },
    chooseSingleType (val) {
      console.log(val, 222)
      this.getStockList({
        categoryId: this.classify[this.classify.length - 1],
        [val]: this.keyWords
      })
    },
    // 搜索
    searchSingle (val) {
      this.getStockList({
        categoryId: this.classify[this.classify.length - 1],
        [this.singleValue]: this.keyWords
      })
    },
    // 递归获取树结构
    recursionTree (collection) {
      let pCollection = []
      collection.forEach((ele, index) => {
        let obj = {
          value: ele.id,
          label: ele.title
        }
        if (ele.childs.length > 0) {
          obj.children = this.recursionTree(ele.childs)
        }
        pCollection.push(obj)
      })
      return pCollection
    },
    // 变成element-ui真正的级联数据
    changeUiData (collection) {}
  }
}
</script>
