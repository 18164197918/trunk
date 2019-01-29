<template>
    <div class="left-second-nav d-flex">
        <ul class="w120">
            <li v-for="(list, index) in linkList" v-if="list.hide!==true"  :class="{active: curLink.indexOf(list.link)!==-1}" class="lh40  h40 cursor-pointer text-center fz14">
               <!--{{list.link}}-->
                <router-link :to="list.link" class="fz12 lh40">{{list.cName}}</router-link>
            </li>
        </ul>
        <div class="right-content pl30 pt20">
            <router-view/>
        </div>
    </div>
</template>

<style>
    a.router-link-active{
        font-weight:bold;
    }
</style>

<script>
export default {
  name: 'bam-manage',
  data () {
    return {
      //        menu,
      linkList: [
        { link: '/category/content/manager', cName: '内容管理' },
        { link: '/category/content/model', cName: '内容模型' },
        { link: '/category/content/label', cName: '标签管理' },
        { link: '/category/content/recovery', cName: '内容回收站' }
      ]
    }
  },
  components: {
  },
  computed: {
    curLink () {
      return this.$route.path
    }
  }
}
</script>
