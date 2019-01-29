<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-font"></span>
      <div class="dot"></div>
    </div>

    <div class="base-set-box">
      <div class="tit">字符 <i @click="clearFont" class="iconfont iconfont-clear clear-setting ml5" title="清除样式"></i></div>
      <div>
        <dl class="el-block mb10">
          <dt>字体</dt>
          <base-font-family :css="css" propName="fontFamily"></base-font-family>
        </dl>

        <dl v-if="notAllow.indexOf('fontSize')===-1" class="el-block mb10">
          <dt v-if="info.name==='module-an'" @click="toggleFontMode" class="text-primary c-pointer">字号</dt>
          <dt v-else>字号</dt>
          <template v-if="info.static.anh">
            <div class="label-btn-group fz12">
              <label v-for="item in 6" class="label-btn pl7 pr7">
                <input v-model="info.static.anh" type="radio" :value="'an-h'+ item">
                <span>h{{item}}</span>
              </label>
            </div>
          </template>
          <template v-else>
            <base-range-input :css="css" propName="fontSize" min="12" max="100" unit="px"></base-range-input>
          </template>
        </dl>

        <dl class="el-block mb10">
          <dt>间距</dt>
          <base-range-input :css="css" propName="letterSpacing" min="0" max="100" unit="px"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('lineHeight')===-1" class="el-block mb10">
          <dt>行高</dt>
          <base-range-input :css="css" propName="lineHeight" min="1" max="5" step=".1" unitAlias="倍"></base-range-input>
        </dl>

        <dl class="el-block mb10">
          <dt>缩进</dt>
          <base-range-input :css="css" propName="textIndent" min="0" max="100" unit="px"></base-range-input>
        </dl>

        <dl v-if="notAllow.indexOf('color')===-1" class="el-block mb10">
          <dt>颜色</dt>
          <base-color-picker :css="css" propName="color" type="fontColor" :showHistory="true"></base-color-picker>
        </dl>
        <dl class="el-block mb10">
          <dd>
            <div class="label-btn-group fz18">
              <label v-if="notAllow.indexOf('fontWeight')===-1" class="label-btn" title="加粗">
                <input v-model="css['fontWeight']" type="checkbox" true-value="bold" false-value="normal">
                <span>B</span>
              </label>
              <label v-if="notAllow.indexOf('fontStyle')===-1" class="label-btn" title="倾斜">
                <input v-model="css['fontStyle']" type="checkbox" true-value="italic" false-value="normal">
                <span style="font-style: italic;">I</span>
              </label>
              <label v-if="notAllow.indexOf('textDecoration')===-1" class="label-btn" title="下划线">
                <input v-model="css['textDecoration']" type="checkbox" true-value="underline" false-value="none">
                <span style="text-decoration: underline;">U</span>
              </label>
              <label v-if="notAllow.indexOf('writingMode')===-1" class="label-btn" title="文本排列">
                <input v-model="css['writingMode']" type="checkbox" true-value="tb-rl" false-value="lr-tb">
                <span>M</span>
              </label>
            </div>
          </dd>
        </dl>
        <dl v-if="notAllow.indexOf('justifyContent')===-1" class="el-block mb10">
          <dd>
            <div class="label-btn-group fz12 align-box">
              <label class="label-btn" title="左对齐">
                <input v-model="css['justifyContent']" @input="css.textAlign='left'" type="radio" value="flex-start">
                <span class="iconfont iconfont-align-left"></span>
              </label>
              <label class="label-btn" title="水平居中">
                <input v-model="css['justifyContent']" @input="css.textAlign='center'" type="radio" value="center">
                <span class="iconfont iconfont-align-h-center"></span>
              </label>
              <label class="label-btn" title="右对齐">
                <input v-model="css['justifyContent']" @input="css.textAlign='right'" type="radio" value="flex-end">
                <span class="iconfont iconfont-align-right"></span>
              </label>
              <label class="label-btn" title="顶对齐">
                <input v-model="css['alignItems']" type="radio" value="flex-start">
                <span class="iconfont iconfont-align-top"></span>
              </label>
              <label class="label-btn" title="垂直居中">
                <input v-model="css['alignItems']" type="radio" value="center">
                <span class="iconfont iconfont-align-v-center"></span>
              </label>
              <label class="label-btn" title="底对齐">
                <input v-model="css['alignItems']" type="radio" value="flex-end">
                <span class="iconfont iconfont-align-bottom"></span>
              </label>
            </div>
          </dd>
        </dl>
        <div class="mb5">阴影</div>
        <dl v-if="textShadowArr.length" class="el-block mb5">
          <dd class="grow-1 justify-center">横向</dd>
          <dd class="grow-1 justify-center">纵向</dd>
          <dd class="justify-center">模糊</dd>
          <dd class="w60 grow-0 justify-center">颜色</dd>
          <dd class="w15 grow-0"></dd>
        </dl>
        <dl v-for="(item, key) in textShadowArr" class="el-block mb5">
          <base-range-input :getCb="getCb" :setCb="setCb" :index="[key, 0]" unit="px" min="-100" max="100" hide="range"></base-range-input>
          <base-range-input :getCb="getCb" :setCb="setCb" :index="[key, 1]" unit="px" min="-100" max="100" hide="range"></base-range-input>
          <base-range-input :getCb="getCb" :setCb="setCb" :index="[key, 2]" unit="px" min="-100" max="100" hide="range"></base-range-input>
          <base-color-picker :getCb="getCb" :setCb="setCb" :index="[key, 3]" class="w60 shrink-0" vcPosition="bottom-right"></base-color-picker>
          <span @click="removeOne(key)" class="iconfont iconfont-close1 ml5 remove-one"></span>
        </dl>
        <div v-if="textShadowArr.length <= 10" @click="addOne" class="add-one">新增</div>
      </div>
    </div>
  </div>
</template>

<script>
  import baseFontFamily from '../base-font-family/index.vue'
  import mixinBseModule from '../common/mixin-base-module'

  let initTextShadow = '1px 1px 1px rgba(0,0,0,1)'

  export default {
    name      : 'base-module-font',
    mixins    : [mixinBseModule],
    computed  : {
      textShadowArr() {
        let shadow = this.css.textShadow
        if (!shadow) {
          return []
        }
        else {
          return shadow.split(/,\s/g).map(item => {
            return item.split(/\s/g)
          })
        }
      },
    },
    methods   : {
      toggleFontMode() {
        if(this.info.static.anh === undefined){
          this.$set(this.info.static, 'anh', 'an-h5')
          this.$delete(this.css, 'fontSize')
        }else{
          this.$delete(this.info.static, 'anh')
        }
      },
      getCb(indexArr) {
        let [index1, index2] = indexArr

        if (index2 === 3) {
          return this.textShadowArr[index1][index2] || ''
        }
        else {
          return parseFloat(this.textShadowArr[index1][index2] || '')
        }
      },
      setCb(...args) {
        let [val, [index1, index2]] = args
        if (index2 === 3) {
          this.textShadowArr[index1][index2] = val.rgba_val
        }
        else {
          this.textShadowArr[index1][index2] = val + 'px'
        }

        this.css.textShadow = this.textShadowArr.map(item => item.join(' ')).join(', ')
      },
      addOne() {
        if (this.textShadowArr.length) {
          this.css.textShadow += ', ' + initTextShadow
        }
        else {
          this.$set(this.css, 'textShadow', initTextShadow)
        }
      },
      removeOne(index) {
        this.textShadowArr.splice(index, 1)
        if (this.textShadowArr.length === 0) {
          this.$delete(this.css, 'textShadow')
        }
        else {
          this.css.textShadow = this.textShadowArr.map(item => item.join(' ')).join(', ')
        }
      },
      clearFont() {
        ['fontFamily', 'fontSize', 'fontSize', 'letterSpacing', 'lineHeight', 'textIndent', 'textAlign', 'color', 'fontWeight', 'fontStyle', 'textDecoration', 'writingMode', 'textShadow', 'justifyContent', 'alignItems'].forEach(item => this.$delete(this.css, item))
      },
    },
    components: {
      baseFontFamily,
    },
  }
</script>

<style lang="scss">
  .right-box {
    .label-btn-group.align-box {
      label {
        padding: 2px 10px;

        &:nth-child(3) {
          margin-right: 12px;
        }
      }
    }
  }
</style>
