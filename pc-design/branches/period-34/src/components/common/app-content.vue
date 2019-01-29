<style lang="scss">
.shop-app-content {
  @include scrollbar(0);
  overflow-y: scroll;
  position: fixed;
  left: 176px;
  top: 60px;
  right: 0;
  bottom: 0;

  // .content-inner {
  //   // box-shadow: 0 0 30px 5px #f0f2f4;
  // }
}
</style>

<template>
  <div class="shop-app-content p18 bg-gray">
    <div class="content-inner bg-white bd-gray bdr5 min-h100p p18">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'shop-app-content',
  props: {
    menu: {
      type: Object
    }
  },
  mounted () {
    // $(this.$el).children('.content-inner').css('min-height', $(window).height() - 90)
  },
  computed: {
    // curPath () {
    //   let _index = 0
    //   this.menu.list[0].children.forEach((list, index) => {
    //     if (this.$route.path.indexOf(list.link) !== -1) {
    //       _index = index
    //     }
    //   })
    //   return _index
    // }
  }
}
</script>
