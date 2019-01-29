<template>
    <div>
        <base-module-list-data :info="info" :children="children" :key="info.className"></base-module-list-data>
        <base-module-list-layout :info="info" :css="innerGapObj"></base-module-list-layout>
        <base-module-position :css="selfObj" :info="info" :notAllow="['height', 'minHeight']"></base-module-position>
        <base-module-background :css="innerObj"></base-module-background>
        <base-module-boxShadow :css="innerObj"></base-module-boxShadow>
        <base-module-border-radius :css="innerObj"></base-module-border-radius>
        <base-module-border :css="innerObj"></base-module-border>
        <!--<base-module-margin :css="selfObj"></base-module-margin>-->
        <!--<base-module-translate3d :css="innerObj"></base-module-translate3d>
        <base-module-scale :css="innerObj"></base-module-scale>-->
        <base-module-rotate3d :css="innerObj"></base-module-rotate3d>
        <base-module-skew :css="innerObj"></base-module-skew>
        <base-module-opacity :css="innerObj"></base-module-opacity>
        <base-module-lock :info="info"></base-module-lock>
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
