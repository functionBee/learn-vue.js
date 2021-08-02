import Vue from 'vue';
import Vuex from 'vuex';

// Vue ���� �÷�����
Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];

        // vue lifecycle
        // https://vuejs.org/v2/guide/instance.html
        // https://v3.vuejs.org/api/options-lifecycle-hooks.html
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length ; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        headerText : 'To do it',
        todoItems: storage.fetch(),
    }
})