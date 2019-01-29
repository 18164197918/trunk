<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">
        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-database"></span>
        </div>
        <div class="base-set-box">
            <div class="tit">
                <label>位置信息</label>
            </div>
            <div class="ml10">
                <div class="el-block mb10">
                    <label class="w100p">
                        <p>坐标点</p>
                        <input v-model="info.static.coord" class="mr5 mt5" type="text"/>
                    </label>
                    <p class="mt5">坐标点可通过<a href="http://lbs.qq.com/tool/getpoint/index.html" target="_blank" class="text-primary">坐标拾取器</a>获取</p>
                </div>
                <div class="el-block mb10">
                    <label class="w100p">
                        <p>名称</p>
                        <input v-model="info.static.title" class="mr5 mt5" type="text"/>
                    </label>
                </div>
                <div class="el-block mb10">
                    <label class="w100p">
                        <p>地址</p>
                        <input v-model="info.static.addr" class="mr5 mt5" type="text"/>
                    </label>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import mixinBseModule from '../common/mixin-base-module'

export default {
  name: 'base-module-data',
  mixins: [mixinBseModule]
}
</script>
