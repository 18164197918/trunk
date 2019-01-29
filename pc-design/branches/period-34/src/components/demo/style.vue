<template>
  <el-table
    :data="form"
    class="fz14 mb40"
  >
    <el-table-column
      label="名称"
      prop="name"
    ></el-table-column>
    <el-table-column
      label="变量属性"
      prop="prop"
    ></el-table-column>
    <el-table-column
      label="例子"
      prop="eg"
    ></el-table-column>
    <el-table-column
      label="说明"
      prop="info"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      form: [
        { name: '宽度像素', prop: '$w', eg: 'w100', info: 'width:100px !important;' },
        { name: '宽度百分比', prop: '$wp', eg: 'w100p', info: 'width:100% !important;' },
        { name: '高度', prop: '$h', eg: 'h50', info: 'height:50px !important;' },
        { name: '高度百分比', prop: '$hp', eg: 'h50p', info: 'height:50% !important;' },
        { name: '内间距', prop: '$p', eg: 'p10', info: 'padding:10px !important;' },
        { name: '上内间距', prop: '$pt', eg: 'pt10', info: 'padding-top:10px !important;' },
        { name: '右内间距', prop: '$pr', eg: 'pr10', info: 'padding-right:10px !important;' },
        { name: '下内间距', prop: '$pb', eg: 'pb10', info: 'padding-bottom:10px !important;' },
        { name: '左内间距', prop: '$pl', eg: 'pl10', info: 'padding-left:10px !important;' },
        { name: '外边距', prop: '$m', eg: 'm10', info: 'margin:10px !important;' },
        { name: '上外边距', prop: '$mt', eg: 'mt10', info: 'margin-top:10px !important;' },
        { name: '右外边距', prop: '$mr', eg: 'mr10', info: 'margin-right:10px !important;' },
        { name: '下外边距', prop: '$mb', eg: 'mb10', info: 'margin-bottom:10px !important;' },
        { name: '左外边距', prop: '$ml', eg: 'ml10', info: 'margin-left:10px !important;' },
        { name: '字号', prop: '$fz', eg: 'fz14', info: 'font-size:14px !important;' },
        { name: '行高px', prop: '$lh', eg: 'lh18', info: 'line-height:18px !important;' },
        { name: '行高', prop: '$lh-', eg: 'lh-2', info: 'line-height:2 !important;' },
        { name: '旋转', prop: '$rotate', eg: 'rotate90', info: 'transform:rotate(90deg);' },
        { name: '圆角', prop: '$bdr', eg: 'bdr20', info: 'border-radius:20px;' }
      ]
    }
  }
}
</script>
