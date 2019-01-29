import Vue from 'vue'

[require('./methods.is-empty-object').default].forEach((x) => {
  Vue.mixin(x)
})
