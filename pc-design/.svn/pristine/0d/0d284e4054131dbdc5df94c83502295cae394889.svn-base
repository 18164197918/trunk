<template>
    <div class="container-wrapper user-module">
        <slot></slot>
        <div class="container">
            <div class="row">
                <div v-for="(grid, key) in info.static.gridList" :class="['col-' + grid]" :key="info.className + key" class="col-mark">
                    <component
                            v-for="(item, index) in self.children"
                            v-if="item.info.sequence===key"
                            :is="item.info.name"
                            :parents="[self].concat(parents)"
                            :self="item"
                            :info="item.info"
                            :rootData="rootData"
                            :class="item.info.className | className"
                            :key="item.info.className + index">
                        <module-assist
                                :mode="item.info.name"
                                :parents="[self].concat(parents)"
                                :self="item"
                                :info="item.info"
                                :key="item.info.className + index">
                        </module-assist>
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dataSite from '../common/data-site'
import mixinModule from '../common/mixin-module'
import moduleAssist from '../common/module-assist.vue'
import filterClassName from '../common/filter-className'
import { randomNumClassLength } from '../common/constant'
import { packModule } from '../common/package-module'

export default {
  name: 'module-container-tpl',
  mixins: [mixinModule, filterClassName],
  data () {
    return {
      dataSite: dataSite.get(),
      randomNumClassLength
    }
  },
  components: {
    moduleAssist,
    ...packModule()
  }
}
</script>
