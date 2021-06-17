<template>
  <div id="app">
    <!-- 스타일 가이드에서는 템플릿에서 케밥 기법을 권고 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용(파스칼케이스)
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }
}

</script>
<style>
body{
  color: #333;
  text-align: center;
  background-color: #fff;
}

#app {
  font-family: 'Nanum Myeongjo', 'Noto Sans KR', 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

input{
  border-style: groove;
}

button{
  border-style: groove;
}
</style>
