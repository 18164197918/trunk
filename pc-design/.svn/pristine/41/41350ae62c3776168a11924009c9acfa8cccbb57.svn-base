<template>
    <div class="left-second-nav d-flex">
        <ul class="w120">
            <li v-for="(list, index) in linkList" v-if="list.hide!==true"  :class="{active: curLink.indexOf(list.link)!==-1}" class="lh40  h40 cursor-pointer text-center fz14">
                <router-link :to="list.link" class="fz12 lh40">{{list.cName}}</router-link>
            </li>
        </ul>
        <div class="right-content pl30 pt20">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bam-manage',
  data () {
    return {
      linkList: [
        { link: '/category/column/manager', cName: '栏目管理' },
        { link: '/category/column/model', cName: '栏目模型' },
        { link: '/category/column/recovery', cName: '栏目回收站' }
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
<style lang="scss">
    @import '../../../styles/variables';
    .left-second-nav{
        height: 100%;
        width: 100%;
        flex-wrap: nowrap;
        >ul{
            min-width:120px;
            background: $white;
            height: 100%;
            >li{
                &.active{
                    background: $gray-wd3;
                    border-left:3px solid  $green-ct;
                }
                >a{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .right-content{
            flex: 1;
            mix-height: 100%;
            height: auto;
            background-color:  $gray-fh;
            overflow-y: scroll;
            @include scrollbar(0);
        }
    }
</style>
