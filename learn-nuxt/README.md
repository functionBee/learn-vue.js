# Nuxt.js �����ϱ�

## ����ȯ��
- Chrome
- Vue.js Dev Tools
- Node.js

## VSCode �÷����� ���
- �� Ȯ�� �÷����� : Vetur
- �� �ڵ� ������: Vue VSCode Snippets
- ���� �˻� :  ESLint, Prettier, ES6 String HTML

## Reference
- [Nuxt ���� ������](https://nuxtjs.org/)
- [Nuxt.js ��ġ �ȳ�����](https://nuxtjs.org/docs/get-started/installation/)
- [Nuxt �Ұ� - Cracking vue.js](https://joshua1988.github.io/vue-camp/nuxt/intro.html)
- [������ Ÿ�Խ�ũ��Ʈ �н� �ε��](https://www.inflearn.com/roadmaps/387)
- [SEO ���̵�](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko)
- [Vue.js Plugin ����](https://joshua1988.github.io/vue-camp/reuse/plugins.html)
- [Learn-nuxt �������丮](https://github.com/joshua1988/learn-nuxt/tree/master/backend)
- [JSONplaceholder](https://jsonplaceholder.typicode.com/)
- [JSONServer](https://github.com/typicode/json-server)
- [Async await ����](https://joshua1988.github.io/web-development/javascript/js-async-await/)

## Nuxt.js
> ���� ���̵� ������ �����ӿ�ũ
�� ���ø����̼��� �����Ҷ� �俢��, �����, Axios �� ���� ���̺귯������ �̸� �����Ͽ� �̱� ������ ���ø����̼�, ���� ���̵� ������, ���� �� ����Ʈ���� ���� ������ �� �ֵ��� ����

## Nuxt �� ����
- �˻� ���� ����ȭ
- �ʱ� ������Ʈ ���� ��� ���ҿ� ���꼺 ���
    + ESLint, Prettier
    + �����, ����� ���� ���̺귯�� ��ġ �� ���� ���� �ʿ�X
    + ���� ����� ����� ���. ���� ���� �ڵ�����
- ������ �ε� �ӵ��� ����� ���� ���
    + �������� �ϴ����� ������ �����ش�.
    + �𸣸� ����ĥ �� �ִ� �ڵ� ���ø����� �⺻���� ����
- �ڵ� ����� ����

## Nuxt Ư¡
- ���� ���̵� ������
- �԰�ȭ�� ��������
- pages ���� ����� �ڵ� ����� ����
- �񵿱� ������ ��û �Ӽ�
- ES6/ES56+ ��ȯ

## ������Ʈ ���� ���
```
npm init nuxt-app [project-name]
```

*���� ����*
- Programming language: JavaScript 
- Package manager: Npm
- UI framework: None
- Nuxt.js modules: (Press `<space>` to select, `<a>` to toggle all, `<i>` to invert selection)
- Linting tools: ESLint, Prettier 
- Testing framework: None
- Rendering mode: Universal (SSR / SSG)
- Deployment target: Server (Node.js hosting)
- Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
- Continuous integration: None
- Version control system: None

## ������Ʈ ���� ����
```
# cmd
tree "learn-nuxt"
```

## nuxt-link �±�
NuxtLink �±״� ������ <rounter-link> �±׿� ������ ���

```

# �Ľ�Į ���̽��� ��� ����
<NuxtLink to="/">Home page</NuxtLink>
<NuxtLink to="/main">main page</NuxtLink>
<NuxtLink to="/product">product page</NuxtLink>

```

## Nuxt�� ������ ȣ�� ��İ� API ����

1. axios ��ġ �� API ȣ��
```

#main.vue

import axios from 'axios';

export default {
    // Async await �̿�
    async  created() {
       const response = await axios.get('http://localhost:3000/products')
       console.log(response);
    }
}


```

2. ���� ��Ʈ ���� �� �޾Ƽ� ������ ǥ��

> �⺻ ��Ʈ ���� ���
```
```

3. Nuxt ������ ȣ�� ��� �ȳ�
4. asyncData ���� �� ESLint ��Ģ Ȯ��
5. asyncData �Ӽ� �ȳ� �� �ڵ� ����
6. asyncData �Ӽ� ���ǻ���
7. asyncData �Ӽ� ����

-----
## Ŭ���̾�Ʈ ���̵� ������(CSR;Client Side Rendering)

```
// src/main.js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

���� �ν��Ͻ��� �Ʒ� index.html ������ app ���̵� ���� �±׿� ������
* instance mounting(�ν��Ͻ��� �����Ǵ� ����)

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
## ���� ���̵� ������(SSR; Server Side Rendering)
�� �������� ������ �������� ��� �ۼ��ؼ� Ŭ���̾�Ʈ(������)�� ���� �� ȭ�� �׸��� ���

## Ŭ���̾�Ʈ ���̵� �������� ���� ���̵� �������� ������

*���� ����Ʈ*
- [���� Ŀ���� �� ����Ʈ](https://careers.google.com/)
- [ĸƾ �Ǳ� �� ��α�](https://joshua1988.github.io/)


## �� ���� ���̵� �������� ����ؾ� �ұ�?
���� ū ������ *�˻� ���� ����ȭ(SEO)*, *���� ������ ������* !
