<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-move"></span>
      <div class="dot"></div>
    </div>

    <div class="base-set-box">

      <div class="tit">位置与尺寸</div>

      <div>
        <dl v-if="notAllow.indexOf('left')===-1" class="el-block mb10">
          <dt>水平</dt>
          <base-range-input @input="inputCallback" :css="css" propName="left" :unitCb="unitCb"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('top')===-1" class="el-block mb10">
          <dt>垂直</dt>
          <base-range-input @input="inputCallback" :css="css" propName="top" :unitCb="isRelative ? null : unitCb"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('width')===-1" class="el-block mb10">
          <dt>宽度</dt>
          <base-range-input :css="css" propName="width" :unitCb="unitCb"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('height')===-1" class="el-block mb10">
          <dt>高度</dt>
          <base-range-input :css="css" propName="height" :unitCb="unitCb"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('minHeight')===-1" class="el-block mb10">
          <dt>最小高</dt>
          <base-range-input :css="css" propName="minHeight" min="30" max="1000" :unitCb="unitCb"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('align')===-1" class="el-block mt20 mb10">
          <dd>
            <div class="full">
                <span v-for="(list, index) in FULL_POSITION_BOX"
                      @click="fullPosition(index)"
                      :class="{'on': positionOn[index], 'disabled': positionDisabled[index]}"
                      :key="index"
                      :title="list.name">
                  <i :class="list.icon" class="iconfont fz18"></i>
                </span>
            </div>
          </dd>
        </dl>

        <dl v-if="notAllow.indexOf('position')===-1" class="el-block mt20 mb10">
          <dt>定位</dt>
          <dd>
            <div class="label-btn-group fz12">
              <label class="label-btn">
                <input v-model="css.position" @change="modifyPosition('relative')" type="radio" value="relative !important">
                <span>相对</span>
              </label>
              <label class="label-btn">
                <input v-model="css.position" @change="modifyPosition('absolute')" type="radio" value="absolute !important">
                <span>绝对</span>
              </label>
            </div>
          </dd>
        </dl>

        <dl v-if="info.name==='module-tp'" class="el-block mt20 mb10">
          <dt>图片</dt>
          <dd>
            <div class="label-btn-group fz12">
              <label class="label-btn">
                <input v-model="info.cssObj.inner.css['objectFit']" type="radio" value="fill">
                <span>填充</span>
              </label>
              <label class="label-btn">
                <input v-model="info.cssObj.inner.css['objectFit']" type="radio" value="cover">
                <span>裁切</span>
              </label>
              <label class="label-btn">
                <input v-model="info.cssObj.inner.css['objectFit']" type="radio" value="contain">
                <span>包含</span>
              </label>
            </div>
          </dd>
        </dl>

      </div>
    </div>
  </div>
</template>


<script>
  import $ from 'jquery'
  import mixinBseModule from '../common/mixin-base-module'
  import { convertUnit, UNIT_REG, FULL_POSITION_BOX, parseFloor } from '../common/constant'
  import { CONTAINER_WRAPPER } from '../common/constant-dom'
  import { resizeRelativePositionVertical } from '../common/data-methods'

  const ZERO    = '0%',
        HUNDRED = '100%',
        CALC    = 'calc'

  export default {
    name    : 'base-module-position',
    mixins  : [mixinBseModule],
    data() {
      return {
        FULL_POSITION_BOX,
      }
    },
    computed: {
      isRelative() {
        return this.css.position && this.css.position.indexOf('relative') !== -1
      },
      positionOn() {
        return this.FULL_POSITION_BOX.map(item => (this.css[item.prop] || '').indexOf(item.onVal) === 0)
      },
      positionDisabled () {
        return this.FULL_POSITION_BOX.map(item => this.info.name === 'module-list' && item.listDisabled)
      },
    },
    methods : {
      inputCallback(obj) {
        //针对水平和垂直位移时 initial值的处理
        if(obj.unit === ''){
          this.css[obj.propName] = obj.value + 'px'
          this.$delete(this.css, 'right')
          this.$delete(this.css, 'bottom')
        }

        //针对相对定位底部补差值处理
        if (obj.propName === 'top' && this.isRelative) {
          this.css.marginBottom = '' + obj.value + obj.unit
        }
      },
      unitCb(css, propName) {
        let u = css[propName].match(UNIT_REG)[2] === 'px' ? '%' : 'px'

        if (this.info.assist.pElStyle) {
          css[propName] = convertUnit({
            css,
            props   : {[propName]: u},
            pElStyle: this.info.assist.pElStyle,
          })[propName + 'After']
        }
      },
      modifyPosition(position) {
        if (position === 'relative') {
          if (this.css.top.indexOf('%') !== -1) {
            this.unitCb(this.css, 'top')
          }
          this.$set(this.css, 'marginBottom', this.css.top || '0px')
        }
        else {
          this.$delete(this.css, 'marginBottom')
        }
      },
      fullPosition(index) {
        let match

        if(this.info.name === 'module-list' && this.positionDisabled[index]){
          return
        }

        switch (index) {
          case 0:   //水平铺满
            this.css.left  = ZERO
            this.css.width = HUNDRED
            break

          case 1:   //垂直铺满
            this.css.top    = ZERO
            this.css.height = HUNDRED
            break

          case 2:   //上对齐
            this.css.top = ZERO
            this.$delete(this.css, 'bottom')
            break

          case 3:   //垂直居中
            if (!(match = (this.css.height || '').match(UNIT_REG))) {
              return
            }
            if (match[2] === 'px') {
              this.css.top = CALC + '(50% - ' + parseFloor(match[1] / 2) + 'px)'
            }
            else if (match[2] === '%') {
              //this.css.top = parseFloor((100 - match[1]) / 2) + '%'
              this.css.top = CALC + '(50% - ' + parseFloor(match[1] / 2) + '%)'
            }
            this.$delete(this.css, 'bottom')
            break

          case 4:   //下对齐
            //this.css.top    = INITIAL
            //this.css.bottom = ZERO
            if (!(match = (this.css.height || '').match(UNIT_REG))) {
              return
            }
            if (match[2] === 'px') {
              this.css.top = CALC + '(100% - ' + parseFloor(match[1] / 2) + 'px)'
            }
            else if (match[2] === '%') {
              this.css.top = CALC + '(100% - ' + parseFloor(match[1]) + '%)'
            }
            this.$delete(this.css, 'bottom')
            break

          case 5:   //左对齐
            this.css.left = ZERO
            this.$delete(this.css, 'right')
            break

          case 6:   //水平居中
            if (!(match = (this.css.width || '').match(UNIT_REG))) {
              return
            }
            if (match[2] === 'px') {
              this.css.left = CALC + '(50% - ' + parseFloor(match[1] / 2) + 'px)'
            }
            else if (match[2] === '%') {
              //this.css.left = parseFloor((100 - match[1]) / 2) + '%'
              this.css.left = CALC + '(50% - ' + parseFloor(match[1] / 2) + '%)'
            }
            this.$delete(this.css, 'right')
            break

          case 7:   //右对齐
            //this.css.left  = INITIAL
            //this.css.right = ZERO
            if (!(match = (this.css.width || '').match(UNIT_REG))) {
              return
            }
            if (match[2] === 'px') {
              this.css.left = CALC + '(100% - ' + parseFloor(match[1]) + 'px)'
            }
            else if (match[2] === '%') {
              //this.css.left = parseFloor((100 - match[1]) / 2) + '%'
              this.css.left = CALC + '(100% - ' + parseFloor(match[1]) + '%)'
            }
            break

          default:
            break
        }
      },
    },
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .full {
    display: flex;
    width: 100%;
    span {
      text-align: center;
      flex-grow: 1;
      cursor: pointer;
      margin-right: -1px;
      border: 1px #ddd solid;
      display: inline-block;
      color: lighten($gray, 10%);

      &.on, &:hover {
        color: darken($primary, 15%);
      }

      &.disabled{
        color: lighten($gray, 50%);

        &:hover {
          color: lighten($gray, 50%);
          cursor: not-allowed;
        }
      }
    }
  }
</style>
