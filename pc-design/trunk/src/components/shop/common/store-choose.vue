<style lang="scss">
.str-list {
  max-height: 500px;
  overflow-y: auto;
}
</style>
<template>
  <el-dialog
    :visible.sync="p_open"
    title="选择门店"
    width="900px"
  >
    <div class="clearfix mb20 str-list">
      <el-button
        @click="multipleSelected"
        class="pull-left mr5"
        type="primary"
      >批量选择</el-button>
      <address-choose v-bind.sync="locationData"></address-choose>
      <el-select
        @change="search()"
        class="ml10 mr10"
        placeholder="请选择门店标签"
        v-model="tagId"
      >
        <el-option
          :key="item.id"
          :label="item.tag_name"
          :value="item.id"
          v-for="item in tagList"
        ></el-option>
      </el-select>
      <el-input
        @blur="search"
        class="input-with-select w320"
        placeholder="请输入关键字"
        suffix-icon="el-icon-search"
        v-model="inputValue"
      >
        <el-select
          class="w120"
          placeholder="请选择"
          slot="prepend"
          v-model="searchType"
        >
          <el-option
            :value="0"
            label="门店名称"
          ></el-option>
          <el-option
            :value="1"
            label="门店具体地址"
          ></el-option>
          <el-option
            :value="2"
            label="门店编号"
          ></el-option>
        </el-select>
      </el-input>
    </div>

    <el-table
      :data="listItems"
      @selection-change="handleSelectionChange"
      class="mb20"
      ref="table"
      style="width: 100%;"
      tooltip-effect="dark"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        align="left"
        label="门店名称"
        prop="name"
        width="200"
      ></el-table-column>
      <el-table-column
        align="left"
        label="地址"
        prop="price"
        width="240"
      >
        <template slot-scope="scope">
          <p>{{scope.row.addr}}</p>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="门店状态"
        prop="views"
      >
        <template slot-scope="scope">
          <p>{{scope.row.open_status ? '启用' : '禁用' }}</p>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="线上网店"
        prop="views"
      >
        <template slot-scope="scope">
          <p>{{scope.row.open_online ? '启用' : '禁用' }}</p>
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
  </el-dialog>
</template>

<script>
import API from './API'

function getList () {
  this.$httpGet(API.storePaginator, {
    query: {
      tag_id: this.tagId, // 搜索
      name: this.name,
      code: this.code,
      province_code: this.locationData.province,
      city_code: this.locationData.city,
      area_code: this.locationData.area
    }
  }).then(res => {
    this.listItems = res.collection
    for (let obj of this.listItems) {
      this.$set(obj, 'addr', `${obj.province_name}${obj.city_name}${obj.area_name}${obj.address}`)
    }
  })
}

function getTags () {
  this.$httpGet(API.storeTagAll).then((res) => {
    this.tagList = this.tagList.concat(res.collection)
  })
}

export default {
  name: 'storeChoose',
  props: {
    url: {
      type: String,
      default: ''
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
      multipleChoose: [],
      listItems: [],
      tagList: [{ id: '', tag_name: '全部' }],
      searchType: 0,
      tagId: null,
      name: '',
      code: '',
      inputValue: '',
      locationData: {
        'province': '',
        'city': '',
        'area': ''
      }
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
    locationData: {
      handler (newVal) {
        Reflect.apply(getList, this, [])
      },
      deep: true
    }
  },
  created () {
    Reflect.apply(getList, this, [])
    Reflect.apply(getTags, this, [])
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
      switch (this.searchType) {
        case 0:
          this.name = this.inputValue
          this.code = ''
          this.address = ''
          break
        case 1:
          this.name = ''
          this.code = ''
          this.address = this.inputValue
          break
        case 2:
          this.name = ''
          this.code = this.inputValue
          this.address = ''
          break
      }
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
