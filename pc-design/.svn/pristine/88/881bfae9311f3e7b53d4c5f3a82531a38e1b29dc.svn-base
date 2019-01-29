<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">
        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-background"></span>
            <div v-if="checkTitleVal" class="dot"></div>
        </div>
        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>背景
                </label>
            </div>

            <div v-if="checkTitleVal" class="background-set-box">
                <dl class="el-block mb20">
                    <dt>颜色</dt>
                    <base-color-picker :css="css" propName="backgroundColor" vcPosition="top-center" :showHistory="true"></base-color-picker>
                </dl>

                <div class="mb10">
                    <label v-for="item in bgImgArr" class="mr15"><input type="radio" :value="item.value" v-model="bgImgType" class="mr5"/>{{item.label}}</label>
                </div>
                <div v-if="bgImgType===1">
                    <bg-img-box :path="[css, 'backgroundImage']"></bg-img-box>
                    <div v-if="css.backgroundImage" class="label-btn-group">
                        <label class="label-btn fz12" v-for="item in sizeTypeArr">
                            <input type="radio" v-model="css.backgroundSize" :value="item.value">
                            <span>{{item.label}}</span>
                        </label>
                    </div>
                </div>
                <div v-if="bgImgType===2">
                    <div class="d-flex align-center mb10">
                        <div class="label-btn-group mr20">
                            <label class="label-btn" v-for="item in gradientTypeArr">
                                <input v-model="isLinearGradient" type="radio" :value="item.value">
                                <span>{{item.label}}</span>
                            </label>
                        </div>
                        <div class="gradient-box">
                            <div class="c1">
                                <base-color-picker :getCb="getCb" :setCb="setCb" :index="1"></base-color-picker>
                            </div>
                            <div class="c2">
                                <base-color-picker :getCb="getCb" :setCb="setCb" :index="2" vcPosition="bottom-right"></base-color-picker>
                            </div>
                        </div>
                    </div>
                    <dl v-if="isLinearGradient" class="el-block mb10">
                        <dt>方向</dt>
                        <base-range-input :getCb="getCb" :setCb="setCb" :index="0" min="0" max="360" unit="deg"></base-range-input>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mixinBseModule from '../common/mixin-base-module'
import baseColorPicker from '../base-color-picker/index.vue'
import bgImgBox from '../../common/bg-img-box.vue'

let backgroundArr = ['background', 'backgroundColor', 'backgroundImage', 'backgroundSize', 'backgroundRepeat', 'backgroundPosition']

let initImgStyle = [
  { name: 'backgroundImage', value: '' },
  { name: 'backgroundRepeat', value: 'no-repeat' },
  { name: 'backgroundPosition', value: 'center center' }
]

let initGradient = [
  'linear-gradient(0deg, rgba(74,95,136,1), rgba(43,122,180,1))',
  'radial-gradient(circle, rgba(74,95,136,1), rgba(43,122,180,1))'
]

export default {
  name: 'base-module-background',
  mixins: [mixinBseModule],
  data () {
    return {
      bgImgArr: [
        { label: '无', value: 0 },
        { label: '图片', value: 1 },
        { label: '渐变', value: 2 }
      ],
      sizeTypeArr: [
        {
          label: '拉伸',
          value: '100% 100%'
        },
        {
          label: '剪切',
          value: 'cover'
        },
        {
          label: '包含',
          value: 'contain'
        }
      ],
      gradientTypeArr: [
        {
          label: '线性',
          value: true
        },
        {
          label: '径向',
          value: false
        }
      ]
    }
  },
  components: {
    bgImgBox,
    baseColorPicker
  },
  methods: {
    getCb (index) {
      if (index === 0) {
        return parseInt(this.linearGradientArr[index])
      } else {
        return this.linearGradientArr[index]
      }
    },
    setCb (...arg) {
      let [val, index] = arg

      if (index === 0) {
        this.linearGradientArr[index] = val + 'deg'
      } else {
        this.linearGradientArr[index] = val.rgba_val
      }

      this.css.backgroundImage = (this.isLinearGradient ? 'linear' : 'radial') + '-gradient(' + this.linearGradientArr.join(', ') + ')'
    }
  },
  computed: {
    checkTitleVal: {
      get () {
        return this.css.backgroundColor || this.css.backgroundImage
      },
      set (bool) {
        if (bool) {
          this.$set(this.css, 'backgroundColor', 'rgba(255,255,255,1)')
        } else {
          for (let i in backgroundArr) {
            this.$delete(this.css, backgroundArr[i])
          }
        }
      }
    },
    bgImgType: {
      get () {
        if (this.css.backgroundImage === undefined) {
          return 0
        } else if (this.css.backgroundPosition) {
          return 1
        } else {
          return 2
        }
      },
      set (bool) {
        if (bool === 0) {
          initImgStyle.forEach(item => {
            this.$delete(this.css, item.name)
          })
        } else if (bool === 1) {
          initImgStyle.forEach(item => {
            this.$set(this.css, item.name, item.value)
          })
        } else {
          initImgStyle.forEach(item => {
            this.$delete(this.css, item.name)
          })
          this.$set(this.css, 'backgroundImage', initGradient[0])
        }
      }
    },
    linearGradientArr () {
      return this.css.backgroundImage.match(/rgba?\(.*?\)|[\d]+deg|circle/g)
    },
    isLinearGradient: {
      get () {
        return this.linearGradientArr[0].indexOf('circle') === -1
      },
      set (val) {
        this.$set(this.css, 'backgroundImage', val ? initGradient[0] : initGradient[1])
      }
    }
  }
}
</script>
<style lang="scss">
    .left-box,
    .right-box {
        .background-set-box {
            .gradient-box {
                position: relative;
                display: flex;
                justify-content: space-between;
                width: 50%;

                &:before {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 100%;
                    height: 1px;
                    background-color: #ddd;
                    content: "";
                }

                .c1, .c2 {
                    width: 32px;
                }
            }
        }
    }
</style>
