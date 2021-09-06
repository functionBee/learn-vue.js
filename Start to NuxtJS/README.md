# Nuxt.js 시작하기

## 개발환경
- Chrome
- Vue.js Dev Tools
- Node.js

## VSCode 플러그인 목록
- 뷰 확장 플러그인 : Vetur
- 뷰 코드 스니펫: Vue VSCode Snippets
- 문법 검사 :  ESLint, Prettier, ES6 String HTML

## Reference
- [Nuxt 공식 페이지](https://nuxtjs.org/)
- [Nuxt 소개 - Cracking vue.js](https://joshua1988.github.io/vue-camp/nuxt/intro.html)
- [인프런 타입스크립트 학습 로드맵](https://www.inflearn.com/roadmaps/387)
- [SEO 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko)
- [Vue.js Plugin 문서](https://joshua1988.github.io/vue-camp/reuse/plugins.html)
- 

## Nuxt.js
> 서버 사이드 렌더링 프레임워크
웹 어플리케이션을 제작할때 뷰엑스, 라우터, Axios 와 같은 라이브러리들을 미리 구성하여 싱글 페이지 애플리케이션, 서버 사이드 렌더링, 정적 웹 사이트르르 쉽게 제작할 수 있도록 도움

## Nuxt 의 장점
- 검색 엔진 최적화
- 초기 프로젝트 설정 비용 감소와 생산성 향상
    + ESLint, Prettier
    + 라우터, 스토어 등의 라이브러리 설치 및 설정 파일 필요X
    + 파일 기반의 라우팅 방식. 설정 파일 자동생성
- 페이지 로딩 속도와 사용자 경험 향상
    + 브라우저가 하는일을 서버에 나눠준다.
    + 모르면 지나칠 수 있는 코드 스플리팅이 기본으로 설정

## Nuxt 특징
- 서버 사이드 렌더링
- 규격화된 폴더구조
- pages 폴더 기반의 자동 라우팅 설정
- 비동기 데이터 요청 속성
- ES6/ES56+ 변환

## 프로젝트 생성 방법
```
npm init nuxt-app [project-name]
```

*설정 내용*
- Programming language: JavaScript 
- Package manager: Npm
- UI framework: None
- Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
- Linting tools: ESLint, Prettier    
- Testing framework: None
- Rendering mode: Universal (SSR / SSG)
- Deployment target: Server (Node.js hosting)
- Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
- Continuous integration: None
- Version control system: Git

## 

-----
## 클라이언트 사이드 렌더링(CSR;Client Side Rendering)

```
// src/main.js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

뷰의 인스턴스는 아래 index.html 파일의 app 아이디를 갖는 태그에 부착됨
* instance mounting(인스턴스가 부착되는 동작)

```
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="">
  <head>
    <!-- ... -->
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
## 서버 사이드 렌더링(SSR; Server Side Rendering)
웹 페이지의 내용을 서버에서 모두 작성해서 클라이언트(브라우저)로 보낸 뒤 화면 그리는 기법

## 클라이언트 사이드 렌더링과 서버 사이드 렌더링의 차이점

*참고 사이트*
- [구글 커리어 웹 사이트](https://careers.google.com/)
- [캡틴 판교 웹 블로그](https://joshua1988.github.io/)


## 왜 서버 사이드 렌더링을 사용해야 할까?
가장 큰 목적은 *검색 엔진 최적화(SEO)*, *빠른 페이지 렌더링* !
