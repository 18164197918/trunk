<template>
  <el-cascader
    :clearable="p_clearable"
    :disabled="disabled"
    :options="gdMapData"
    :props="{value:'adcode',label:'name',children:'districts'}"
    @change="locationChange"
    v-model="location"
  ></el-cascader>
</template>

<script>
import getData from './a-map-data'

export default {
  name: 'addressChoose',
  props: ['province', 'city', 'area', 'clearable'],
  data () {
    let location = []
    this.province && (location[0] = this.province)
    this.city && (location[1] = this.city)
    this.area && (location[2] = this.area)
    return {
      location,
      gdMapData: [],
      p_province: this.province,
      p_city: this.city,
      p_area: this.area,
      p_clearable: !!((this.clearable === '' || this.clearable === true)),
      disabled: true
    }
  },
  created () {
    getData.then((gdMapData) => {
      this.gdMapData = gdMapData
      this.disabled = false
    })
  },
  watch: {
    province (val) {
      this.p_province = val
      this.location[0] = val
      this.location.splice(0, 1, val)
    },
    city (val) {
      this.p_city = val || ''
      this.location.splice(1, 1, val || '')
    },
    area (val) {
      this.p_area = val || ''
      this.location.splice(2, 1, val || '')
    }
  },
  methods: {
    locationChange (value) {
      this.p_province = value[0] || ''
      this.p_city = value[1] || ''
      this.p_area = value[2] || ''
      this.$emit('update:province', value[0] || '')
      this.$emit('update:city', value[1] || '')
      this.$emit('update:area', value[2] || '')
    }
  }
}

</script>
