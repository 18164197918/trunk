import Vue from 'vue'
import App from './App.vue'
import './styles/element-variables.scss'
import './styles/element-add.scss'
import './styles/bs-init.css'
import './styles/grid.css'
import './styles/init.scss'
import './router/init-axios'
import './js/inject-component'
import './js/inject-filter'
import './js/inject-methods'
import './js/vue-extend'
import router from './router/'
import config, { SCENE } from './config'
import ElementUI from 'element-ui'
import Filemanager from './filemanager/index.vue'

import http from './tools/http'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'medium', zIndex: 800 })

// 初始化http参数
http.init({
  baseURL: 'http://s.bj:8100/api/',
  headers: ['store-id'],
  scene: SCENE
})

// http.setResInterceptors({
//   error (err) {
//     err = err.hasOwnProperty('response') ? err.response : err

//     if (err.status === 500) {
//       switch (err.data.code) {
//         case 10005:
//         case 10006:
//           // router.push(account.root.redirect)
//           break
//       }
//     }

//     return Promise.reject(err)
//   }
// })

new Vue({
  mounted () {
    if (/^\/account/.test(this.$route.path)) {
      let unwatch = this.$watch('$route.path', function (newVal) {
        if (!/^\/account/.test(newVal)) {
          Vue.use(Filemanager, { debug: false, root_url: config.baseURL.http6 })
          unwatch()
        }
      })
    } else {
      Vue.use(Filemanager, { debug: false, root_url: config.baseURL.http6 })
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
