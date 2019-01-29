<style lang="scss">
</style>

<template>
  <div>
    <div class="app-block-lv2">
      <div class="dfc">
        <div class="fx1">
          <el-button
            @click="goAdd"
            type="primary"
          >新建自提点</el-button>
        </div>
        <el-select
          @change="search()"
          class="w100 mr10"
          placeholder="请选择"
          v-model="openStatus"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in statusOptions"
          ></el-option>
        </el-select>
        <address-choose
          class="w200 mr10"
          clearable
          v-bind.sync="locationData"
        ></address-choose>
        <el-input
          @change="search"
          class="w200"
          placeholder="自提点名称"
          size="small"
          suffix-icon="el-icon-search"
          v-model="title"
        ></el-input>
      </div>
    </div>
    <el-table
      :data="listItems"
      style="width: 100%"
      tooltip-effect="dark"
    >
      <el-table-column
        align="left"
        label="自提点名称"
        prop="title"
      ></el-table-column>
      <el-table-column
        label="自提点地址"
        width="300"
      >
        <template
          slot-scope="scope"
        >{{ scope.row.province_name + scope.row.city_name + scope.row.area_name + scope.row.address}}</template>
      </el-table-column>
      <el-table-column
        label="联系人"
        prop="name"
      ></el-table-column>
      <el-table-column
        label="联系电话"
        prop="contact_phone"
      ></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            @change="changeStatus(scope.row)"
            v-model="scope.row.open_status"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span
            @click="edit(scope.row)"
            class="text-primary cup mr10"
          >编辑</span>
          <span
            @click="del(scope.row)"
            class="text-primary cup"
          >删除</span>
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
      v-if="total!==0"
    ></el-pagination>
  </div>
</template>
<script>

import API from './API'

function getList () {
  this.$httpGet(API.pickupStationList, {
    query: {
      page_num: this.pageIndex,
      page_size: this.pageSize,
      title: this.title,
      province_code: this.locationData.province,
      city_code: this.locationData.city,
      area_code: this.locationData.area,
      open_status: this.openStatus
    }
  }).then((res) => {
    this.listItems = res.collection
    this.total = res.meta.total
  })
}

export default {
  data () {
    return {
      pageIndex: 1,
      pageSize: 10,
      listItems: [],
      total: 0,
      title: '',
      openStatus: '',
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      statusOptions: [
        { label: '全部', value: '' },
        { label: '开启', value: 1 },
        { label: '关闭', value: 0 }
      ]
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    // 新增自提点
    goAdd () {
      this.$router.push('add')
    },
    // 编辑
    edit (item) {
      this.$router.push({ name: `selfMentionPoint.edit`, params: { id: item.id } })
    },
    // 删除
    del (item) {
      this.$httpDelete(API.pickupStation, { resource: { id: item.id } }).then(() => { Reflect.apply(getList, this, []) })
    },
    currentChange (val) {
      this.pageIndex = val
      Reflect.apply(getList, this, [])
    },
    search () {
      Reflect.apply(getList, this, [])
    },
    changeStatus (item) {
      this.$httpPut(API.pickupStationStatus, { resource: { id: item.id } }).then(() => { Reflect.apply(getList, this, []) })
    }
  },
  watch: {
    locationData: {
      handler (newVal) {
        Reflect.apply(getList, this, [])
      },
      deep: true
    }
  }
}

</script>
