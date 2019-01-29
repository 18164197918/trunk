<template>
    <div class="pc-module-page user-module" :class="{'edit-sub-module': info.assist && info.assist.m===1}">
        <div class="inner-page">
            <module-an
                    v-if="info.static.isShowEnds"
                    :info="self.children[0].info"
                    :class="self.children[0].info.className | className"
                    :dataText="info.static.firstText">
                <module-assist
                        mode="children-page"
                        :parents="[self].concat(parents)"
                        :self="self.children[0]"
                        :info="self.children[0].info"
                        :key="self.children[0].info.className">
                </module-assist>
            </module-an>
            <module-an
                    v-if="info.static.isShowTurn"
                    :info="self.children[1].info"
                    :class="self.children[1].info.className | className"
                    :dataText="info.static.prevText">
                <module-assist
                        mode="children-page"
                        :parents="[self].concat(parents)"
                        :self="self.children[1]"
                        :info="self.children[1].info"
                        :key="self.children[1].info.className">
                </module-assist>
            </module-an>
            <module-an
                    v-if="info.static.isShowNum"
                    v-for="item in pageNum"
                    :key="item"
                    :info="self.children[2].info"
                    :class="self.children[2].info.className | className"
                    :dataText="item">
                <module-assist
                        mode="children-page"
                        :parents="[self].concat(parents)"
                        :self="self.children[2]"
                        :info="self.children[2].info"
                        :notFirstLock="item!==1"
                        :key="self.children[2].info.className">
                </module-assist>
            </module-an>
            <module-an
                    v-if="info.static.isShowTurn"
                    :info="self.children[1].info"
                    :class="self.children[1].info.className | className"
                    :dataText="info.static.nextText">
                <module-assist
                        mode="children-page"
                        :parents="[self].concat(parents)"
                        :self="self.children[1]"
                        :info="self.children[1].info"
                        :notFirstLock="true"
                        :key="self.children[1].info.className">
                </module-assist>
            </module-an>
            <module-an
                    v-if="info.static.isShowEnds"
                    :info="self.children[0].info"
                    :class="self.children[0].info.className | className"
                    :dataText="info.static.lastText">
                <module-assist
                        mode="children-page"
                        :parents="[self].concat(parents)"
                        :self="self.children[0]"
                        :info="self.children[0].info"
                        :notFirstLock="true"
                        :key="self.children[0].info.className">
                </module-assist>
            </module-an>
        </div>

        <slot></slot>
    </div>
</template>

<script>
  import mixinModule from '../common/mixin-module'
  import moduleAssist from '../common/module-assist.vue'
  import filterClassName from '../common/filter-className'
  import { packModule } from '../common/package-module'

  export default {
    name      : 'module-page-tpl',
    mixins    : [mixinModule, filterClassName],
    computed  : {
      pageNum() {
        return this.rootData && this.rootData.meta.pages || 4
      },
    },
    components: {
      moduleAssist,
      ...packModule()
    },
  }
</script>