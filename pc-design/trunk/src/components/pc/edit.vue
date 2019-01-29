<template>
  <div v-if="isShowPage" class="design-pc" :class="{'full-content': keyTab, 'preview': dataCache.isPreview, 'right-box-fold': dataTools.isRightBoxFold}">
    <option-box v-if="dataTools.isShowOption"></option-box>
    <content-ruler v-if="dataTools.isShowRuler"></content-ruler>
    <left-box></left-box>
    <content-box></content-box>
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
  import topBar from '../pc&mobile/top-bar/index.vue'
  import optionBox from '../pc&mobile/option-box/index.vue'
  import contentBox from '../pc&mobile/content-box/index.vue'
  import contentRuler from '../pc&mobile/content-ruler/index.vue'
  import contextMenu from '../pc&mobile/context-menu/index.vue'

  import { dataTools, dataSite, dataPage, dataCache, dataEdit, constant, constantDom } from '../pc&mobile/common'

  const {$DOC, $BODY, TERMINAL_EDIT}       = constantDom
  const {LINK_TYPE_SPLIT, LINK_NAME_SPLIT} = constant

  import keyboardInit from '../pc&mobile/keyboard-event-outer'
  import mouseInit from '../pc&mobile/mouse-event-outer'
  //import database from './database/index.vue'


  export default {
    name      : 'edit',
    mounted() {
      this.initData()
      $BODY.addClass(TERMINAL_EDIT(this.$route))

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
  @import "../../styles/design-init-pc";

  .design-pc {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    /* 子集定位 */
    > div {
      position: absolute;
    }

    &.right-box-fold {
      .right-box {
        width: $design-pc-right-fold-width;
      }
      .content-box {
        right: $design-pc-right-fold-width;
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

    &.preview {
      .top-bar, .option-box, .left-box, .right-box, .content-ruler, .module-assist {
        display: none;
      }
      .content-box {
        padding-top: 0 !important;
        top: 0 !important;
        right: 0 !important;
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
      left: 5px;
      //top: calc(40% - #{$design-pc-left-height / 2});
      top: 120px;
      width: $design-pc-left-width;
      height: $design-pc-left-height;
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
    .content-box {
      left: 0;
      top: $design-pc-top-height;
      right: $design-pc-right-width;
      bottom: 0;
      overflow-y: scroll;
      @include scrollbar(0);

      .content-box-head, .content-box-inner, .content-box-foot {
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
      .content-box-inner {
        min-height: 80%;
      }
    }

    /* 刻度尺后面的内容区 */
    .content-ruler ~ .content-box {
      padding-top: $design-pc-ruler-size;
    }

    /*工具栏阴影*/
    /*.content-box.bj-body-box {
        &:before {
            content: '';
            width: 100%;
            height: 10px;
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1) inset;
        }
    }
    .content-ruler ~ .content-box {
        &:before {
            top: $design-pc-ruler-size;
        }
    }*/

    /* 在含有选项工具栏时，内容下移 */
    .option-box ~ .content-ruler,
    .option-box ~ .right-box {
      top: $design-pc-top-height + $design-pc-option-height;
    }
    .option-box ~ .content-box {
      padding-top: $design-pc-option-height;
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
