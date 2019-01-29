<style lang="scss">
.change-store {
  width: 86px;
  color: $white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: $color-blue;
}
</style>

<template>
  <div class="shop">
    <app-top-head></app-top-head>
    <app-left-nav :menu="menu">
      <div
        @click="changeStore()"
        class="change-store h40 text-center lh40 cup"
        slot="changeBtn"
      >切换门店</div>
      <store-change-list
        :dialogVisible.sync="dialogVisible"
        slot="dialog"
      ></store-change-list>
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
import storeChangeList from '@/components/shop/common/store-change-list.vue'

export default {
  name: 'shop-manage',
  data () {
    return {
      menu,
      dialogVisible: false
    }
  },
  components: {
    appLeftNav,
    appTopHead,
    appContent,
    storeChangeList
  },
  methods: {
    changeStore () {
      this.dialogVisible = true
    }
  }
}
</script>
