<template>
  <div v-if="isShowPage" class="design-mobile" :class="{'full-content': keyTab, 'preview': dataCache.isPreview, 'right-box-fold': dataTools.isRightBoxFold}">
    <option-box v-if="dataTools.isShowOption"></option-box>
    <!--<content-ruler v-if="dataTools.isShowRuler"></content-ruler>-->
    <div class="phone-view-bg"></div>
    <content-box></content-box>

    <left-box></left-box>
    <right-box></right-box>
    <top-bar></top-bar>
    <context-menu></context-menu>
    <!--<database></database>-->
  </div>
</template>

<script>
  import $ from 'jquery'
  import leftBox from './left-box/index.vue'
  import rightBox from './right-box/index.vue'
  import topBar from './top-bar/index.vue'
  import optionBox from './option-box/index.vue'
  import dataTools from './common/data-tools'
  import dataSite from './common/data-site'
  import dataPage from './common/data-page'
  import dataCache from './common/data-cache'
  import dataEdit from './common/data-edit'
  import { $DOC, $BODY, TERMINAL_EDIT } from './common/constant-dom'
  import contentBox from './content-box/index.vue'
  import contentRuler from './content-ruler/index.vue'
  import contextMenu from './context-menu/index.vue'
  import keyboardInit from './keyboard-event-outer'
  import mouseInit from './mouse-event-outer'
  //import database from './database/index.vue'

  export default {
    name      : 'edit',
    mounted() {
      this.initData()
      $BODY.addClass(TERMINAL_EDIT)

      setTimeout(() => {
        keyboardInit.call(this)
        mouseInit.call(this)
        $DOC.undelegate('.user-module > a', 'click')
        $DOC.delegate('.user-module > a', 'click', e => {
          if (dataCache.isPreview) {
            let pageId, split = $(e.currentTarget).attr('href').split(LINK_TYPE_SPLIT) || []

            if (split[0] === 'SYS') {
              let t, obj = {}

              split.forEach(item => {
                if ((t = item.split(LINK_NAME_SPLIT)).length === 2) {
                  obj[t[0]] = t[1]
                }
              })

              if (obj.COM_PID && obj.COM_CID) {
                let category = this.dataCache.categoryListEqualObj[obj.COM_CID]

                console.log(category)
                if (pageId = category.bindSingleId) {
                  this.switchPage(pageId, {params: {pageId}})
                }
                else if (pageId = category.bindContentId) {
                  this.switchPage(pageId, {params: {pageId}, query: {cid: obj.COM_CID, pid: obj.COM_PID}})
                }
                else {
                  this.$message.error('该栏目还没有绑定模板，请先进行栏目绑定！')
                }
              }
              else if (obj.COM_CID) {
                if (obj.COM_CID === '0') {
                  pageId = dataSite.get('home_page_index')
                  this.switchPage(pageId, {params: {pageId}})
                }
                else {
                  let category = this.dataCache.categoryListEqualObj[obj.COM_CID]
                  if (pageId = category.bindSingleId) {
                    this.switchPage(pageId, {params: {pageId}})
                  }
                  else if (pageId = category.bindColumnId) {

                    this.switchPage(pageId, {params: {pageId}, query: {cid: obj.COM_CID}})
                  }
                  else {
                    this.$message.error('该新闻还没有绑定模板，请先进行栏目绑定！')
                  }
                }
              }
            }
            else if (split[0] === 'SINGLE_PAGE') {

              this.switchPage(split[1], {params: {pageId: split[1]}})
            }
            else if (split[0] === 'WEB') {
            }
          }
          return false
        })
      })
    },
    data() {
      return {
        keyF      : 0,
        keyTab    : false,
        isShowPage: false,
        dataTools,
        dataPage,
        dataCache,
      }
    },
    methods   : {
      switchPage(id, obj) {
        dataEdit.removeAll()
        dataPage.getServerData(id).then(() => {
          this.$router.push({...obj, name: 'pcEdit'})
        })
      },
      initData() {
        Promise.all([
          dataCache.getColumnData(),
          dataSite.getServerData(this.$route.params.siteId),
          dataPage.getServerData(this.$route.params.pageId),
        ]).then(() => {
          this.isShowPage = true
        })
      },
    },
    beforeDestroy() {
      $BODY.removeClass(TERMINAL_EDIT)
      $DOC.off('keydown.outer')
      $DOC.off('mousedown.outer')
    },
    components: {
      leftBox,
      rightBox,
      topBar,
      optionBox,
      contentBox,
      contentRuler,
      contextMenu,
      //database,
    },
  }
</script>

<style lang="scss">
  @import "../../styles/variables";
  @import "../../styles/design-init-mobile";

  .design-mobile {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #eeeeee;

    /* 子集定位 */
    > div {
      position: absolute;
    }

    .bj-m-content-box {
      left: $design-module-wrapper-width + $design-module-left-width*2 - 10;
      top: $design-pc-top-height;
      padding-top: 60px;
      overflow-y: scroll;
      width: calc(100% - (#{$design-module-wrapper-width} + #{$design-module-left-width} * 2 - 10px) - #{$design-pc-right-width});
      height: calc(100% - #{$design-pc-top-height} - 10px);
      @include scrollbar(0);
    }
    .option-box ~ .bj-m-content-box {
      top: calc(#{$design-pc-top-height} + 27px);
      height: calc(100% - #{$design-pc-top-height} - #{$design-pc-option-height} - 10px);
    }

    &.right-box-fold {
      .bj-m-content-box {
        width: calc(100% - (#{$design-module-wrapper-width} + #{$design-module-left-width} * 2 - 10px) - #{$design-pc-right-fold-width});
      }
      .right-box {
        width: $design-pc-right-fold-width;
      }
      .content-ruler {
        right: $design-pc-right-fold-width;
      }
    }

    &.full-content {
      .top-bar {
        top: -$design-pc-top-height;
      }
      .left-box {
        left: -$design-pc-left-width;
      }
      .right-box {
        right: -$design-pc-right-width;
      }

      &.right-box-fold {
        .right-box {
          right: -40px;
        }
      }

      .option-box {
        top: 0;
      }

      .content-box, .content-ruler {
        top: 0;
        right: 0;
      }

      .option-box ~ .content-ruler {
        top: $design-pc-option-height;
      }
    }
    .phone-view-bg {
      diaplay: none;
    }
    &.preview { //预览模式
      .top-bar, .option-box, .left-box, .right-box, .content-ruler, .module-assist {
        display: none;
      }
      .content-box {
        padding-top: 0 !important;
        top: 0 !important;
        right: 0 !important;
      }
      /*.phone-view-bg{*/
      /*display:block;*/
      /*width:384px;*/
      /*height:770px;*/
      /*position:absolute;*/
      /*left:calc(50% - 192px);*/
      /*top: calc(50% - 385px);*/
      /*background-image:url(../../assets/phone.png);*/
      /*background-size:100% 100%;*/
      /*}*/
      .bj-m-content-wrapper {
        top: 60px;
        height: 667px;
        /*height:770px;*/
        display: flex;
        flex-direction: column;
        &:before {
          content: " ";
          display: block;
          height: 770px;
          width: 384px;
          position: absolute;
          background: url(../../assets/phone.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: -51px;
          left: -4px;
        }
      }
      .bj-m-content-box {
        width: 100%;
        left: 0;
        .content-box {
          /*height:667px;*/
          overflow-y: scroll;
          overflow-x: hidden;
          @include scrollbar(0);
          background-color: #fff;
        }
      }
    }

    /* 顶部工具栏 */
    .top-bar {
      /*z-index: 10001;*/
      left: 0;
      right: 0;
      top: 0;
      height: $design-pc-top-height;
      background-color: $white;
      border-bottom: 1px #eee solid;
    }

    /* 选项工具栏 */
    .option-box {
      z-index: 10000;
      left: 0;
      right: 0;
      top: $design-pc-top-height;
      height: $design-pc-option-height;
      background-color: $white;
      border-bottom: 1px #eee solid;
    }

    /* 刻度尺内容区 */
    .content-ruler {
      left: 0;
      top: $design-pc-top-height;
      right: $design-pc-right-width;
      bottom: 0;
      z-index: 9999;

      pointer-events: none;
    }

    .left-box, .right-box {
      transition: opacity .12s;
    }

    /* 左侧工具栏 */
    .left-box {
      left: 0;
      top: calc(#{$design-pc-top-height});
      height: calc(100% - #{$design-pc-top-height});
    }

    .option-box ~ .bj-m-content-box ~ .left-box {
      top: calc(#{$design-pc-top-height} + 27px);
      height: calc(100% - #{$design-pc-top-height} - 27px);
    }

    /* 右侧工具栏 */
    .right-box {
      z-index: 10100;
      right: 0;
      bottom: 0;
      top: $design-pc-top-height;
      width: $design-pc-right-width;
      background-color: $white;
      border-left: 1px #ddd solid;
      @include scrollbar(0);
    }

    /* 中间内容区 */
    .bj-m-content-wrapper {
      /*perspective: 300px;*/
      left: calc(50% - 187px);
      top: 60px;
      width: 375px;
      position: absolute;
      background: #fff;
      content-box-head, .content-box-inner, .content-box-foot {
        position: relative;
        *[class^="pc-module"] {
          position: absolute;
          perspective: 300px;
        }
        *[class^="pc-container"] {
          position: relative;
        }
      }
      .content-box-head, .content-box-foot {
        min-height: 20px;
      }

    }
    .content-box {
      .content-box-inner {
        min-height: 400px;
      }
    }

    /* 刻度尺后面的内容区 */
    .content-ruler ~ .content-box {
      padding-top: $design-pc-ruler-size;
    }

    /* 在含有选项工具栏时，内容下移 */
    .option-box ~ .content-ruler,
    .option-box ~ .right-box {
      top: $design-pc-top-height + $design-pc-option-height;
    }
    .option-box ~ .content-box {
      /*padding-top: $design-pc-option-height;*/
      &:before {
        top: $design-pc-option-height;
      }
    }
    .option-box ~ .content-ruler ~ .content-box {
      padding-top: $design-pc-ruler-size + $design-pc-option-height;
      &:before {
        top: $design-pc-ruler-size + $design-pc-option-height;
      }
    }

    .clear-setting {
      font-size: 18px;
      font-weight: 400;
      color: #888;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

  }
</style>
