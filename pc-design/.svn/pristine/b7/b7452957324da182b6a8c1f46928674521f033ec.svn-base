<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-col"></span>
        </div>

        <div class="base-set-box">
            <div class="tit">布局</div>
            <div>
                <div class="el-block mb10">
                    <label v-for="(item, key) in direction" :class="{mr10: direction.length - 1 !== key}">
                        <input v-model="_static.direction" :value="item.value" type="radio" class="mr3">{{item.label}}
                    </label>
                </div>
                <dl v-if="_static.direction!==direction[0].value && _static.direction!==direction[3].value" class="el-block mb10">
                    <dt>列数</dt>
                    <dd>
                        <select v-model="_static.columnCount" @change="modifyNum">
                            <option v-for="item in 6" :value="item">{{item}}</option>
                        </select>
                    </dd>
                </dl>
                <dl class="el-block mb20">
                    <dt>间距</dt>
                    <base-range-input :css="css" propName="padding"></base-range-input>
                </dl>

                <div v-if="_static.direction==='swiper'">
                    <div class="d-flex align-center mb20">
                        <label class="mr20">
                            <input type="checkbox" v-model="autoplay" class="mr3">自动播放
                        </label>
                        <dl v-if="autoplay" class="el-block grow-1">
                            <dt class="w35">延迟</dt>
                            <dd>
                                <select v-model="delay" class="mr5">
                                    <option v-for="item in 6" :value="item">{{item}}</option>
                                </select>
                                秒
                            </dd>
                        </dl>
                    </div>
                    <div class="mb20">
                        <label>
                            <input type="checkbox" v-model="swiperInit.loop" class="mr3">循环播放
                        </label>
                    </div>
                    <!--<div class="el-block mb20">
                        轮播方向：
                        <label v-for="item in swiperDirectionArr" class="mr10">
                            <input type="radio" v-model="swiperInit.direction" :value="item.value" class="mr5">{{item.label}}
                        </label>
                    </div>-->

                    <dl class="el-block mb10">
                        <dt class="w80">显示列数</dt>
                        <dd>
                            <select v-model="swiperInit.slidesPerView">
                                <option v-for="item in 6" :value="item">{{item}}</option>
                            </select>
                        </dd>
                    </dl>

                    <!--<dl class="el-block mb10">
                        <dt class="w80">切换效果</dt>
                        <dd>
                            <select v-model="swiperInit.effect">
                                <option v-for="item in swiperEffectArr" :value="item.value">{{item.label}}</option>
                            </select>
                        </dd>
                    </dl>-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import Swiper from 'swiper'
  import mixinBseModule from '../common/mixin-base-module'
  import { parseFloor, classPrefix } from '../common/constant'

  export default {
    name    : 'base-module-list-layout',
    mixins  : [mixinBseModule],
    data() {
      return {
        direction          : [
          {label: '单行', value: 'single-row'},
          {label: '多行', value: 'multi-row'},
          {label: '瀑布流', value: 'waterfall'},
          {label: '轮播', value: 'swiper'},
        ],
        swiperDirectionArr : [  //轮播方向
          {label: '水平', value: 'horizontal'},
          {label: '垂直', value: 'vertical'},
        ],
        swiperEffectArr    : [  //切换样式
          {
            label: '默认',
            value: 'slide',
          },
          {
            label: '淡入',
            value: 'fade',
          },
          {
            label: '方块',
            value: 'cube',
          },
          {
            label: '3d流',
            value: 'coverflow',
          },
          {
            label: '3d翻转',
            value: 'flip',
          },
        ],
        swiperPaginationArr: [    //分页器样式
          {
            label: '圆点',
            value: 'bullets',
          },
          {
            label: '分式',
            value: 'fraction',
          },
          {
            label: '进度条',
            value: 'progressbar',
          },
        ],
      }
    },
    methods : {
      modifyNum(e) {
        this.css.width = parseFloor(100 / e.target.value) + '%'
      },
    },
    computed: {
      _static () {
        return this.info.static
      },
      swiperInit() {
        return this._static.swiperInit
      },
      autoplay: {
        get() {
          return !!this.swiperInit.autoplay
        },
        set(val) {
          this.swiperInit.autoplay = val ? {delay: 2000} : val
        },
      },
      delay   : {
        get() {
          return this.swiperInit.autoplay.delay / 1000
        },
        set(val) {
          this.swiperInit.autoplay.delay = val * 1000
        },
      },
    },
  }
</script>
