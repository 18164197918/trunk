<template>
  <div class="wrapper design-module-wrapper">

    <div class="left left1">
      <template v-for="(list, key) in tplList">
        <div :key="key" v-if="list.isShow" class="module-btn">
          <span @click="clickEvt(1, key)" @mouseover="mouseoverEvt(1, key)" @mouseout="mouseoutEvt(1)" :class="{'on': selectedModuleIndex1 === key}">{{list.ch}}</span>
        </div>
      </template>
    </div>
    <div class="left left2">
      <template v-for="(list, key) in selectedModule1List">
        <div :key="key" v-if="list.isShow" class="module-btn">
          <span @click="clickEvt(2, key)" @mouseover="mouseoverEvt(2, key)" @mouseout="mouseoutEvt(2)" :class="{'on': selectedModuleIndex2 === key}">{{list.ch}}</span>
        </div>
      </template>
    </div>

    <div class="right">

      <div class="module-tpl-box">
        <template v-if="selectedModule2List.imgList">
          <div class="user-module module-img-sample" v-for="(item, index) in selectedModule2List.imgList" :key="index">
            <img :src="item" alt="">
          </div>
        </template>
        <template v-else>
          <component v-for="item in selectedModule2List.list" :is="item.info.name" :self="item" :info="item.info" :key="item.info.className" :class="item.info.className | className">
            <module-assist :info="item.info" :isTpl="true" :self="item" :key="item.info.className"></module-assist>
          </component>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  import createDomInit from './create-content-dom'
  import tplList from '../../module-tpl-box/tpl-list'
  import moduleAssist from '../../common/module-assist.vue'
  import filterClassName from '../../common/filter-className'

  //console.log(tplList)

  const cp = {}
  const rc = require.context('../../', true, /module-[\w-]+\/tpl\.vue$/)
  rc.keys().forEach(fileName => {
    cp[fileName.match(/module-[\w-]+/)[0]] = rc(fileName).default
  })

  let stat

  export default {
    mixins    : [filterClassName],
    mounted() {
      createDomInit.call(this)
    },
    data() {
      return {
        tplList,
        selectedModuleIndex1: 0,
        selectedModuleIndex2: 0,
      }
    },
    computed  : {
      selectedModule1List() {
        return this.tplList[this.selectedModuleIndex1].list
      },
      selectedModule2List() {
        return this.selectedModule1List[this.selectedModuleIndex2]
      },
    },
    methods   : {
      clickEvt(level, key) {
        clearTimeout(stat)
        level === 1 && (this.selectedModuleIndex2 = 0)
        this['selectedModuleIndex' + level] = key
      },
      mouseoverEvt(level, key) {
        clearTimeout(stat)
        stat = setTimeout(() => {
          level === 1 && (this.selectedModuleIndex2 = 0)
          this['selectedModuleIndex' + level] = key
        }, 200)
      },
      mouseoutEvt() {
        clearTimeout(stat)
      },
    },
    components: {
      moduleAssist,
      ...cp
    },

  }
</script>

<style lang="scss">
  @import "../../../../styles/variables";

  $module-wrapper-space: 7px;
  $design-module-left-width: 90px;
  $design-module-wrapper-width: 450px;
  $design-module-wrapper-height: 500px;

  .add-box-fade-enter-active {
    transition: opacity .12s;
  }

  .add-box-fade-leave-active {
    transition: opacity .03s;
  }

  .add-box-fade-enter,
  .add-box-fade-leave-to {
    opacity: 0;
  }

  .design-module-wrapper {
    display: flex;
    /*width: $design-module-wrapper-width;*/
    height: 100%;
    //height: $design-module-wrapper-height;

    .left1 {
      padding: $module-wrapper-space 0;
      width: $design-module-left-width;
      padding-left: 30px;
      background-color: $primary;
      flex-shrink: 0;
      font-size: 14px;
     /* border-top-left-radius: $module-wrapper-space;
      border-bottom-left-radius: $module-wrapper-space;*/
      box-shadow: 3px 0 5px rgba(0, 0, 0, .04);
      z-index: 2;

      .module-btn {
        color: $white;
        span {
          display: block;
          padding: 5px 0;
          cursor: pointer;
          transition: background-color .2s;
          color: lighten($primary, 20%);
          text-align: center;

          &.on, &:hover {
            color: $white;
          }
        }
      }
    }
    .left2 {
      padding: $module-wrapper-space 0;
      width: $design-module-left-width - 10;
      background-color: darken($white, 3%);
      flex-shrink: 0;
      font-size: 13px;

      .module-btn {
        color: $gray;
        span {
          display: block;
          padding: 8px 0;
          cursor: pointer;
          transition: background-color .2s;
          color: $gray;
          text-align: center;

          &.on, &:hover {
            color: $primary;
          }
        }
      }
    }
    .right {
      flex-grow: 1;
      display: flex;
      width: 350px;
      background-color: $white;

      > * {
        margin: 10px;
      }

      .module-tpl-box {
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        justify-content: space-around;
        align-content: flex-start;
        @include scrollbar(0);

        > * {
          margin: 10px;
        }

        > .user-module {
          position: relative;
        }
      }

      .tpl-item {
        position: relative;
        width: 30%;
        /*width: 100%;
        height: 100%;
        flex-grow: 1;*/
        flex-shrink: 0;
        /*display: flex;
        flex-wrap: wrap;
        padding: $module-wrapper-space;
        border-top-right-radius: $module-wrapper-space;
        border-bottom-right-radius: $module-wrapper-space;
        align-content: flex-start;
        justify-content: space-evenly;
        overflow-y: scroll;
        margin: 0;
        @include scrollbar(0);
        > * {
          margin: 10px;
        }*/
      }

      .module-img-sample {
        width: 100%;
        align-self: flex-start;

        img {
          width: 100%;
        }
      }

      .color-list {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #ebebeb;

        li {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
          transition: all .2s;

          &:hover, &.on {
            border-radius: 5px;
            transform: rotate(45deg);
          }
        }
      }

      .pc-module-group {
        > .inner-group > .user-module {
          position: absolute;
          pointer-events: none;
        }
      }
    }
  }
</style>
