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
  background-color: rgb(220, 220, 220);
}

#app {
  font-family: 'Nanum Myeongjo', 'Noto Sans KR', 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

button, input, select, textarea{border-radius:0;border:none;background:0 0;-webkit-appearance:none;-moz-appearance: none;appearance: none;outline: none;text-decoration: none;cursor: pointer;-webkit-text-size-ajust:none;}

button{
  border-style: none;
}

ul{
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}

li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: .3rem 0;
    padding: .3rem .7rem;
    background: #fff;
    border-radius: 32px;
}

i{
  vertical-align: middle;
}

/* input */
.input_box{margin: 20px auto;display: -ms-flexbox;display: -webkit-flex;display: flex;align-items: center;justify-content: flex-start;width: 100%;}
.input_box input[type="text"]{width: 100%;padding: 11px 11px;height: 59.57px;margin-right: 3px;border: 1px solid #ddd;box-sizing: border-box;background-color: #fff;border-radius: 30px 0 0 30px ;}
.input_box input[type="text"]::placeholder{font-size: 1rem;font-weight: 400;color: #BCBCBC;letter-spacing: -.16px;}
.input_box input[type="text"]:-ms-input-placeholder {font-size: 1rem;font-weight: 400;color: #BCBCBC;letter-spacing: -.16px;}

/* button */
.btn{display: inline-block;font-size: 1rem;color: #fff;text-align: center;text-decoration: none;vertical-align: middle;border:none;cursor: pointer;}

.btn_remove{
    padding: 11px 11px;
    font-weight: 600;
    color: #f1f1f1;
    background: #414141;
    border-radius: 50%;
}
</style>
