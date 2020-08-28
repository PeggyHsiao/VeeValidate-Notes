import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
