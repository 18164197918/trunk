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
  import dataCache from '../common/data-cache'
  import moveMenuInit from './move-menu'
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
      moveMenuInit.call(this)
    },
    methods: {
      selectOne(key) {
        if(!this.dataCache.isMovedLeftBox){
          this.dataCache.leftBoxSelectedIndex = this.dataCache.leftBoxSelectedIndex === key ? -1 : key
        }
      },
    },
  }
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .design-pc {
        .left-box {
            z-index: 10000;
            display: flex;
            //justify-content: center;
            flex-direction: column;

            .pannel-btn {
                margin-bottom: 20px;

                &:nth-last-child(1){
                    margin-bottom: 0;
                }

                .ico {
                    position: relative;
                    z-index: 4;
                    height: 50px;
                    line-height: 50px;
                    border-radius: 50%;
                    background-color: $white;
                    text-align: center;
                    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
                    cursor: pointer;

                    &.on {
                        background-color: $primary;
                        color: $white;
                        box-shadow: none;
                    }

                    span {
                        font-size: 20px;
                    }
                }
                > .wrapper {
                    position: absolute;
                    top: 0;
                    left: $design-pc-left-width / 2;
                    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
                }
            }
        }
    }
</style>
