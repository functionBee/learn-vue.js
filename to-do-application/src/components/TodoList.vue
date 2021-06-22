<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
                {{ todoItem }}
                <button class="btn_remove" v-on:click="removeTodo(todoItem, index)">Delete</button>
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
.btn_remove{
    padding: 11px 11px;
    font-weight: 600;
    color: #f1f1f1;
    background: #414141;
    border-radius: 3px;
    cursor: pointer;
}

.btn_check{
    margin-right: 5px;
    line-height: 45px;
    color: #24054e;
}

.btn_completed{
    margin-left: auto;
    margin-right: auto;
    color: #055eb1;
}

</style>