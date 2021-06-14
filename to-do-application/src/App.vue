<template>
  <div id="app">
    <!-- 스타일가이드에서는 템플릿에서 케밥기법을 권고 -->
    <TodoHeader></TodoHeader>
    <TodoList></TodoList>
    <TodoInput></TodoInput>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용(파스칼케이스 )
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
  }
}

</script>
<style>
#app {
  font-family: 'Nanum Myeongjo', 'Noto Sans KR', 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
