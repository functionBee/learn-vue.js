<template>
  <div id="app">
      <!-- v-bind:(하위컴포넌트에서 정의한)프롭스 속성 이름="상위 컴포넌트의 데이터 이름" -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function(){
    return {
      // props
      str: 'Header Area'
    }
  },
  components:{
    'app-header': AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'Change str'
    }
  }
}
</script>

<style>
</style>