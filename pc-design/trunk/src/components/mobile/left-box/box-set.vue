<template>
  <div class="wrapper design-module-wrapper" @mousedown="dataCache.colorPickerStatus=false">
    <div class="left1">
      <div v-for="(list, key) in systemList" class="module-btn">
        <span @mouseover="mouseoverEvt(key)" @mouseout="mouseoutEvt" :class="{'on': selectedModuleIndex === key}">
          <i class="iconfont" :class="list.ico"></i>
          <i>{{list.ch}}</i>
        </span>
      </div>
    </div>
    <div class="right system-box">
      <div class="item" :class="{'on': selectedModuleIndex === 0}">
        <div class="common-tit1">
          <h4>通用模块设置</h4>
        </div>
        <div class="web-map">
          <div :class="{'active': dataSite.isShowHeadConfig}" class="web-header bg-gray-l62">
            <el-switch v-model="dataSite.isShowHeadConfig"
                       active-text="头部区域">
            </el-switch>
          </div>
          <div class="main bg-gray-l62"></div>
          <div :class="{'active': dataSite.isShowFootConfig}" class="web-footer bg-gray-l62">
            <el-switch v-model="dataSite.isShowFootConfig"
                       active-text="底部区域">
            </el-switch>
          </div>
          <div :class="{'active': dataSite.isShowTabbarConfig}" class="web-tabbar bg-gray-l62">
            <el-switch v-model="dataSite.isShowTabbarConfig"
                       active-text="服务导航">
            </el-switch>
          </div>
        </div>

        <div class="common-tit1 mt50">
          <h4>常用颜色设置</h4>
        </div>
        <div class="history-color">
          <template v-for="(item, key) in dataTools.historyColorList">
            <base-color-picker :css="dataTools.historyColorList" :propName="key" :vcPosition="colorListPosition[key%5]"></base-color-picker>
          </template>
        </div>

      </div>
      <div class="item" :class="{'on': selectedModuleIndex === 1}">
        <div class="common-tit1">
          <h4>全站样式</h4>
        </div>

        <!--<div class="base-block pr10">
          <div class="base-set-box">
            <div class="tit">安全线</div>
            <dl class="el-block">
              <dt>宽度</dt>
              <dd>
                <base-range-input :css="dataSite" propName="safeLineWidth" min="700" max="1400" step="50" unit="px"></base-range-input>
              </dd>
            </dl>
          </div>
        </div>-->

        <div class="base-block pr10">
          <div class="base-set-box">
            <div class="tit">基础文字 <i @click="initBaseFont" class="iconfont iconfont-clear clear-setting ml5" title="还原默认设置"></i></div>
            <dl v-for="item in fontSetArr" class="el-block mb10">
              <dt>{{item}}</dt>

              <base-range-input :css="cssObj[item].css" propName="fontSize" min="12" max="100" unit="px"></base-range-input>

              <base-color-picker :css="cssObj[item].css" propName="color" class="w40 ml20" vc-position="top-right"></base-color-picker>

              <div class="label-btn-group ml5">
                <label class="label-btn" title="加粗" style="line-height: 24px;">
                  <input v-model="cssObj[item].css.fontWeight" type="checkbox" true-value="bold" false-value="normal">
                  <span>B</span>
                </label>
              </div>
            </dl>

            <!--<dl class="el-block mb10">
              <dt>字体</dt>
              <base-font-family :css="cssObj.body.css" propName="fontFamily"></base-font-family>
            </dl>-->

            <dl class="el-block mb10">
              <dt>行高</dt>
              <base-range-input :css="cssObj.body.css" propName="lineHeight" min="1" max="5" step=".1" unitAlias="倍"></base-range-input>
            </dl>
          </div>
        </div>

        <base-module-background :css="cssObj.body.css"></base-module-background>
        <styles :info="{className: 'body-box', cssObj}" :isTpl="false"></styles>
      </div>

      <div class="item" :class="{'on': selectedModuleIndex === 2}">
        <div class="common-tit1">
          <h4>页面样式</h4>
        </div>

        <!--<base-module-background :css="cssObj.self.css" class="w300"></base-module-background>
        <styles :info="{className: 'body-box', cssObj}" :isTpl="false"></styles>-->
      </div>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import styles from '../../pc&mobile/common/styles.vue'
  import {dataSite, dataPage, dataTools, dataCache} from '../../pc&mobile/common'
  import baseRangeInput from '../../pc&mobile/base-range-input/index.vue'
  import baseFontFamily from '../../pc&mobile/base-font-family/index.vue'
  import baseColorPicker from '../../pc&mobile/base-color-picker/index.vue'
  import baseModuleBackground from '../../pc&mobile/base-module-background/index.vue'

  let stat

  let baseFontInit = {
    h1: { class: 'h1', css: { fontSize: '36px', fontWeight: 'bold' } },
    h2: { class: 'h2', css: { fontSize: '32px', fontWeight: 'bold' } },
    h3: { class: 'h3', css: { fontSize: '26px', fontWeight: 'bold' } },
    h4: { class: 'h4', css: { fontSize: '20px', fontWeight: 'normal' } },
    h5: { class: 'h5', css: { fontSize: '16px', fontWeight: 'normal' } },
    h6: { class: 'h6', css: { fontSize: '12px', fontWeight: 'normal' } },
    body: { class: '', css: { color: 'rgba(85,85,85,1)', fontSize: '14px', fontFamily: '微软雅黑', lineHeight: '1.5' } }
  }

  export default {
    data () {
      return {
        dataTools,
        dataCache,
        dataSite: dataSite.get(),
        selectedModuleIndex: 1,
        fontSetArr: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body'],
        systemList: [
          { ico: 'iconfont-setting', ch: '系统' },
          { ico: 'iconfont-wangzhan', ch: '全站' }
          // {ico: '', ch: '页面设置'},
        ],
        colorListPosition: ['bottom-left', 'bottom-left', 'bottom-center', 'bottom-right', 'bottom-right']
      }
    },
    computed: {
      cssObj () {
        return this.dataSite.cssObj
      }
    },
    methods: {
      initBaseFont () {
        this.dataSite.cssObj = $.extend(true, {}, baseFontInit)
      },
      mouseoverEvt (key) {
        clearTimeout(stat)
        stat = setTimeout(() => {
          this.selectedModuleIndex = key
        }, 200)
      },
      mouseoutEvt () {
        clearTimeout(stat)
      }
    },
    components: {
      styles,
      baseFontFamily,
      baseRangeInput,
      baseColorPicker,
      baseModuleBackground
    }
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .system-box {
    overflow-y: scroll;
    @include scrollbar(0);

    .base-iconfont {
      display: none;
    }
    .item {
      display: none;
      &.on {
        display: block;
        width: 100%;
      }
    }
    .web-map {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
      .web-header, .web-footer, .web-tabbar {
        height: 90px;
        margin: 5px auto;
        cursor: pointer;
        text-align: center;
        line-height: 90px;
        &.active {
          background: lighten($primary, 20%);
        }
      }
      .web-tabbar{
        height: 50px;
        line-height: 50px;
      }
      .main {
        height: 220px;
        cursor: no-drop
      }
    }

    .history-color{
      display: flex;
      flex-wrap: wrap;

      dd{
        margin:0 4% 20px 4%;
        width: 12%;
        height: 30px;
        border-radius: 3px;
      }
    }
  }
</style>
