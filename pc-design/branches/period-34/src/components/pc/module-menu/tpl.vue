<template>
    <div :class="[info.static.class, {'edit-sub-module': info.assist && info.assist.m===1}]" class="pc-module-menu user-module">

        <div class="ul level1 inner-menu">
            <div v-for="(item1, key1) in menu" class="li li1">
                <module-an
                        :activeClass="item1.activeClass ? 'hover' : ''"
                        :parents="[self].concat(parents)"
                        :self="self.children[0]"
                        :info="self.children[0].info"
                        :class="self.children[0].info.className | className"
                        :dataLink="item1.linkTo"
                        :dataText="item1.title"
                        :key="self.children[0].info.className">
                    <module-assist
                            mode="children-menu"
                            :parents="[self].concat(parents)"
                            :self="self.children[0]"
                            :info="self.children[0].info"
                            :notFirstLock="key1!==0"
                            :indexKey="key1"
                            :key="self.children[0].info.className">
                    </module-assist>
                </module-an>

                <div v-if="info.static.isShowSub && item1.children" class="ul level2">
                    <div v-for="(item2, key2) in item1.children" class="li li2">
                        <module-an
                                :activeClass="item2.activeClass ? 'hover' : ''"
                                :parents="[self].concat(parents)"
                                :self="self.children[1]"
                                :info="self.children[1].info"
                                :class="self.children[1].info.className | className"
                                :dataLink="item2.linkTo"
                                :dataText="item2.title"
                                :key="self.children[1].info.className">
                            <module-assist
                                    mode="children-menu"
                                    :parents="[self].concat(parents)"
                                    :self="self.children[1]"
                                    :info="self.children[1].info"
                                    :notFirstLock="key2!==0"
                                    :indexKey="key2"
                                    :key="self.children[1].info.className">
                            </module-assist>
                        </module-an>

                        <!--<div v-if="item2.children" class="ul level3">
                            <div v-for="(item3, key2) in item2.children" class="li li3">
                                <module-an
                                        :parents="[self].concat(parents)"
                                        :self="self.children[2]"
                                        :info="self.children[2].info"
                                        :class="self.children[2].info.className | className"
                                        :dataText="item3.title"
                                        :key="2">
                                    <module-assist
                                            mode="children-menu"
                                            :parents="[self].concat(parents)"
                                            :self="self.children[2]"
                                            :info="self.children[2].info">
                                    </module-assist>
                                </module-an>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
  import dataSite from '../common/data-site'
  import dataCache from '../common/data-cache'
  import mixinModule from '../common/mixin-module'
  import moduleAssist from '../common/module-assist.vue'
  import filterClassName from '../common/filter-className'
  import { packModule } from '../common/package-module'


  const menu = [
    {
      title: '首页',
    },
    {
      title   : '关于我们',
      children: [
        {title: '企业概况',},
        {title: '发展历程',},
      ],
    },
    {
      title   : '新闻中心',
      children: [
        {title: '公司新闻',},
        {title: '行业新闻',},
      ],
    },
    {
      title: '联系我们',
    },
  ]

  export default {
    name      : 'module-menu-tpl',
    mixins    : [mixinModule, filterClassName],
    computed  : {
      menu() {
        let cid, originalMenu, _static = this.info.static

        /**
         * 1.如果是模板页面直接返回menu
         * 2.如果是主导航
         *   1.含有首页
         *   2.不含首页
         * 3.如果是栏目页或内容页含有 cid则返回特定栏目
         * 4.否则使用默认 menu
         */
        if (this.info.className.length > 5) {
          originalMenu = menu
        }
        else if (_static.type === 'main') {
          if (_static.isShowHome) {
            originalMenu = [{title: '首页', linkTo: 'SYS:::COM_CID=0'}].concat(dataCache.categoryList)
          }else{
            originalMenu = dataCache.categoryList
          }
        }
        else if (this.rootData && (cid = this.rootData.cid)) {
          originalMenu = [dataCache.categoryListEqualObj[dataCache.findTopCategory(cid)]]
        }
        else {
          originalMenu = menu
        }
        this.addMenuLink(originalMenu, cid)

        return originalMenu
      },
    },
    methods   : {
      addMenuLink(menu, cid) {
        menu.forEach(item => {
          if (item.hasChildren) {
            let index = item.children[0].index
            this.$set(item, 'linkTo', 'SYS:::COM_CID=' + index)
            if(cid && index === cid){
              this.$set(item, 'activeClass', true)
            }else{
              this.$set(item, 'activeClass', false)
            }
            this.addMenuLink(item.children, cid)
          }
          else if(item.index){
            this.$set(item, 'linkTo', 'SYS:::COM_CID=' + item.index)
            if(cid && item.index === cid){
              this.$set(item, 'activeClass', true)
            }else{
              this.$set(item, 'activeClass', false)
            }
          }
        })
      },
    },
    components: {
      moduleAssist,
      ...packModule()
    },
  }


</script>
