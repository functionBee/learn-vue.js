<template>
    <div class="input_box">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button class="btn btn_add" v-on:click="addTodo">
            <i class="im im-plus-circle"></i>
        </button>
    </div> 
</template>

<script>
// v-model
// https://vuejs.org/v2/guide/forms.html

export default {
    data: function(){
        return{
            // 새롭게 입력되는 텍스트
            newTodoItem: ""
        }
    },
    methods:{
        addTodo: function(){
            console.log(this.newTodoItem);
            // this = TodoInput 컴포넌트
        
            // 저장 로직
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            // localStorage.setItem();
            // Reference >> localStorage 
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            this.clearInput();
        },
        clearInput: function(){
            // 초기화 로직
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
.btn_add{
    padding: 11px 11px;
    background: linear-gradient(to right, #6478fb, #8763fb);
    border-radius: 0 30px 30px 0 ;
}
</style>