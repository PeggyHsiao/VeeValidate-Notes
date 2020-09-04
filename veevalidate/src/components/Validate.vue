<template>
    <div>
        <input type="text" name="username" v-validate="'required'">
    </div>
</template>

<script>
export default {
    name: 'Vaildate',
    data(){
        return{

        }
    }
}
</script>