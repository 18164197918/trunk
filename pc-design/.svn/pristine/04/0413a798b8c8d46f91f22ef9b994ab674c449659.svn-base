<template>
  <div>
    <div class="d-flex mt20">
      <b class="w80">组件属性:</b>
      <div class="ml10">
        <el-table
          :data="tableData"
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
        <p>{{str}}</p>
      </div>
    </div>
    <div class="d-flex mt20 mb20">
      <b class="w80 shrink-0">对象属性:</b>
      <p class="ml10">{{locationData}}</p>
      <p class="ml10">{{locationData2}}</p>
    </div>
    <a-map v-bind.sync="locationData"></a-map>
    <a-map v-bind.sync="locationData2"></a-map>
  </div>
</template>

<script>
export default {
  name: 'mapDemo',
  data () {
    return {
      str: `<a-map v-bind.sync="locationData"></a-map>`,
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
        des: '',
        name: 'address',
        default: ''
      }, {
        des: '',
        name: 'lng',
        default: ''
      }, {
        des: '',
        name: 'lat',
        default: ''
      }, {
        des: '标签文字',
        name: 'label',
        default: '地址：'
      }, {
        des: '标签宽度',
        name: 'labelWidth',
        default: '100'
      }, {
        des: '地图高度',
        name: 'mapHeight',
        default: '450'
      }, {
        des: '地图宽度',
        name: 'mapWidth',
        default: '680'
      }, {
        des: '是否显示经纬度输入框',
        name: 'showInput',
        default: 'false'
      }, {
        des: '是否禁止输入经纬度',
        name: 'disabledInput',
        default: 'true'
      }, {
        des: '是否必填',
        name: 'required',
        default: 'false'
      }],
      locationData: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      },
      locationData2: {
        'province': '',
        'city': '',
        'area': '',
        'address': '',
        'lng': '',
        'lat': ''
      }
    }
  }
}
</script>
