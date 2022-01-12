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


### Reference
- [Vue.js](https://cli.vuejs.org/config/)
- [Vue.js Guide](https://v3.ko.vuejs.org/guide/introduction.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)