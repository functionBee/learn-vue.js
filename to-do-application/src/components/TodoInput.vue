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
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput();
            }
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
    height: 59.57px;
    background: linear-gradient(to right, #6478fb, #8763fb);
    border-radius: 0 5px 5px 0 ;

}

</style>