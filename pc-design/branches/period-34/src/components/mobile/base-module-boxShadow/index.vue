<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">
    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-box-shadow"></span>
      <div v-if="checkTitleVal" class="dot"></div>
    </div>
    <div class="base-set-box">
      <div class="tit"><label><input class="mr5" type="checkbox" v-model="checkTitleVal">阴影</label></div>
      <div v-if="checkTitleVal">
        <div v-for="(item, key) in boxShadowArr" class="bb-gray mb10 pb10">

          <div class="d-flex justify-between align-center mb10">
            <label>
              <input @change="modifyInset($event, key)" :checked="item.length===6" class="mr5" type="checkbox">内阴影
            </label>
            <span @click="removeOne(key)" class="iconfont iconfont-close1 remove-one" v-if="boxShadowArr.length>1"></span>
          </div>

          <div v-for="(item2, key2) in item">
            <dl v-if="item2.indexOf('rgba')===0" class="el-block mb10">
              <dt>颜色</dt>
              <base-color-picker :getCb="getCb" :setCb="setCb" :index="[key, key2]" :showHistory="true" vcPosition="bottom-right"></base-color-picker>
            </dl>
            <dl v-else-if="!/inset/.test(item2)" class="el-block mb10">
              <dt>{{item.length === 6 ? boxMap[key2] : boxMap[key2 + 1]}}</dt>
              <base-range-input :getCb="getCb" :setCb="setCb" :index="[key, key2]" unit="px" min="-100" max="100"></base-range-input>
            </dl>
          </div>
        </div>

        <div @click="addOne" class="add-one" v-if="boxShadowArr.length<5">新增</div>
      </div>
    </div>
  </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'
  import baseColorPicker from '../base-color-picker/index.vue'

  let initStyle = '0px 0px 60px 0px rgba(0,0,0,.5)'

  export default {
    name      : 'base-module-boxShadow',
    mixins    : [mixinBseModule],
    data() {
      return {
        boxMap: ['', '水平', '垂直', '模糊', '尺寸'],
      }
    },
    components: {
      baseColorPicker,
    },
    methods   : {
      getCb(indexArr) {
        let [index1, index2] = indexArr,
            arr1             = this.boxShadowArr[index1]

        return (index2 === arr1.length - 1) ? arr1[index2] : parseFloat(arr1[index2])
      },
      setCb(...args) {
        let [val, [index1, index2]] = args,
            arr1                    = this.boxShadowArr[index1]

        if (index2 === arr1.length - 1) {
          arr1[index2] = val.rgba_val
        }
        else {
          arr1[index2] = val + 'px'
        }

        this.setBoxShadow()
      },
      setBoxShadow () {
        this.css.boxShadow = this.boxShadowArr.map(item => item.join(' ')).join(', ')
      },
      modifyInset(e, index) {
        let arr = this.boxShadowArr[index]

        if(e.target.checked && arr.length === 5){
          arr.unshift('inset')
        }else if(!e.target.checked && arr.length === 6){
          arr.shift()
        }

        this.setBoxShadow()
      },
      addOne() {
        this.css.boxShadow += ', ' + initStyle
        this.adjustBaseSetBoxPosition()
      },
      removeOne(index) {
        this.boxShadowArr.splice(index, 1)
        if (this.boxShadowArr.length) {
          this.setBoxShadow()
        }
        else {
          this.$delete(this.css, 'boxShadow')
        }
        this.adjustBaseSetBoxPosition()
      },
    },
    computed  : {
      checkTitleVal: {
        get() {
          return this.css.boxShadow !== undefined
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'boxShadow', initStyle)
          }
          else {
            this.$delete(this.css, 'boxShadow')
          }

          this.adjustBaseSetBoxPosition()
        },
      },
      boxShadowArr() {
        return this.css.boxShadow.split(/,\s/g).map(item => {
          return item.split(/\s/g)
        })
      },
    },
  }
</script>
