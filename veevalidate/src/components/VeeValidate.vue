<template>
    <div>
        <label for="username">收件人姓名</label>
        <input type="text" name="username" v-validate="'required'">
        <span class="text-danger" v-if="errors.has('username')">姓名必須輸入</span>
    </div>
</template>

<script>
export default {
    name: 'VeeVaildate',
    data(){
        return{

        }
    }
}
</script>