<template>
    <el-aside class="center-left-aside1 w80 ">
        <ul class="left-nav">
            <li v-for="(list, index) in linkList" :class="{active: curLink.indexOf(list.link)!==-1}" v-if="list.hide!==true" class="h80 cursor-pointer text-center fz14">
                <router-link :to="list.link"  class="fz12">
                    <span  :class="[list.icon]"  class="iconfont"></span> <br/>
                    {{list.cName}}
                </router-link>
            </li>
        </ul>
    </el-aside>
</template>

<script>
import API from './API'
export default {
  name: 'app-left-nav',
  data () {
    return {
      num: 0,
      userInfo: {
        avatar: '',
        logo: require('../assets/logo-img1.jpg')
      },
      grade: '',
      newMenu: this.menu,
      linkList: [
        { link: '/category/column', cName: '栏目', icon: 'iconfont-col' },
        { link: '/category/content', cName: '内容', icon: 'iconfont-fuzhi' }
      ]

    }
  },
  props: {
    menu: {
      type: Object
    }
  },

  created () {
  },
  methods: {
  },
  computed: {
    curLink () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
    @import '../../../styles/variables';

    .center-left-aside1 {
        position: absolute;
        left: 0;
        top: 80px;
        height: 100%;
        overflow-x: hidden;
        background: $bule-ash;
        > ul {
            li {

                > a {
                    padding: 20px 0;
                    display: block;
                    height: inherit;
                    color: $gray-wd4;
                    font-size: 14px;
                }
                >span{
                    color: $gray-wd4;
                }
                &.active {
                    background: $bule-ash1;
                    >a{
                        color: $white;
                    }
                    >span{
                        color: $white;
                    }
                }

            }
        }
        .logo-img{
            position: absolute;
            bottom: 80px;
            left: 0;
            width: 100%;
        }
    }
</style>
