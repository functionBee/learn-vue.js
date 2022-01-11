# 1. LearnVueJS

### 1.1 [To do Application](https://github.com/holabee/LearnVueJS/tree/main/to-do-application)

Vue.js 학습을 통해 To do application 구현

### 1.2 [Nuxt.js](https://github.com/holabee/LearnVueJS/tree/main/learn-nuxt)

Nuxt.js에 대한 강의 학습

# 2. 새로운 프로젝트 생성 방법

### 2.1 [Vue Cli Project](https://github.com/holabee/LearnVueJS/tree/main/test-vue3)

Vue cli을 이용한 프로젝트 생성

```bash

# node를 이용하여 vue cli 전역 설치
$ npm i -g @vue/cli

# Vue cli을 이용한 프로젝트 생성
$ vue create 프로젝트명

```

### 2.2 [Vue3-webpack-template](https://github.com/holabee/LearnVueJS/tree/main/vue3-webpack-template)

digit을 사용하여 `holabee/bundler-webpack` 레파지토리 기본 개발 프로젝트 환경 구성을(ex. webpack bundler, packages)을 가져와 Vue(3)에서의 기본 프로젝트 환경 템플릿 생성

**새로운 생성 방법**

-   `vue` 설치
    ```bash
        yarn add vue@next
        # npm i vue@next
    ```
-   js/main.js 파일 삭제
-   src 디렉토리 생성 후 `App.vue`, `main.js` 파일 생성

    ```bash

      src/
      ├── App.vue
      └── main.js

    ```

-   기타 패키지 추가 설치

    ```bash

    yarn add -D vue-loader@next vue-style-loader @vue/compiler-sfc
    # = npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc

    ```

    ```javascript
    // webpack.config.js
    const { VueLoaderPlugin } = require('vue-loader');
    module.exports = {
        entry: './src/main.js',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader',
                },
                {
                    test: /\.s?css$/,
                    use: ['vue-style-loader', 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                },
            ];
        },
        plugins: [
            new VueLoaderPlugin(),
        ],
    }
    ```

# 3. Reference

-   [Vue](https://v3.ko.vuejs.org/)
-   [vue cli](https://cli.vuejs.org/)
-   [vue-loader](https://yarnpkg.com/package/vue-loader)
-   [vue-style-loader](https://yarnpkg.com/package/vue-style-loader)
-   [@vue/compiler-sfc](https://yarnpkg.com/package/@vue/compiler-sfc)
