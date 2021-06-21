<template>
    <div>
        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem"></li>
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
    // vue lifecycle 
    // https://vuejs.org/v2/guide/instance.html
    // https://v3.vuejs.org/api/options-lifecycle-hooks.html
    created: function(){
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length ; i++){

                if(localStorage.key[i] !== 'loglevel:-webpack-dev-server'){
                    // console.log(localStorage.key[i]);
                    this.todoItems.push(localStorage.key[i]);
                }
            }
        }
    }
}
</script>

<style>

</style>