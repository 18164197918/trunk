<template>
  <div class="left-aside">
    <div class="logo text-center">测试</div>
    <ul>
      <template v-for="(list, index) in linkList">
        <li
          :key="index"
          v-if="list.hide!==true"
        >
          <router-link
            :class="{active: curLink.indexOf(list.link)!==-1}"
            :to="list.link"
          >{{list.cName}}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app-left-nav',
  props: {
    menu: {
      type: Object
    }
  },
  data () {
    return {
      num: 0
    }
  },
  computed: {
    linkList () {
      let menu = this.menu

      let containRouter = menu.containRouter

      let root = menu.root

      // console.log(menu)
      menu.list.forEach(list => {
        list.link === undefined && (list.link = '')
        list.children.forEach(list => {
          if (list.link === undefined) {
            if (containRouter) {
              list.link = root.path + '/' + (list.alias || list.path)
            } else {
              list.link = ''
            }
          }
        })
      })

      if (menu.list.length === 1) {
        return menu.list[0].children
      } else {
        return menu.list
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
.left-aside {
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  border-right: 1px #eee solid;
  overflow-x: hidden;
  background-color: #fff;
  z-index: 2;
  .logo {
    width: 100%;
    height: 90px;
    &:after {
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
      content: "";
    }
    img {
      max-width: 100%;
      display: inline-block;
      vertical-align: middle;
      background-color: #fff;
    }
  }
  .info-logo {
    padding: 30px 0 5px;
    text-align: center;
    .img {
      display: inline-block;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      box-shadow: 0 0 10px 3px #ecf1f6;
      margin-bottom: 3px;
    }
    p {
      line-height: 20px;
      height: 20px;
      text-align: center;
    }
  }

  > ul {
    margin-top: 20px;
    li {
      line-height: 50px;
      cursor: pointer;
      text-align: center;
      > a {
        display: block;
        padding: 0 20px;
        height: inherit;
        color: #333333;
        font-size: 14px;
      }

      > a.active {
        color: $primary;
        box-shadow: 0 0 15px 2px #dee6ef;
      }
      &.active {
        color: $primary;
        box-shadow: 0 0 15px 3px #dee6ef;
      }
    }
  }
}
</style>
