<template>
  <div class="btn_box">
      <button class="btn_clear" v-on:click="clearTodo">
        Clear all
      </button>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>
.btn_box{
  margin-top: 1.3rem;
  text-align: center;
}

.btn_clear{
  display: block;
  width: 8.5rem;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  font-size: 1.1rem;
  color: #fff;
  background: linear-gradient(to bottom, #6478fb, #8763fb);
  border-radius: 5px;
}

</style>