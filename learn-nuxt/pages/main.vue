<template>
    <div>
        <p>this is a main page </p>
        <div>{{ products }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            products: [],
        }
    }
    async created() {
        const response = await axios.get('http://localhost:3000/product');
        console.log(response);
        this.products = response.data
    }
}
</script>

<style>

</style>