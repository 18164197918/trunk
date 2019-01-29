<template>
    <div>
        <base-module-menu-data v-if="assist.a===0" :info="info"></base-module-menu-data>
        <base-module-position v-if="assist.a===0" :info="info" :css="selfObj" :notAllow="['minHeight', 'position']"></base-module-position>
        <base-module-background :css="innerObj"></base-module-background>
        <base-module-boxShadow :css="innerObj"></base-module-boxShadow>
        <base-module-border-radius :css="innerObj"></base-module-border-radius>
        <base-module-border :css="innerObj"></base-module-border>
        <base-module-opacity :css="innerObj"></base-module-opacity>
        <!--<base-module-translate3d :css="innerObj"></base-module-translate3d>
        <base-module-scale :css="innerObj"></base-module-scale>
        <base-module-rotate3d :css="innerObj"></base-module-rotate3d>
        <base-module-skew :css="innerObj"></base-module-skew>-->
        <!--<base-module-margin :css="innerObj"></base-module-margin>-->
        <base-module-lock :info="info"></base-module-lock>
    </div>
</template>

<script>
  import mixinModuleEdit from '../common/mixin-module-edit'

  export default {
    mixins    : [mixinModuleEdit],
    computed: {
      innerGapObj () {
        return this.cssObj.innerGap.css
      }
    },
  }
</script>
