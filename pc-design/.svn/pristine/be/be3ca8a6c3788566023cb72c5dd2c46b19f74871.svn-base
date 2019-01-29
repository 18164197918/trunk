<style lang="scss">
</style>
<template>
  <div>{{storeId}}
    <template-list
      :show.sync="showList"
      v-if="showList"
       :storeId.sync="storeId"
    ></template-list>
    <template-form
      :show.sync="showList"
      v-if="!showList"
       :storeId.sync="storeId"
    ></template-form>
  </div>
</template>

<script>
import templateList from './template-list.vue'
import templateForm from './template-form.vue'
export default {
  name: 'my-template',
  components: {
    templateList,
    templateForm
  },
  data () {
    return {
      showList: true,
      storeId: ''
    }
  },
  created () {

  }
}
</script>
