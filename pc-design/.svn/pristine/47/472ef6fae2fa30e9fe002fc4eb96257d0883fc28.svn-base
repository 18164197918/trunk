<template>
  <el-dialog
    :visible.sync="p_open"
    title="选择商品"
    width="900px"
  >
    <div class="clearfix">
      <el-button
        @click="multipleSelected"
        class="pull-left mr5"
        size="small"
        type="primary"
        v-if="mode === 'multiple'"
      >批量选择</el-button>
      <el-cascader
        :change-on-select="true"
        :options="groups"
        :props="{value:'id',label:'name',children:'childs'}"
        :show-all-levels="false"
        @change="search()"
        class="w230 mr5 pull-left"
        size="small"
        v-model="searchGroup"
      ></el-cascader>
      <el-input
        class="w200 pull-right"
        placeholder="请输入商品名称"
        size="small"
        v-model="inputSearch"
      >
        <el-button
          @click="search()"
          icon="el-icon-search"
          slot="append"
        ></el-button>
      </el-input>
    </div>
    <el-table
      :data="listItems"
      class="mt20"
      style="width: 100%;"
      tooltip-effect="dark"
      v-if="mode === 'single'"
    >
      <el-table-column
        align="center"
        label="商品"
        width="80"
      >
        <template slot-scope="scope">
          <div class="df">
            <bg-img-box
              :src.sync="scope.row.images"
              class="w60 h60"
            ></bg-img-box>
            <div>
              <p>1211111</p>
              <p>234234234</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="名称"
        prop="title"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        label="价格"
        prop="price"
      >
        <template slot-scope="scope">
          <p>{{scope.row.price}}元</p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="库存"
        prop="views"
      >
        <template slot-scope="scope">
          <p>{{scope.row.stock}}件</p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        prop="stock"
      >
        <template slot-scope="scope">
          <el-button
            @click="singleSelected(scope.row)"
            class="w80"
            size="mini"
            type="primary"
            v-if="(type===0 && scope.row.is_presell===0) || (!scope.row.isHasRebateConfig && type===1) || (!scope.row.is_point && type===2) || (!scope.row.is_customer_card && type===3) || (!scope.row.is_goods_partner_bonus && type===4)"
          >选择</el-button>
          <el-button
            class="w80"
            disabled
            size="mini"
            v-if="(scope.row.isHasRebateConfig && type===1) || (scope.row.is_point && type===2) || (scope.row.is_customer_card && type===3) || (scope.row.is_goods_partner_bonus && type===4)"
          >已选择</el-button>
          <el-button
            class="w80"
            disabled
            size="mini"
            v-if="scope.row.is_presell===1 && type===0"
          >选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="listItems"
      @selection-change="handleSelectionChange"
      class="mt20"
      ref="table"
      style="width: 100%;"
      tooltip-effect="dark"
      v-if="mode === 'multiple'"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        align="center"
        label="商品"
        width="80"
      >
        <template slot-scope="scope">
          <sp-thumb
            :src="scope.row.images"
            class="w70 h70"
          ></sp-thumb>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="名称"
        prop="title"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        label="价格"
        prop="price"
      >
        <template slot-scope="scope">
          <p>{{scope.row.price}}元</p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="库存"
        prop="views"
      >
        <template slot-scope="scope">
          <p>{{scope.row.stock}}件</p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        prop="stock"
      >
        <template slot-scope="scope">
          <el-button
            @click="singleSelected(scope.row)"
            class="w80"
            size="mini"
            type="primary"
            v-if="isLicit(scope.row)"
          >选择</el-button>
          <el-button
            class="w80"
            disabled
            size="mini"
            v-if="!isLicit(scope.row)"
          >已选择</el-button>
          <el-button
            class="w80"
            disabled
            size="mini"
            v-if="scope.row.is_presell===1 && type===0"
          >选择</el-button>
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
  </el-dialog>
</template>

<script>
import API from './API'

function getList () {
  this.httpGet(this.url, {
    query: {
      page: this.pageIndex,
      per_page: this.pageSize,
      title: this.inputSearch,
      group_id: this.groupId,
      is_added: 1,
      is_sell_out: 0
    }
  }).then(res => {
    this.listItems = res.data
    this.total = res.meta.pagination.total
  })
}

export default {
  name: 'goods-choose',
  props: {
    url: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: '-1' // 0活动商品 2积分商品 3会员卡
    },
    mode: {
      type: String, // multiple多个 single单个
      default: 'multiple'
    },
    open: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object],
      default: null
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      p_open: this.open,
      p_selected: this.selected,
      listItems: [],
      inputSearch: '',
      searchGroup: null,
      groupId: null,
      total: 3,
      pageSize: 4,
      pageIndex: 1,
      multipleChoose: [],
      groups: [
        {
          name: '全部分组'
        }
      ]
    }
  },
  watch: {
    open (val) {
      this.p_open = val
    },
    p_open (val) {
      this.$emit('update:open', val)
      if (val === false && this.mode === 'multiple') {
        this.$refs.table.clearSelection()
      }
    },
    selected (val) {
      this.p_selected = val
    }
  },
  created () {
    this.httpGet(API.groupAll).then(res => {
      this.groups = this.groups.concat(res.data)
      this.delCascaderEmptyChilds(this.groups)
    })
    Reflect.apply(getList, this, [])
  },
  methods: {
    isLicit (obj) {
      let status = true

      switch (this.type) {
        case 2:
          status = !obj.is_point
          break
      }

      return status && this.p_selected.find((x) => {
        if (typeof x === 'number') {
          return x === obj.id
        } else if (typeof x === 'object') {
          return x.id === obj.id
        }
      }) === undefined
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    search () {
      if (this.searchGroup) {
        this.groupId = this.searchGroup[this.searchGroup.length - 1]
      }
      this.pageIndex = 1
      Reflect.apply(getList, this, [])
    },
    singleSelected (item) {
      this.$emit('update:data', item)
      this.$emit('response', item)
      this.p_open = false
    },
    multipleSelected () {
      if (this.multipleChoose.length === 0) return

      let i = this.multipleChoose.length

      while (i--) {
        (!this.isLicit(this.multipleChoose[i])) && this.multipleChoose.splice(i, 1)
      }

      this.$emit('update:data', this.multipleChoose)
      this.$emit('response', this.multipleChoose)
      this.p_open = false
    },
    handleSelectionChange (val) {
      this.multipleChoose = val
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
