<template>
    <div class="input_box">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button class="btn btn_add" v-on:click="addTodo">
            ADD
        </button>
    </div> 
</template>

<script>
// v-model
// https://vuejs.org/v2/guide/forms.html

export default {
    data: function(){
        return{
            newTodoItem: ""
        }
    },
    methods:{
        addTodo: function(){
            console.log(this.newTodoItem);
            // this = TodoInput 컴포넌트
        
            // 저장 로직
            localStorage.setItem[this.newTodoItem, this.newTodoItem];
            // localStorage.setItem();
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
/* input */
.input_box{margin: 20px auto;display: -ms-flexbox;display: -webkit-flex;display: flex;align-items: center;justify-content: flex-start;width: 100%;}
.input_box input[type="text"]{width: 100%;padding: 12px 13px;height: 40px;margin-right: 3px;border: 1px solid #ddd;box-sizing: border-box;border-radius: 3px;}
.input_box input[type="text"]::placeholder{font-size: 1rem;font-weight: 400;color: #BCBCBC;letter-spacing: -.16px;}
.input_box input[type="text"]:-ms-input-placeholder {font-size: 1rem;font-weight: 400;color: #BCBCBC;letter-spacing: -.16px;}

/* button */
.btn{display: inline-block;font-size: 1rem;color: #fff;text-align: center;text-decoration: none;vertical-align: middle;border:none;cursor: pointer;}
.btn_add{padding: 11px 5px;border-radius: 3px;background: linear-gradient(to right, #6478fb, #8763fb);}
</style>