<template>
    <dd>
        <select v-model="css[propName]" :style="{'font-family': css[propName]}">
            <option v-for="item in fontFamily" :value="item.value" :style="{'font-family': item.value}">{{item.label}}</option>
        </select>
    </dd>
</template>
<script>
  export default {
    props: {
      css     : {},
      propName: {},
    },
    data() {
      return {
        fontFamily: [
          {label: '宋体', value: '宋体'},
          {label: '微软雅黑', value: '微软雅黑'},
          {label: '黑体', value: '黑体'},
          {label: '楷体', value: '楷体'},
          {label: '隶书', value: '隶书'},
          {label: 'Arial', value: 'Arial'},
          {label: 'times new roman', value: 'times new roman'},
        ],
      }
    },

  }
</script>