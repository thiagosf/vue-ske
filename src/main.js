import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import VueHead from 'vue-head'
import VeeValidate from 'vee-validate'

import svgicon from 'vue-svgicon'
import App from './App'
import router from './router'
import i18n from './helpers/i18n'
import store from './store'
import Bus from './plugins/Bus'
import SimpleUi from './plugins/SimpleUi'

Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(Bus)
Vue.use(SimpleUi)
Vue.use(VeeValidate, {
  dictionary: i18n.getValidationDictionary()
})
Vue.use(VueHead, {
  separator: ` ${String.fromCharCode('8211')} `,
  complement: () => 'aaa'
})
Vue.use(svgicon, { tagName: 'icon' })
Vue.config.productionTip = false

i18n.install()

let apiRoot = 'https://api.domain.com'
if (process.env.NODE_ENV === 'development') {
  apiRoot = 'http://api.dev.azk.io'
}

Vue.http.options.root = apiRoot
Vue.router = router
App.store = store
App.router = Vue.router

new Vue(App).$mount('#app')
