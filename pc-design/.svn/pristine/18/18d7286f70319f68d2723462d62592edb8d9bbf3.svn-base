<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-database"></span>
        </div>

        <div class="base-set-box">
            <div class="tit">数据</div>
            <dl class="mb20">
                <label>
                    <input v-model="_static.isShowEnds" type="checkbox" class="mr3">
                    是否显示 【首页/尾页】
                </label>
                <dl v-if="_static.isShowEnds" class="d-flex mt10">
                    <input v-model="_static.firstText" type="text" placeholder="首页" class="mr10">
                    <input v-model="_static.lastText" type="text" placeholder="尾页">
                </dl>
            </dl>
            <dl class="mb20">
                <label>
                    <input v-model="_static.isShowTurn" type="checkbox" class="mr3">
                    是否显示 【上一页/下一页】
                </label>
                <div v-if="_static.isShowTurn" class="d-flex mt10">
                    <input v-model="_static.prevText" type="text" placeholder="上一页" class="mr10">
                    <input v-model="_static.nextText" type="text" placeholder="下一页">
                </div>
            </dl>
            <dl class="mb20">
                <label>
                    <input v-model="_static.isShowNum" type="checkbox" class="mr3">
                    是否显示 【页码数】
                </label>
            </dl>
        </div>
    </div>
</template>

<script>
import mixinBseModule from '../common/mixin-base-module'

export default {
  name: 'base-module-data',
  mixins: [mixinBseModule],
  computed: {
    _static () {
      return this.info.static
    }
  }
}
</script>
