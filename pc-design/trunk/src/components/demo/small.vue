<template>
  <div>
    <div class="app-block-lv2">
      <h6>地址选择</h6>
      <div class="d-flex mt20">
        <b class="w80">组件属性:</b>
        <div class="ml10">
          <el-table
            :data="addressChoose.tableData"
            border
            class="w600"
            height="250"
          >
            <el-table-column
              label="名称"
              prop="name"
              width="180"
            ></el-table-column>
            <el-table-column
              label="描述"
              prop="des"
              width="180"
            ></el-table-column>
            <el-table-column
              label="默认值"
              prop="default"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="d-flex mt20">
        <b class="w80">用法:</b>
        <div class="ml10">
          <p>{{addressChoose.str}}</p>
        </div>
      </div>
      <div class="d-flex mt20 mb20">
        <b class="w80 shrink-0">对象属性:</b>
        <p class="ml10">{{addressChoose.locationData}}</p>
      </div>
      <address-choose
        class="w230"
        v-bind.sync="addressChoose.locationData"
      ></address-choose>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addressChooseDemo',
  data () {
    return {
      addressChoose: {
        str: `<address-choose v-bind.sync="locationData"></address-choose>`,
        tableData: [{
          des: '',
          name: 'province',
          default: ''
        }, {
          des: '',
          name: 'city',
          default: ''
        }, {
          des: '',
          name: 'area',
          default: ''
        }, {
          des: '是否允许清空',
          name: 'clearable',
          default: 'false'
        }],
        locationData: {
          'province': '',
          'city': '',
          'area': ''
        }
      }

    }
  }
}
</script>
