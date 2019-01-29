<style lang="scss" scoped>
.shop-left-nav {
  position: fixed;
  left: 0;
  top: $shopTopHeadHeight;
  height: 100%;
  width: $shopLeftNavWidth;

  @mixin nav {
    @include scrollbar(0);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @mixin on {
    &.on {
      background-color: $color-blue;
      opacity: 1;
    }
  }

  @mixin hover($color) {
    &:hover {
      background-color: $color;
      opacity: 1;
      transition: all 0.1s ease-out;
    }
    &.hover {
      background-color: $color;
      opacity: 1;
      transition: all 0.1s ease-out;
    }
  }

  .nav1 {
    @include nav;
    width: $shopLeftSubWidth1;
    background-color: #2c3751;

    li {
      @include hover(#36415b);
      @include on;
      line-height: 34px;
      color: $white;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  }

  .nav2 {
    @include nav;
    width: $shopLeftSubWidth2;
    background-color: #36415b;

    .li {
      @include hover(#404c69);
      @include on;
      line-height: 34px;
      color: $white;
    }

    li.type2 {
      @extend .li;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }

    li.type1 {
      &:not(:last-of-type) {
        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }

  .change-store {
    width: 86px;
    color: $white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: $color-blue;
  }
}
</style>

<template>
  <div>
    <nav class="shop-left-nav clearfix">
      <ul class="nav1 h100p fl">
        <template v-for="(list, key1) in _menu">
          <li
            :class="[{'on': key1 === mainActive}, {'hover': key1 === mainHover}]"
            :key="key1"
            @click="mainHover = key1"
            class="fz15 text-center cup opa80"
          >
            <i
              :class="list.icon"
              class="iconfont fz14"
            ></i>
            {{list.cName}}
          </li>
        </template>
      </ul>
      <ul class="nav2 h100p fl">
        <template v-if="_menu[mainHover]">
          <template v-for="(list, key2) in _menu[mainHover].children">
            <li
              :key="key2"
              class="type1"
              v-if="list.isShowBlock"
            >
              <p
                class="fz13 text-center opa30 lh34 text-white mb15"
              >{{list.cName}}</p>
              <template v-for="(list, key3) in list.children">
                <router-link
                  :class="{'on': nowLink === list.link || mock === list.link}"
                  :key="key3"
                  :to="list.link"
                  class="li fz13 text-center cup opa80 type2"
                  tag="li"
                  v-if="!list.isShow"
                >{{list.cName}}</router-link>
              </template>
            </li>
            <router-link
              :class="{'on': mainActive === mainHover && key2 === childActive}"
              :key="key2"
              :to="list.link"
              class="fz13 text-center cup opa80 type2"
              tag="li"
              v-if="!list.isShowBlock"
            >{{list.cName}}</router-link>
          </template>
        </template>
      </ul>
      <!-- <div
        @click="changeStore()"
        class="change-store h40 text-center lh40 cup"
      >切换门店</div>-->
      <slot></slot>
    </nav>
    <!-- <store-list :dialogVisible.sync="dialogVisible"></store-list> -->
  </div>
</template>

<script>
// import storeList from './store-list'
const MOCK = new Map()

export default {
  name: 'shop-left-nav',
  props: {
    menu: {
      type: Object
    }
  },
  // components: { storeList },
  data () {
    return {
      mainHover: -1,
      mainActive: -1,
      childActive: -1,
      nowLink: '',
      mock: '',
      dialogVisible: false
    }
  },

  mounted () {
    /* 监控需在 _menu 后方执行 */
    this.$watch('$route.path', {
      handler (newVal) {
        let childList
        this.nowLink = newVal
        let pathArr = newVal.split('/').slice(1)
        let list = this.menu.list

        for (let i = 0, len1 = list.length; i < len1; i++) {
          childList = list[i].children
          for (let j = 0, len2 = childList.length; j < len2; j++) {
            if (childList[j].path === pathArr[1]) {
              this.mainActive = i
              this.childActive = j
              if (this.mainHover === -1) {
                this.mainHover = i
              }
              return
            }
          }
        }
      },
      immediate: true
    })

    this.$router.afterEach((to, from) => {
      this.mock = MOCK.get(to.path)
    })
  },
  computed: {
    _menu () {
      let menu = this.menu
      let { root, containRouter, list } = menu
      list.forEach(list => {
        list.link === undefined && (list.link = '')
        list.children.forEach(list => {
          if (list.link === undefined) {
            if (containRouter) {
              list.link = root.path + '/' + (list.alias || list.path)
              if (list.isShowBlock) {
                list.children.forEach((children) => {
                  children.link = `${list.link}/${children.path}`
                  children.isShow = children.isShow === false
                  if (children.mock) {
                    MOCK.set(children.link, `${list.link}/${children.mock}`)
                  }
                })
              }
            } else {
              list.link = ''
            }
          }
        })
      })
      return list
    }
  },
  methods: {
    changeStore () {
      this.dialogVisible = true
    }
  }
}

</script>
