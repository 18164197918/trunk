<template>
    <div class="left-box">
        <div class="wrapper-btn">
            <div v-for="(item, key) in menuList" class="pannel-btn" >
                <div @click="selectOne(key)"  :class="{'on': dataCache.leftBoxSelectedIndex===key}" class="ico left-menu-icon">
                    <span :class="['iconfont-' + item.ico]" class="iconfont left-menu-span"></span>
                </div>
                <component v-show="dataCache.leftBoxSelectedIndex===key" :is="item.comp" @click.stop></component>
            </div>
        </div>
    </div>
</template>

<script>
  //import webSeo from './web-seo.vue'
  import boxSet from './box-set.vue'
  import addBox from './add-box/index.vue'
  import boxCategory from './box-category.vue'
  import {dataCache} from '../../pc&mobile/common'
  import anList from '../module-tpl-box/base/an/list'


  export default {
    name   : 'left-box-index',
    data() {
      return {
        dataCache,
        menuList: [
          {ico: 'module', comp: addBox},
          {ico: 'fenlei', comp: boxCategory},
          {ico: 'set', comp: boxSet},
          //{ico: 'rocket', comp: webSeo},
        ],
      }
    },
    mounted(){
      this.dataCache.leftBoxSelectedIndex = 0
    },
    methods: {
      selectOne(key) {
        if(!this.dataCache.isMovedLeftBox){
          //this.dataCache.leftBoxSelectedIndex = this.dataCache.leftBoxSelectedIndex === key ? -1 : key
          this.dataCache.leftBoxSelectedIndex = key
        }
      },
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .design-mobile {
    .left-box {
      z-index: 10000;
      display: flex;
      width: $design-module-wrapper-width + $design-module-left-width*2 - 10;
      flex-direction: column;
      .wrapper-btn {
        display: flex;
      }
      .pannel-btn {
        margin-bottom: 20px;
        width: 33.3333%;

        &:nth-last-child(1) {
          margin-bottom: 0;
        }

        .ico {
          position: relative;
          z-index: 4;
          height: 45px;
          line-height: 45px;
          background-color: $white;
          text-align: center;
          /*box-shadow: 0 0 30px rgba(0, 0, 0, .15);*/
          border-bottom: 1px solid #eaeaea;
          border-right: 1px solid #eaeaea;
          cursor: pointer;
          &.on {
            background-color: #689dff;
            color: $white;
            box-shadow: none;
          }
          span {
            font-size: 20px;
          }
        }
        &:last-child {
          .ico {
            border-right: none;
          }
        }
        > .wrapper {
          position: absolute;
          top: 45px;
          left: 0;
        }
      }
    }
  }
</style>
