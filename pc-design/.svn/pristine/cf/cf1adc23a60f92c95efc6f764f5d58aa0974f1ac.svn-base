<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-database"></span>
        </div>

        <div class="base-set-box">
            <div class="tit">数据</div>
            <dl class="el-block mb20">
                <label class="mr20"><input v-model="info.static.type" type="radio" value="main" class="mr3">主导航</label>
                <label><input v-model="info.static.type" type="radio" value="sub" class="mr3">侧导航</label>
            </dl>

            <dl v-if="info.static.type==='main'" class="el-block mt10">
                <label><input v-model="info.static.isShowHome" type="checkbox" class="mr3">是否显示首页</label>
            </dl>

            <dl class="el-block mt20">
                <label><input v-model="info.static.isShowSub" type="checkbox" class="mr3">是否显示子导航</label>
            </dl>
        </div>
    </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'

  export default {
    name    : 'base-module-data',
    mixins  : [mixinBseModule],
  }
</script>
