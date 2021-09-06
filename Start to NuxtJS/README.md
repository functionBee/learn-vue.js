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
- [Nuxt �Ұ� - Cracking vue.js](https://joshua1988.github.io/vue-camp/nuxt/intro.html)
- [������ Ÿ�Խ�ũ��Ʈ �н� �ε��](https://www.inflearn.com/roadmaps/387)
- [SEO ���̵�](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko)
- [Vue.js Plugin ����](https://joshua1988.github.io/vue-camp/reuse/plugins.html)
- 

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
