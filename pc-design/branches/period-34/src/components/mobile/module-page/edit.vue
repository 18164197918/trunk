<template>
    <div>
        <base-module-page-data :info="info" :key="info.className"></base-module-page-data>
        <base-module-position v-if="assist.a===0" :info="info" :css="selfObj" :notAllow="['minHeight', 'position']"></base-module-position>
        <base-module-background :css="innerObj"></base-module-background>
        <base-module-boxShadow :css="innerObj"></base-module-boxShadow>
        <base-module-border :css="innerObj"></base-module-border>
        <base-module-padding :css="innerObj"></base-module-padding>
        <base-module-opacity :css="innerObj"></base-module-opacity>
        <base-module-lock :info="info"></base-module-lock>
    </div>
</template>

<script>
import mixinModuleEdit from '../common/mixin-module-edit'

export default {
  mixins: [mixinModuleEdit]
}
</script>
