<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-opacity"></span>
          <div v-if="css.opacity" class="dot"></div>
        </div>

        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>透明度
                </label>
            </div>

            <div v-if="checkTitleVal">
                <dl class="el-block mb10">
                    <dt>透明度</dt>
                    <base-range-input :css="css" propName="opacity" min="0" max="1" step=".01" unit=""></base-range-input>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'

  export default {
    name      : 'base-module-opacity',
    mixins    : [mixinBseModule],
    computed: {
      checkTitleVal   : {
        get() {
          return this.css.opacity !== undefined
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'opacity', '1')
          }
          else {
            this.$delete(this.css, 'opacity')
          }
        },
      },
    }
  }
</script>
