<template>
  <div class="center-app-content">
    <div class="content-inner pt30 pl30 pr40 po-re">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app-content',
  props: {
    menu: {
      type: Object
    }
  },
  mounted () {
    $(this.$el).children('.content-inner').css('min-height', $(window).height() - 90)
  },
  computed: {
    curPath () {
      let _index = 0
      this.menu.list[0].children.forEach((list, index) => {
        if (this.$route.path.indexOf(list.link) !== -1) {
          _index = index
        }
      })
      return _index
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.center-app-content {
  overflow-y: scroll;
  position: fixed;
  left: 140px;
  top: 55px;
  right: 0;
  bottom: 0;
  padding: 30px 0 10px 30px;
  background-color: $gary-wd;
  @include scrollbar(0);
  .title {
    font-size: 14px;
    line-height: 1;
    span {
      display: inline-block;
      vertical-align: top;
      padding-left: 6px;
      color: $black-wd1;
      border-left: 2px solid $primary;
    }
    i {
      padding-left: 10px;
      vertical-align: top;
      display: inline-block;
      color: $gray-wd1;
      text-transform: uppercase;
    }
  }
  .content-inner {
    background-color: $white;
    border-top-left-radius: 4px;
    box-shadow: 0 0 4px $gary-wd;
  }
}
</style>
