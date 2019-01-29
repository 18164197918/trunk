<style lang="scss" scoped>
table {
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  tr {
    td,
    th {
      padding: 15px;
      border: 1px solid $gray-line;
    }
  }
}
</style>
<template>
  <div>
    <div class="app-block-lv2">
      <el-button
        @click="p_show = false"
        type="primary"
      >新建运费模板</el-button>
      <span class="ml40 fz12 text-gray-l20">
        <i class="el-icon-info text-danger"></i>
        开启商家配送的商户需设置
      </span>
    </div>

    <table
      class="bd-gray fz12"
      v-if="!$$isEmptyObject(tableData)"
    >
      <tr>
        <th colspan="6">
          <strong class="fl">{{tableData.name}}</strong>
          <span
            class="ml20"
            v-if="tableData.free_post"
          >(卖家包邮，已下设置无效)</span>
          <span class="fr mr80 text-gray-l20">最后编辑时间：{{tableData.updated_at}}</span>
        </th>
      </tr>

      <tr>
        <td>目的地</td>
        <td>首件（个）</td>
        <td>运费(元)</td>
        <td>续件（个）</td>
        <td>续费(元)</td>
        <td>操作</td>
      </tr>
      <tr
        :key="index"
        v-for="(item,index) in tableData.freight_template_rule_list"
      >
        <td>
          <span v-if="item.general">默认</span>
          <span v-if="!item.general">{{item.contain_area_rule.rule_area_name}}</span>
        </td>
        <td>{{item.start_standards}}</td>
        <td>{{item.start_freight}}</td>
        <td>{{item.continued}}</td>
        <td>{{item.continued_freight}}</td>
        <td
          :rowspan="tableData.freight_template_rule_list.length"
          v-if="index===0"
        >
          <el-button
            @click="edit(tableData)"
            class="fz12"
            type="text"
          >编辑</el-button>
        </td>
      </tr>
    </table>
    <div class="text-center pt20">
      <img src="./../../../../../assets/nodata.png">
    </div>
  </div>
</template>
<script>

import API from '../API'

function getList () {
  this.$httpGet(API.singleTemplate, {
    resource: {
      id: this.$route.params.id
    }
  }).then((res) => {
    this.tableData = res.data ? res.data : []
  })
}

export default {
  name: 'templateList',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    storeId: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      title: '模板列表',
      p_show: this.show,
      tableData: []
    }
  },
  watch: {
    show (val) {
      this.p_show = val
    },
    p_show (val) {
      this.$emit('update:show', val)
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    edit (item) {
      this.p_id = item.id
      this.$emit('update:show', false)
    }
  }
}
</script>
