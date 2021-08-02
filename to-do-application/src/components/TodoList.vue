<template>
    <div>
        <transition-group name="list" tag="ul">
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
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        removeTodo(todoItem, index){
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete(todoItem, index){
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

/* list item transition effect */
/* https://vuejs.org/v2/guide/transitions.html */
.list-enter-active, 
.list-leave-active {
    transition: all .7s;
}

.list-enter, 
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

</style>