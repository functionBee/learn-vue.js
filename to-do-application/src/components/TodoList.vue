<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
                <button
                    v-bind:class="{btn_completed: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, index)">
                    <i class="im im-check-mark"></i>
                </button>
                <span v-bind:class="{text_completed: todoItem.completed}">{{ todoItem.item }}</span>
                <button class="btn_remove" v-on:click="removeTodo(todoItem, index)">
                    <i class="im im-trash-can"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        removeTodo: function(todoItem, index){
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete: function(todoItem, index){
            this.$emit('toggleItem', todoItem, index);
        }
    },
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