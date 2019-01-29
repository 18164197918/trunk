<style lang="scss">
</style>

<template>
  <div>
    <delivery :name="'address'"></delivery>
    <address-list
      :show.sync="showList"
      :storeId.sync="storeId"
      v-if="showList"
    ></address-list>
    <address-form
      :show.sync="showList"
      :storeId.sync="storeId"
      v-if="!showList"
    ></address-form>
  </div>
</template>

<script>
import addressList from './address-list.vue'
import addressForm from './address-form.vue'
import delivery from './index'
export default {
  name: 'addressLibrary',
  components: { addressList, addressForm, delivery },
  data () {
    return {
      showList: true,
      storeId: ''
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
