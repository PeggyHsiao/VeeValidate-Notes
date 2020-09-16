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
          console.log('faild')
        }
      });
    },
    showData(){
        console.log(this.data);
    }
  },
};
</script>