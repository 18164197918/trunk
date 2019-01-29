<template>
  <el-dialog title="选择商品" :visible.sync="p_open" width="900px">
    <div class="clearfix">
      <el-button class="pull-left mr5" type="primary" size="small" v-if="mode === 'multiple'" @click="multipleSelected">
        批量选择
      </el-button>
      <el-cascader class="w230 mr5 pull-left" size="small" v-model="searchGroup"
                   :options="groups"
                   :change-on-select="true"
                   :show-all-levels="false"
                   :props="{value:'id',label:'name',children:'childs'}" @change="search()">
      </el-cascader>
      <el-input
        class="w200 pull-right"
        size="small"
        placeholder="请输入商品名称"
        v-model="inputSearch">
        <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
      </el-input>
    </div>
    <el-table
      class="mt20"
      style="width: 100%;"
      tooltip-effect="dark"
      :data="listItems"
      v-if="mode === 'single'">
      <el-table-column
        label="商品"
        width="80"
        align="center">
        <template slot-scope="scope">
          <sp-thumb class="w70 h70" :src="scope.row.images"></sp-thumb>
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        label="名称"
        prop="title"
        align="left">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        align="center">
        <template slot-scope="scope">
          <p>{{scope.row.price}}元</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="views"
        label="库存"
        align="center">
        <template slot-scope="scope">
          <p>{{scope.row.stock}}件</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="stock"
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" class="w80" @click="singleSelected(scope.row)"
                     v-if="(type===0 && scope.row.is_presell===0) || (!scope.row.isHasRebateConfig && type===1) || (!scope.row.is_point && type===2) || (!scope.row.is_customer_card && type===3) || (!scope.row.is_goods_partner_bonus && type===4)">
            选择
          </el-button>
          <el-button disabled size="mini" class="w80"
                     v-if="(scope.row.isHasRebateConfig && type===1) || (scope.row.is_point && type===2) || (scope.row.is_customer_card && type===3) || (scope.row.is_goods_partner_bonus && type===4)">
            已选择
          </el-button>
          <el-button disabled size="mini" class="w80" v-if="scope.row.is_presell===1 && type===0">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      ref="table"
      class="mt20"
      style="width: 100%;"
      tooltip-effect="dark"
      :data="listItems"
      v-if="mode === 'multiple'"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="商品"
        width="80"
        align="center">
        <template slot-scope="scope">
          <sp-thumb class="w70 h70" :src="scope.row.images"></sp-thumb>
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        label="名称"
        prop="title"
        align="left">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        align="center">
        <template slot-scope="scope">
          <p>{{scope.row.price}}元</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="views"
        label="库存"
        align="center">
        <template slot-scope="scope">
          <p>{{scope.row.stock}}件</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="stock"
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" class="w80" @click="singleSelected(scope.row)"
                     v-if="isLicit(scope.row)">选择
          </el-button>
          <el-button disabled size="mini" class="w80"
                     v-if="!isLicit(scope.row)">已选择
          </el-button>
          <el-button disabled size="mini" class="w80" v-if="scope.row.is_presell===1 && type===0">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="mt40" background layout="prev, pager, next"
                   :page-size="pageSize"
                   :total="total"
                   @current-change="currentChange">
    </el-pagination>
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
      is_sell_out: 0,
    },
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
      default: '',
    },
    type: {
      type: Number,
      default: '-1', //0活动商品 2积分商品 3会员卡
    },
    mode: {
      type: String, //multiple多个 single单个
      default: 'multiple',
    },
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: [Array, Object],
      default: null,
    },
    selected: {
      type: Array,
      default () {
        return []
      },
    },
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
          name: '全部分组',
        },
      ],
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
    },
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
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
