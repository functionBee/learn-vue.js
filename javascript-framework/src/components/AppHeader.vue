<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <!-- v-on:click="method  이름" -->
        <button v-on:click="sendEvent">Send</button>
    </header>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        sendEvent: function(){
            this.$emit("renew");
            // renew : '값을 갱신하겠다' 는 의미
        }
    }
}
</script>

<style>

</style>