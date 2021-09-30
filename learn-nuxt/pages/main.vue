<template>
    <div>
        <p>this is a main page </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    async created() {
        const response = await axios.get('http://localhost:3000/product');
        console.log(response);
    }
}
</script>

<style>

</style>