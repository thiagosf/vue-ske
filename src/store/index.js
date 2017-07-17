import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './modules/i18n'
import transition from './modules/transition'
import notification from './modules/notification'
import appNav from './modules/app_nav'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    i18n,
    transition,
    notification,
    appNav,
    user
  ]
})
