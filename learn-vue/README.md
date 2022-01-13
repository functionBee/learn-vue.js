# learn-vue
[To do Application](https://github.com/holabee/LearnVueJS/tree/main/to-do-application) 작업 시 기재하였던 문법 내용 참고 및 내용 추가

## 1. Project setup

```bash

npm install

```

## 2. Vue.js 문법

### 2.1 인스턴스와 라이프 사이클

- **어플리케이션 & 컴포넌트 인스턴스**
: 모든 Vue 어플리케이션의 인스턴스에 의해 노출된 메소드들은 메소드 체이닝을 사용할 수 있다.

```javascript

// 메소드들이 동일한 인스턴스를 반환하기 때문에 
Vue.createApp({})
    .component('SearchInput', SearchInputComponent)
    .directive('focus', FocusDirective)
    .use(LocalePlugin)

```

- **라이프사이클 훅**
![라이프사이클 다이어그램](https://v3.ko.vuejs.org/images/lifecycle.svg)


```javascript

export default {
  data () {
    return {
      count: 2
    }
  },
  beforeCreate () {
    console.log('beforeCreate!', this.count)
  },
  created () {
    console.log('Created!', this.count)
    console.log(document.querySelector('h1'))
  },
  beforeMount () {
    console.log('beforeMount!')
    console.log(document.querySelector('h1'))
  },
  mounted () {
    console.log('Mounted!')
    console.log(document.querySelector('h1'))
  }
}

```

- **`v-once`**
  : 데이터를 단 한번만 렌더링 하고 그 다음에 데이터가 변경되더라도 화면을 갱신하지 않음


- **원시 HTML**
  : 이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석하기 때문에 실제 HTML을 출력하려면 `v-html` 디렉티브를 사용해야함



### Reference
- [Vue.js](https://cli.vuejs.org/config/)
- [Vue.js Guide](https://v3.ko.vuejs.org/guide/introduction.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Directives](https://v3.vuejs.org/api/directives.html#v-text)
