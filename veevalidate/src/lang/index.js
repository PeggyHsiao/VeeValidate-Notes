import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en/index'
import tw from './tw/index'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'tw',
    messages: { tw, en }
})

export default i18n