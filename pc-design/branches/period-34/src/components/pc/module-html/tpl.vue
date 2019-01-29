<template>
    <div @keydown.stop :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-html user-module" >
        <!--<div v-html="info.static.html" class="inner" :class="{'hover': info.assist && info.assist.a!==0}"></div>-->
        <div v-html="rootData && rootData.data[info.static.d__html] || info.static.html" class="inner" :class="{'hover': info.assist && info.assist.a!==0}"></div>
        <slot></slot>
    </div>
</template>

<script>
    import mixinModule from '../common/mixin-module'

    export default {
      name: 'module-html-tpl',
      mixins: [mixinModule],
    }
</script>