<template>
  <h1 class="logo"><img src="./assets/logo.png" alt="HolaBee logo" /></h1>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 30px auto;
  background-color: #B30822;
  border: 3px solid #B30822;
  border-radius: 50%;

  img{
      position: absolute;
      left: 50%;
      top: 50%;
      margin: auto;
      transform: translate(-50%, -50%) scale(0.22);
  }
}
</style>
