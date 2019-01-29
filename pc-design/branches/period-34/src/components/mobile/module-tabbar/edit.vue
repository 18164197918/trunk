<template>
    <div>
        <base-module-list-data v-if="assist.a===0" :info="info"></base-module-list-data>
        <base-module-position v-if="assist.a===0" :info="info" :css="selfObj" :notAllow="['minHeight', 'position', 'top', 'left', 'width', 'align']"></base-module-position>
        <base-module-background :css="selfObj"></base-module-background>
        <base-module-boxShadow :css="selfObj"></base-module-boxShadow>
        <base-module-border-radius :css="selfObj"></base-module-border-radius>
        <base-module-border :css="selfObj"></base-module-border>
      <!--<base-module-opacity :css="innerObj"></base-module-opacity>
      <base-module-translate3d :css="innerObj"></base-module-translate3d>
      <base-module-scale :css="innerObj"></base-module-scale>
      <base-module-rotate3d :css="innerObj"></base-module-rotate3d>
      <base-module-skew :css="innerObj"></base-module-skew>-->
        <!--<base-module-margin :css="innerObj"></base-module-margin>-->
        <!--<base-module-lock :info="info"></base-module-lock>-->
    </div>
</template>

<script>
import mixinModuleEdit from '../common/mixin-module-edit'

export default {
  mixins: [mixinModuleEdit],
  computed: {
    children () {
      return this.first.children
    },
    innerGapObj () {
      return this.cssObj.innerGap.css
    }
  }
}
</script>
