<template>
  <el-aside class="center-left-aside w140 bg-primary">
    <div
      class="text-center pb35 pt35"
      v-if="user.user"
    >
      <img
        :src="user.user.avatar || defaultImg | filterImg"
        alt
        class="img-cover w65 h65 dib bsr"
      >
    </div>
    <ul>
      <li
        :key="index"
        class="lh55 h55 cursor-pointer text-center fz14"
        v-for="(list, index) in linkList"
      >
        <router-link
          :class="{active: curLink.indexOf(list.link)!==-1}"
          :to="list.link"
        >{{list.cName}}</router-link>
      </li>
    </ul>
    <div class="logo-img text-center">
      <img
        :src="logo"
        alt
        class="img-cover w130"
        style="opacity: 0.6"
      >
    </div>
  </el-aside>
</template>

<script>
import user from './user'
export default {
  name: 'app-left-nav',
  props: {
    menu: {
      type: Object
    }
  },
  data () {
    return {
      user,
      defaultImg: require('../assets/head-img1.png'),
      num: 0,
      avatar: '',
      grade: '',
      logo: require('../assets/logo-img1.jpg'),
      newMenu: this.menu
    }
  },
  mounted () {
    this.user.getUserInfo().then(() => {
      this.grade = this.user.customerUser.grade
    })
  },
  computed: {
    linkList () {
      let menu = this.menu
      let containRouter = menu.containRouter
      let root = menu.root
      menu.list.forEach((list) => {
        list.link === undefined && (list.link = '')
        list.children.forEach((item) => {
          if (item.link === undefined) {
            if (containRouter) {
              item.link = root.path + '/' + (item.alias || item.path)
            } else {
              item.link = ''
            }
          }
        })
      })
      if (menu.list.length === 1) {
        return menu.list[0].children
      } else {
        let temp = []
        menu.list.forEach((item, i) => {
          if (this.grade === 'SUPERMAN') {
            temp = temp.concat(item.children)
          } else {
            if (item.children[0].link !== '/bam/admin') {
              temp = temp.concat(item.children)
            }
          }
        })
        return temp
      }
    },
    curLink () {
      return this.$route.path
    }
  }
}

</script>

<style lang="scss">
@import "../../../styles/variables";

.center-left-aside {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  overflow-x: hidden;

  > ul {
    li {
      > a {
        display: block;
        padding: 0 20px;
        height: inherit;
        color: lighten($primary, 20%);
        font-size: 14px;
      }

      > a.active {
        color: $white;
        background-color: darken($primary, 15%);
        font-weight: 600;
      }

      &.active {
        color: $white;
        background-color: darken($primary, 15%);
        font-weight: 600;
      }
    }
  }

  .logo-img {
    position: absolute;
    bottom: 80px;
    left: 0;
    width: 100%;
  }
}
</style>
