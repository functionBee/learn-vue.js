<template>
    <div>
        <header>
            <h1>{{ $route.name }}page</h1>
            <NuxtLink to="/">Home page</NuxtLink>
            <NuxtLink to="/main">main page</NuxtLink>
            <NuxtLink to="/product">product page</NuxtLink>
        </header>
        <Nuxt/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


</style>