<template>
    <div class="content-box bj-body-box">
        <div v-if="dataSite.isShowHeadConfig" class="content-box-head">
            <component
                    v-for="(item, index) in siteHeadConfig"
                    :is="item.info.name"
                    :parents="[siteHeadConfig]"
                    :self="item"
                    :info="item.info"
                    :class="item.info.className | className"
                    :key="item.info.className + index">
                <module-assist
                        :mode="item.info.name"
                        :parents="[siteHeadConfig]"
                        :self="item"
                        :info="item.info"
                        :key="item.info.className + index">
                </module-assist>
            </component>
        </div>
        <div class="content-box-inner">
            <component
                    v-for="(item, index) in pageConfig"
                    :is="item.info.name"
                    :rootData="rootData"
                    :parents="[pageConfig]"
                    :self="item"
                    :info="item.info"
                    :class="item.info.className | className"
                    :key="item.info.className + index">
                <module-assist
                        :mode="item.info.name"
                        :parents="[pageConfig]"
                        :self="item"
                        :info="item.info"
                        :key="item.info.className + index">
                </module-assist>
            </component>
        </div>
        <div v-if="dataSite.isShowFootConfig" class="content-box-foot">
            <component
                    v-for="(item, index) in siteFootConfig"
                    :is="item.info.name"
                    :parents="[siteFootConfig]"
                    :self="item"
                    :info="item.info"
                    :class="item.info.className | className"
                    :key="item.info.className + index">
                <module-assist
                        :mode="item.info.name"
                        :parents="[siteFootConfig]"
                        :self="item"
                        :info="item.info"
                        :key="item.info.className + index">
                </module-assist>
            </component>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import {dataPage, dataSite, dataCache, constant, filterClassName} from '../common'
  import moduleAssist from '../common/module-assist.vue'
  import moduleContainer from '../module-container/tpl.vue'
  import moveDomInit from './move-content-dom'
  import resizeDomInit from './resize-content-dom'
  import selectRangeDomInit from './select-range-content-dom'

  export default {
    mixins    : [filterClassName],
    mounted() {
      moveDomInit.call(this)
      resizeDomInit.call(this)
      selectRangeDomInit.call(this)
    },
    computed  : {
      rootData() {
        let page_type = this.dataPage.page_type,
            pid       = this.$route.query.pid,
            cid       = this.$route.query.cid

        if (page_type === 'COLUMN_PAGE' && cid) {

          return {
            cid,
            page_type,
            ...dataCache.getContentList({id: cid}),
          }
        }
        else if (page_type === 'CONTENT_PAGE' && pid) {
          dataCache.getContentList({id: cid})

          return {
            page_type,
            cid,
            pid,
            ...dataCache.getContentDetail({id: pid}),
          }
        }
        else {
          return undefined
        }
      },
    },
    data() {
      return {
        dataSite      : dataSite.get(),
        dataPage      : dataPage.get(),
        pageConfig    : dataPage.get('config'),
        siteHeadConfig: dataSite.get('headConfig'),
        siteFootConfig: dataSite.get('footConfig'),
      }
    },
    watch     : {},
    beforeDestroy() {
      $(this.$el).undelegate()
    },
    components: {
      moduleAssist,
      moduleContainer,
    },
  }
</script>
