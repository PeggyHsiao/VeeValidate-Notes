import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import tw from 'vee-validate/dist/locale/zh_TW'
import router from '@/router/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from '@/lang/index'

Vue.config.productionTip = false

Vue.use(BootstrapVue)


Vue.use(VeeValidate,{
    locale: 'tw',
    events: 'input|blur',
    dictionary:{
      tw,
    }
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')