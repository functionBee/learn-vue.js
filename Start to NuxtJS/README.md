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


## Nuxt.js
> ���� ���̵� ������ �����ӿ�ũ
�� ���ø����̼��� �����Ҷ� �俢��, �����, Axios �� ���� ���̺귯������ �̸� �����Ͽ� �̱� ������ ���ø����̼�, ���� ���̵� ������, ���� �� ����Ʈ���� ���� ������ �� �ֵ��� ����

```
* �������̵� ������
  : �� �������� ������ �������� ��� �ۼ��ؼ� Ŭ���̾�Ʈ(������)�� ���� �� ȭ�� �׸��� ���

```
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


## Ŭ���̾�Ʈ ���̵� �������� ���� ���̵� �������� ������

*���� ����Ʈ*
- [���� Ŀ���� �� ����Ʈ](https://careers.google.com/)
- [ĸƾ �Ǳ� �� ��α�](https://joshua1988.github.io/)


## �� ���� ���̵� �������� ����ؾ� �ұ�?
���� ū ������ *�˻� ���� ����ȭ(SEO)*, *���� ������ ������* !
> 