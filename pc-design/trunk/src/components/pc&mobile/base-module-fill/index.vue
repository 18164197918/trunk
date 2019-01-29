<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-fill"></span>
        </div>

        <div class="base-set-box">

            <div class="tit">填充</div>

            <dl class="el-block mb10">
                <dt>模式</dt>
                <dd class="label-btn-group mr20">
                    <label class="label-btn" v-for="(item, key) in SVG_WITCH_ONE">
                        <input v-model="info.static.witch" type="radio" :value="key">
                        <span>{{item.label}}</span>
                    </label>
                </dd>
            </dl>

            <dl v-if="info.static.witch===0" class="el-block mb20">
                <dt></dt>
                <base-color-picker :css="css" propName="fill" vcPosition="top-left" :showHistory="true"></base-color-picker>
            </dl>
            <!--<dl v-else class="el-block mb20">
                <dt></dt>
                <dd><bg-img-box :path="[info.static, 'src']"></bg-img-box></dd>
            </dl>-->

            <dl class="el-block mb10">
                <dt>比例</dt>
                <dd class="label-btn-group mr20">
                    <label class="label-btn" v-for="(item, key) in SVG_ASPECT_RATIO">
                        <input v-model="info.static.ratio" type="radio" :value="key">
                        <span>{{item.label}}</span>
                    </label>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
  import { SVG_ASPECT_RATIO, SVG_WITCH_ONE } from '../common/constant'
  import mixinBseModule from '../common/mixin-base-module'

  export default {
    name      : 'base-module-fill',
    mixins    : [mixinBseModule],
    data() {
      return {
        SVG_ASPECT_RATIO,
        SVG_WITCH_ONE
      }
    },
  }
</script>
