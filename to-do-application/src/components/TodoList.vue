<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
                <span class="btn_check"><i class="im im-check-mark-circle-o" v-on:click="toggleComplete"></i></span>
                {{ todoItem }}
                <button class="btn_remove" v-on:click="removeTodo(todoItem, index)"><i class="im im-x-mark-circle-o"></i></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            todoItems: [],
        }
    },
    methods:{
        removeTodo: function(todoItem, index){
            // console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(){

        }
    },
    // vue lifecycle
    // https://vuejs.org/v2/guide/instance.html
    // https://v3.vuejs.org/api/options-lifecycle-hooks.html
    created: function(){
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length ; i++){
                if(localStorage.key(i) !== 'loglevel:-webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                    // console.log(localStorage.key[i]);
                }
            }
        }
    }
}
</script>

<style scoped>

</style>