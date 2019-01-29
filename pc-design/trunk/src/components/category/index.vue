<template>
  <div>
    <app-top-head></app-top-head>
    <app-left-nav :menu="menu"></app-left-nav>

    <!--<div class="center-content">-->
    <!--<router-view/>-->
    <!--</div>-->
    <app-content>
      <router-view/>
    </app-content>
  </div>
</template>

<script>
import menu from './menu&router'
import appLeftNav from '@/components/common/app-left-nav.vue'
import appTopHead from '@/components/common/app-top-head.vue'
import appContent from '@/components/common/app-content.vue'

export default {
  name: 'bam-manage',
  data () {
    return {
      menu
    }
  },
  components: {
    appLeftNav,
    appTopHead,
    appContent
  }
}
</script>
<style>
.center-content {
  position: fixed;
  left: 190px;
  top: 80px;
  right: 0;
  bottom: 0;
  padding: 0;
  @include scrollbar(0);
}
</style>
