import Vue from 'vue'
import App from './App.vue'
// import VeeValidate from 'vee-validate'
import * as VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'
import router from '@/router/index'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})

Vue.use(VeeValidate,{
    events: 'input|blur',
    i18n,
    dictionary:{
      zhTW
    }
})

new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')