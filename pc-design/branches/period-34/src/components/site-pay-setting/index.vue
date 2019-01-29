<template>
  <div>
    <app-top-head></app-top-head>
    <app-left-nav :menu="menu"></app-left-nav>
    <app-content :menu="menu">
      <router-view />
    </app-content>
  </div>
</template>

<script>
import menu from './menu&router'
import appLeftNav from './common/app-left-nav.vue'
import appTopHead from './common/app-top-head.vue'
import appContent from './common/app-content.vue'

export default {
  name: 'site-pay-setting',
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
