<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-lock"></span>
            <div v-if="info.lock.d || info.lock.r" class="dot"></div>
        </div>

        <div class="base-set-box">
            <div class="tit">锁</div>
            <div v-if="info.name !== 'module-container'" class="el-block mb10">
                <label>
                    <input class="mr5" v-model="info.lock.d"  type="checkbox"/>禁止鼠标拖拽
                </label>
            </div>
            <div class="el-block mb10">
                <label>
                    <input class="mr5" v-model="info.lock.r"  type="checkbox"/>禁止鼠标改变大小
                </label>
            </div>
        </div>
    </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'

  export default {
    name      : 'base-module-lock',
    mixins    : [mixinBseModule],
  }
</script>
