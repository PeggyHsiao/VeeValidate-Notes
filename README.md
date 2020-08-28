# Vee-validate 表單驗證
Vue.js的表單驗證套件。如果是不是vue的專案可以使用[validate.js](https://github.com/PeggyHsiao/validate.js)。

## 支援多國語言
`vee-validate`有支援多國語言，要使用必須先安裝[vue-i18n]()套件。
```
npm install vue-i18n --save
```

## 安裝
```
npm install vee-validate --save
```
>> `--save`是安裝套件時同步更新`package.json`裡的資訊。  

安裝完之後要引入`main.js`並設定。這裡語言以繁體中文為例，`vue-i18n`還有支援英、日、韓、法文...很多。
```js
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zhTW'
})

Vue.use(VeeValidate, {
    events: 'input|blur', //使用者離開欄位時觸發驗證
    i18n,
    dictionary: {
        zhTW
    }
})
```

