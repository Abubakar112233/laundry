import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from '@/internationalization'
import FlagIcon from 'vue-flag-icon'
import { firestorePlugin } from 'vuefire'
import cookieService from '@/services/cookies'

Vue.use(FlagIcon)
Vue.use(firestorePlugin)


Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  vuetify,
  beforeCreate () {
    let user = cookieService.getUser()
    if (user) store.commit('login', user)
    let language = cookieService.getLanguage()
    if (language) store.commit('setLocale', language)
    if (navigator.onLine) {
      store.commit('setOnline', true)
    } else {
      store.commit('setOnline', false)
    }
  },
  render: h => h(App)
}).$mount('#app')
