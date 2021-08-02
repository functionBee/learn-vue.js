<template>
    <header>
        <h1>{{ this.$store.state.headerText }}</h1>
    </header>
</template>

<script>
export default {

}
</script>


<style scoped>
/* 해당 컴포넌트에서만 유효한 스타일 지정시 scope 추가 */
.title{
    margin: 2.5rem 0 1.5rem;
    font-weight: 900;
    color: #2f3b52;
}
</style>