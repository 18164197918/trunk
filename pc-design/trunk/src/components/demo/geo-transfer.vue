<style>
</style>

<template>
  <div>
    {{a}}
    <el-button @click="click">出来</el-button>
    <el-button @click="click2">出来</el-button>
  </div>
</template>

<script>
import geo from '@/components/common/geo-transfer'

export default {
  name: 'geo-transfer-demo',
  created () {
  },
  data () {
    return {
      a: [1]
    }
  },
  methods: {
    click () {
      geo.open().then((res) => {

      }).catch((res) => {
        console.log(res)
      })
    },
    click2 () {
      this.a.push(2)
    }
  }
}
</script>
