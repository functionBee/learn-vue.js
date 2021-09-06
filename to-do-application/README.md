# Project : To do Application
> Vue.js 를 이용하여 할일 삭제, 추가, 모두 삭제 기능 구현

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---
# Learn Vue.js

## 왜 mutations로 상태를 변경해야 하는가?
- 여러 개의 컴포넌트에서 아래와 같이 state 값을 변경하는 경우 *어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다*
```
methods: {
    increaseCounter(){
        this.$store.state.counter ++;
    }
}
```
- 특점 시점에 어떤 컴포넌트가 state 를 접근하여 변경한 건지 확인하기 어렵기 때문
- 따라서, 뷰의 반응서을 거르지 않게 명시적으로 상태 변활르 수행. *반응성, 디버깅, 테스팅 혜택*

## Vuex 구조
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태


## actions ?
- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
- 데이터 요청, Promise, ES6 async 과 같은 비동기 처리는 모두 actions에 선언

```
// 예제 코드
// store.js
state: {
    num: 10
},
muations: {
    doubleNumber(state){
        state.num * 2;
    }
},
actions: {
    delayDoubleNumber(context){
        // context로 store 의 메서드와 속성 접근
        context.commit('doubleNumber');
    }
}

// App.vue
this.$store.dispatch('delayDoubleNumber');

```

```
// 비동기 코드 예제1
// store.js
mutations : {
    addCounter(state){
        state.counter++
    },
},
actions:{
    delayAddCounter(context){
        setTimeout(()=> context.commit('addCounter), 2000);
    }
}

// App.vue
methods:{
    incrementCounter(){
        this.$store.dispatch('delayedAddConter');
    }
}

```

```
// 비동기 코드 예제2
// store.js
mutations : {
    addCounter(state,fetchedData){
        state.product = fetchedData;
    },
},
actions:{
    fetchProductData(context){
        return axios.get('api 주소...').then(response => contexts.commit('setData', response));
    }
}

// App.vue
methods:{
    getProduct(){
        this.$store.dispatch('fetchProductData');
    }
}
```

## 왜 actions에 비동기 로직을 선언해야 하는가?
- 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
> state 값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 넣어야 한다.


## Helper 함수
Store 에 있는 아래 4가지 속성들을 간편하게 코딩하는 방법

- state ->  mapState
- getters -> mapGetters
- mutaions -> mapMutatoins
- actions -> mapActions

1. 헬퍼의 사용법
: 헬퍼를 사용하고자 하는 vue 파일에서 아래와 같이 해당 헬퍼를 로딩

```
// App.vue
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

export default{
    computed(){
        ...mapState(['num']), /// ... 
        ...mapGettes(['countedNum']),
    },
    methods: {
        ...mapMutaions(['clickBtn]),
        ...mapActions(['asyncClickBtn])
    }
}
```



## ES6 Spread 연산자 소개


---

## Reference
- [Vue](https://kr.vuejs.org/v2/guide/)
- [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [자바스크립트 비동기 처리 이해하기](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)



