# Vee-validate2 表單驗證
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
> `--save`是安裝套件時同步更新`package.json`裡的資訊。 

為了美觀，我們在這個範例裡面套用`Bootstrap`樣式。需要先安裝[Bootstrap]()套件。
```
npm install vue bootstrap-vue bootstrap --save
```

三個套件都安裝完之後要引入`main.js`並設定，讓整個專案都能使用驗證功能。這裡語言以繁體中文為例，`vue-i18n`還有支援英、日、韓、法文...很多。
```js
import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'

import VeeValidate from 'vee-validate'

import i18n from '@/lang/index'  // 把語言相關檔案放在lang資料夾裡面
import tw from 'vee-validate/dist/locale/zh_TW'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(VeeValidate,{
    locale: 'tw',
    events: 'input|blur', // 當使用者滑鼠離開欄位時，觸發驗證
    dictionary:{
      tw,
    }
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
```

## 範例
在`input`裡面要設定`name`屬性，表單驗證就是用`name`來識別哪個欄位不符合規定，而`v-validate`的屬性，則是放要驗證的條件。驗證屬性有很多種，其中範例用到的是下面兩個：
- required：必填欄位
- email：須符合e-mail格式

如果需要放入超過一個的驗證規定，使用`|`串接，例如：`v-validate: required|email`。
> 還有很多驗證參數可以到[這篇文章](https://segmentfault.com/a/1190000011296437)看看。 

當驗證未通過會產生`errors`，常用的有以下兩個：
- errors.has(name)：判斷是否驗證失敗
- errors.first(name)：跳出驗證錯誤的提示訊息
> - "name"為input的name值   
> - data-vv-as`是為了讓跳出驗證錯誤的提示訊息能符合多國語言。

`this.$validator.validate()`是送出資料前檢查是否欄位都符合規定，如果有未符合的將執行`else`的指令。前面都只是做顯示提示訊息，這裡才是阻擋未符合的資料藉由API傳送到後端。

```vue
<template>
  <div class="container" style="padding-top: 30px">
    <form>
      <div class="form-group">
        <label for="username">{{ $t('username') }}</label>
        <input
          type="text"
          class="form-control"
          :data-vv-as="$t('username')"
          v-model="data.userName"
          name="username"
          v-validate="'required'"
          :class="{'is-invalid':errors.has('username')}"
        />
        <span class="text-danger" v-if="errors.has('username')">{{ errors.first('username') }}</span>
      </div>
      <div class="form-group">
        <label for="email">{{ $t('email') }}</label>
        <input
          type="email"
          class="form-control"
          :data-vv-as="$t('email')"
          v-model="data.email"
          name="email"
          v-validate="'required|email'"
          :class="{'is-invalid':errors.has('email')}"
        />
        <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <button type="submit" class="btn btn-primary" @click="submitData">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VeeVaildate",
  data() {
    return {
        data:{
            userName: '',
            email: '',
        }
    };
  },
  methods: {
    submitData() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.showData();
        } else {
          console.log('fail')
        }
      });
    },
    showData(){
        console.log(this.data);
    }
  },
};
</script>
```
當驗證失敗的時候會像這樣
![](https://github.com/PeggyHsiao/VeeValidate-Notes/blob/master/images/1.jpg)  
