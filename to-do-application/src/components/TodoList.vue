<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
                <i class="im im-check-mark" 
                   v-bind:class="{btn_completed: todoItem.completed}" 
                   v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{text_completed: todoItem.completed}">{{ todoItem.item }}</span>
                <button class="btn_remove" v-on:click="removeTodo(todoItem, index)"><i class="im im-trash-can"></i></button>
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
        toggleComplete: function(todoItem, index){
            console.log(todoItem);
        }
    },
    // vue lifecycle
    // https://vuejs.org/v2/guide/instance.html
    // https://v3.vuejs.org/api/options-lifecycle-hooks.html
    created: function(){
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length ; i++){
                if(localStorage.key(i) !== 'loglevel:-webpack-dev-server'){
                    // this.todoItems.push(localStorage.key(i));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    // console.log(localStorage.key[i]);
                }
            }
        }
    }
}
</script>

<style scoped>
.btn_completed{
    color: #ddd;
}
.text_completed{
    text-decoration: line-through;
    color: #ddd;
}
</style>