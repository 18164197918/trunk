<template>
  <div class="decorate">
    <ul class="d-flex bb-gray pt16">
      <li
        :class="{active: currLink.indexOf(list.path) > -1}"
        :key="index"
        class="link-li h30 pl15 pr15"
        v-for="(list, index) in routeMenu"
      >
        {{list.cName}}
        <router-link
          :to="list.path"
          class="aRouter"
        ></router-link>
      </li>
    </ul>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import menu from './menu&router'
export default {
  data () {
    return {
      routeMenu: (menu[0].children)[0].children
    }
  },
  computed: {
    // 当前路由path
    currLink () {
      return this.$route.path
    }
  }
}

</script>

<style scoped
       lang="scss">
@import "../../../styles/variables";

.decorate {
  .link-li {
    border: 1px solid $white;
    position: relative;
    padding: 0 15rpx;
    height: 28px;

    .aRouter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 28px;
    }
  }

  .active {
    color: $primary;
    border-top: 1px solid lighten($gray, 50%);
    border-right: 1px solid lighten($gray, 50%);
    border-bottom: 1px solid $white;
    border-left: 1px solid lighten($gray, 50%);
    transform: translate3d(0, 1px, 0);
  }
}
</style>
