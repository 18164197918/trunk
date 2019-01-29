<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-border-style"></span>
      <div v-if="checkTitleVal" class="dot"></div>
    </div>
    <div class="base-set-box">
      <div class="tit">
        <label>
          <input class="mr5" type="checkbox" v-model="checkTitleVal"/>边框
        </label>
      </div>
      <div v-if="checkTitleVal" class="border-module">
        <div class="el-block mb10">
          <label>
            <input class="mr5" type="checkbox" v-model="checkVal"/>所有边框相同
          </label>
        </div>

        <div>
          <div v-for="(item, key1) in borderArr" class="icon-common-list icon-list-border">
            <dl class="el-block mb10">
              <dt>
                <div class="icon"></div>
              </dt>
              <base-range-input :getCb="getCb" :setCb="setCb" :index="[key1, 0]" unit="px" min="0" max="300"></base-range-input>
            </dl>
            <dl class="el-block mb10">
              <dt></dt>
              <dd>
                <select @input="modifyBorderStyle($event, key1)" :value="item[1]" class="w60">
                  <option v-for="item2 in borderStyleAttr" :value="item2.value">
                    {{item2.lable}}
                  </option>
                </select>
                <base-color-picker :getCb="getCb" :setCb="setCb" :index="[key1, 2]" :showHistory="true" type="borderColor" vcPosition="bottom-right"></base-color-picker>
              </dd>
            </dl>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'
  import baseColorPicker from '../base-color-picker/index.vue'

  let borderArr       = ['border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft'],
      borderArrSlice  = borderArr.slice(1),
      initSytle       = '2px solid rgba(0,0,0,1)',
      borderStyleAttr = [{
        lable: '实线',
        value: 'solid',
      },
                         {
                           lable: '点线',
                           value: 'dotted',
                         },
                         {
                           lable: '虚线',
                           value: 'dashed',
                         },
                         {
                           lable: '双边线',
                           value: 'double',
                         },
                         {
                           lable: '凹槽边框',
                           value: 'groove',
                         },
                         {
                           lable: '垄状边框',
                           value: 'ridge',
                         },
                         {
                           lable: 'inset 边框',
                           value: 'inset',
                         },
                         {
                           lable: 'outset 边框',
                           value: 'outset',
                         },
      ]

  export default {
    name      : 'base-module-border',
    mixins    : [mixinBseModule],
    data() {
      return {
        borderStyleAttr,
      }
    },
    components: {
      baseColorPicker,
    },
    methods   : {
      getCb(indexArr) {
        let [index1, index2] = indexArr
        if (index2 === 0) {
          return parseFloat(this.borderArr[index1][0])
        }
        else {
          return this.borderArr[index1][2]
        }
      },
      setCb(...arg) {
        let [val, [index1, index2]] = arg
        if (index2 === 0) {
          this.borderArr[index1][0] = val + 'px'
        }
        else {
          this.borderArr[index1][2] = val.rgba_val
        }
        this.css[this.currentBorderArr[index1]] = this.borderArr[index1].join(' ')
      },
      modifyBorderStyle(e, index) {
        let temp                               = this.borderArr[index]
        temp[1]                                = e.target.value
        this.css[this.currentBorderArr[index]] = temp.join(' ')
      },
    },
    computed  : {
      currentBorderArr: function () {
        return this.checkVal ? borderArr.slice(0, 1) : borderArrSlice
      },
      borderArr() {
        return this.currentBorderArr.map(item => {
          return this.css[item].match(/rgba\(.*\)|[^\s]+/g)
        })
      },
      checkTitleVal   : {
        get() {
          return !!(this.css.border || this.css.borderTop)
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'border', initSytle)
          }
          else {
            for (let i in borderArr) {
              this.$delete(this.css, borderArr[i])
            }
          }
        },
      },
      checkVal        : {
        get() {
          return !!this.css.border
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'border', this.css.borderTop)
            for (let i in borderArrSlice) {
              this.$delete(this.css, borderArrSlice[i])
            }
          }
          else {
            let temp = this.css.border
            this.$delete(this.css, 'border')
            for (let i in borderArrSlice) {
              this.$set(this.css, borderArrSlice[i], temp)
            }
          }
        },
      },
    },
  }
</script>
