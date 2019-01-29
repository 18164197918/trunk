<template>
    <div class="pc-module-group user-module" :class="{'hover': info.assist && info.assist.a===1, 'edit-sub-module': info.assist && info.assist.m===1}">
        <div class="inner-group">
            <component
                    v-for="(item, index) in self.children"
                    :is="item.info.name"
                    :parents="[self].concat(parents)"
                    :self="item"
                    :info="item.info"
                    :class="item.info.className | className"
                    :key="item.info.className">
                <module-assist
                        mode="children-group"
                        :parents="[self].concat(parents)"
                        :self="item"
                        :info="item.info"
                        :key="item.info.className">
                </module-assist>
            </component>
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
    name: 'module-group-tpl',
    mixins: [mixinModule, filterClassName],
    components: {
      moduleAssist,
      ...packModule()
    },
  }
</script>