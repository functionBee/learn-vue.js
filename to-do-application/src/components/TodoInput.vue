<template>
    <div class="input_box">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button class="btn btn_add" v-on:click="addTodo">
            <i class="im im-plus-circle"></i>
        </button>

        <!-- Modal Component -->
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!</h3>
            <p slot="body">아무것도 입력하지 않으셨습니다.</p>
            <div slot="footer"></div>
        </Modal>
        <!-- //Modal Component -->
    
    </div> 
</template>

<script>
import Modal from './common/Modal.vue'

// v-model
// https://vuejs.org/v2/guide/forms.html

export default {
    data: function(){
        return{
            // 새롭게 입력되는 텍스트
            newTodoItem: "",
            showModal: false
        }
    },
    methods:{
        addTodo: function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput: function(){
            // 초기화 로직
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
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