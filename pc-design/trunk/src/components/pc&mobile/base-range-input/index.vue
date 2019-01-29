<template>
  <dd :class="{'only-number': hide==='range'}">
    <input v-if="hide!=='range'" v-model="val" :min="min" :max="max" :step="step" type="range">
    <input v-model="val" :min="min" :max="max" :step="step" type="number">
    <span v-if="hide!=='range'" @click="switchUnit" :class="{'can-switch': unitCb && calcUnit}" class="unit">{{unitAlias || calcUnit}}</span>
  </dd>
</template>

<script>
  export default {
    props   : {
      hide     : {default: ''},
      setCb    : {type: Function},
      getCb    : {type: Function},
      index    : {},
      css      : {},
      propName : {},
      min      : {},
      max      : {},
      step     : {default: 1},
      unit     : {},
      unitCb   : {},
      unitAlias: {default: false},
      disabled : {default: false},
    },
    computed: {
      calcUnit() {
        let unitArr = (this.css && this.css[this.propName] || '').match(/px|%/)
        return unitArr && unitArr[0] || this.unit || ''
      },
      val: {
        get() {
          if (this.getCb) {
            return this.getCb(this.index)
          }
          else {
            return parseFloat(this.css[this.propName] || '')
          }
        },
        set(value) {
          if (this.setCb) {
            this.setCb(value, this.index)
          }
          else {
            if (this.min && value < parseFloat(this.min)) {
              value = parseFloat(this.min)
            }
            if (this.max && value > parseFloat(this.max)) {
              value = this.max
            }
            this.$set(this.css, this.propName, value + this.calcUnit)
          }
          this.$emit('input', {value, unit: this.calcUnit, propName: this.propName})
        },
      },
    },
    methods : {
      switchUnit() {
        if (typeof this.unitCb === 'function') {
          this.unitCb(this.css, this.propName)
        }
      },
    },
  }
</script>
