<template>
  <div class="shop">
    <app-top-head></app-top-head>
    <app-left-nav :menu="menu">
      <div>1278361782</div>
    </app-left-nav>
    <app-content :menu="menu">
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
  name: 'shop-manage',
  data () {
    return {
      menu,
      defaultStore: true
    }
  },
  components: {
    appLeftNav,
    appTopHead,
    appContent
  }
}
</script>
