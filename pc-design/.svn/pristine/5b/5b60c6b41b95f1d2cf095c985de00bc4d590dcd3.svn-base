<template>
    <div class="pc-module-list user-module" :class="{'edit-sub-module': info.assist && info.assist.m===1}">
        <div class="swiper-box" :class="info.static.direction">
            <div class="wrapper" :style="{'column-count': info.static.direction==='waterfall' ? info.static.columnCount : 'auto'}">
                <div v-for="(data, key) in dataList" class="inner-gap">
                    <div class="inner-group">
                        <component
                                v-for="(item, index) in self.children"
                                :is="item.info.name"
                                :parents="[self].concat(parents)"
                                :self="item"
                                :info="item.info"
                                :dataItem="data"
                                :dataLink="(info.static.dataOrigin === 1 || info.static.dataOrigin === 2) ? ('SYS:::COM_PID=' + data.index + ':::COM_CID=' + data.category_index) : ''"
                                :indexKey="key"
                                :class="item.info.className | className"
                                :key="item.info.className">
                            <module-assist
                                    mode="children-list"
                                    :parents="[self].concat(parents)"
                                    :notFirstLock="key!==0"
                                    :self="item"
                                    :info="item.info"
                                    :dataItem="data"
                                    :indexKey="key"
                                    :key="item.info.className">
                            </module-assist>
                        </component>
                    </div>
                </div>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import dataCache from '../common/data-cache'
  import mixinModule from '../common/mixin-module'
  import moduleAssist from '../common/module-assist.vue'
  import filterClassName from '../common/filter-className'
  import { ALBUM_PREFIX, classPrefix } from '../common/constant'
  import { packModule } from '../common/package-module'

  let _swiper

  function initSwiper(className, swiperInit) {
    _swiper = new Swiper('.' + classPrefix + className + '> .swiper-box', swiperInit)
  }

  export default {
    name      : 'module-list-tpl',
    mixins    : [mixinModule, filterClassName],
    mounted() {
      if (this.info.static && this.info.static.direction === 'swiper') {
        initSwiper.call(this, this.info.className, this.info.static.swiperInit)
      }
    },
    data () {
      return {
        dataCache
      }
    },
    computed  : {
      dataList() {
        let _static = this.info.static

        /**
         * dataOrigin类型
         *
         * 0 静态数据列表
         * 1 动态数据列表
         * 2 列表页模板数据列表
         * 3 详情页相册数据列表
         */

        if (_static.dataOrigin === 0) {
          return _static.dataList
        }
        else if (_static.dataOrigin === 1 && _static.categoryId) {
          return dataCache.getContentList({id: _static.categoryId}).data.slice(0, _static.showDataNum || 10)
        }
        else if (_static.dataOrigin === 2 && this.$route.query.cid) {
          return dataCache.getContentList({id: this.$route.query.cid}).data
        }else if (_static.dataOrigin === 3 && this.dataCache.contentList[ALBUM_PREFIX + this.$route.query.pid]) {
          return dataCache.getContentList({id: ALBUM_PREFIX + this.$route.query.pid}).data
        }else{
          return _static.dataList
        }
      },
    },
    beforeDestroy () {
      _swiper && _swiper.destroy()
    },
    watch     : {
      'dataCache.isPreview':  function(newVal){
        if (this.info.static.direction === 'swiper') {
          this.info.static.swiperInit.allowTouchMove = newVal
        }
      },
      'info.static.swiperInit': {
        handler: function () {
          if (this.info.static.direction !== 'swiper') {
            return
          }

          _swiper && _swiper.destroy()

          setTimeout(() => {
            initSwiper.call(this, this.info.className, this.info.static.swiperInit)
          })
        },
        deep   : true,
      },

      'info.static.direction': function (newVal, oldVal) {
        if (newVal === 'swiper') {
          initSwiper.call(this, this.info.className, this.info.static.swiperInit)
        }
        else if (oldVal === 'swiper') {
          _swiper && _swiper.destroy()
        }
      },

      dataList: function () {
        if (this.info.static.direction === 'swiper' && this.dataList.length > 0) {
          this.$nextTick(() => {
            _swiper.update()
          })
        }
      },
    },
    components: {
      moduleAssist,
      ...packModule()
    },
  }
</script>
