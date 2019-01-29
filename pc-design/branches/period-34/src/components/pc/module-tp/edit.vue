<template>
    <div>
        <div class="diff-state-tab">
            <span @click="assist.a=0" :class="{'active': assist.a===0}">默认</span>
            <span @click="assist.a=1" :class="{'active': assist.a===1}">选中元素</span>
            <span v-if="first.mode==='children-group'||first.mode==='children-list'" @click="assist.a=2" :class="{'active': assist.a===2}">选中组</span>
            <span @click="assist.a=3" :class="{'active': assist.a===3}">过渡</span>
        </div>

        <base-module-transition v-if="assist.a===3" :css="cssObj.inner"></base-module-transition>

        <div v-else>
            <base-module-data :first="first"></base-module-data>
            <base-module-position v-if="assist.a===0" :info="info" :css="selfObj" :notAllow="['minHeight', 'position']"></base-module-position>
            <base-module-background :css="innerObj"></base-module-background>
            <base-module-boxShadow :css="innerObj"></base-module-boxShadow>
            <base-module-border-radius :css="innerObj"></base-module-border-radius>
            <base-module-border :css="innerObj"></base-module-border>
            <base-module-translate3d :css="innerObj"></base-module-translate3d>
            <base-module-scale :css="innerObj"></base-module-scale>
            <base-module-rotate3d :css="innerObj"></base-module-rotate3d>
            <base-module-skew :css="innerObj"></base-module-skew>
            <base-module-opacity :css="innerObj"></base-module-opacity>
            <base-module-lock :info="info"></base-module-lock>
        </div>
    </div>
</template>

<script>
  import mixinModuleEdit from '../common/mixin-module-edit'

  export default {
    mixins: [mixinModuleEdit],
  }
</script>
