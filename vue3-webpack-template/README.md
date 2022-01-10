# :tiger: bundler-webpack

webpack 번들러를 이용한 기본 프로젝트 환경 설정

-   [preview](https://admiring-hypatia-76653d.netlify.app/)

## :evergreen_tree: 설정

```bash

# 패키지
$ npm i -D webpack webpack-cli webpack-dev-server@next

```

```bash

#package.json
{
    ...
  "scripts": {
    "dev" : "webpack-dev-server --mode development",
    "build" : "webpack --mode production"
  },
}

```

```javascript
// webpack.config.js
// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    // 결과물(번들)을 반환하는 설정
    output: {
        // nodejs에서 필요로 하는 절대경로 설정
        // __dirname : 해당 파일의 실제 경로를 나타내는 nodejs 전역 변수
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // 기존에 만들었던 결과물 제거 후 초기화
        clean: true,
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html',
        }),
    ],
};
```

### :seedling: 1. 정적 파일 연결

```bash

#  패키지 설치
$ npm i -D copy-webpack-plugin

```

```javascript

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new CopyPlugin({
            patterns : [
                { from: 'static' }
            ]
        })
    ],
};

```

### :seedling: 2. `.css` 파일을 `.js`에서 import 하여 사용하기

```bash

# 패키지 설치
$ npm i -D css-loader style-loader

```

```javacsript

// webpack.config.js
module.exports = {
		...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
};

```

-   `css-loader` : 자바스크립트에서 css 를 해석하는 용도
-   `style-loader` : `HTML`의 스타일 부분에 삽입하기 위한 용도

### :seedling: 3. SCSS

```bash

# 패키지 설치
$ npm i -D sass sass-loader node-sass

```

-   `sass-loader` : webpack을 통해 sass 파일을 읽기 위한 용도
-   `sass` : 읽어들인 sass 파일을 문법 해석하기 위한 용도

```javacsript

// webpack.config.js
module.exports = {
		...
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ]
    },
};

```

### :seedling: 4. Autoprefixer(PostCSS)

```bash

# 패키지 설치
$ npm i -D postcss autoprefixer postcss-loader

```

```javacsript

// webpack.config.js
module.exports = {
		...
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
};

```

```javacsript

//.postcssrc.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ],
};

```

### :seedling: 5. Babel

```bash

# 3개의 패키지 설치
$ npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime

```

```javascript
// .babelrc.js 파일 생성
module.exports = {
    presets: ['@babel/preset-env'],
    plugin: [['@babel/plugin-transform-runtime']],
};
```

```bash

# 패키지 설치
$ npm i -D babel-loader

```

```javacsript

// webpack.config.js
module.exports = {
		...
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
};

```

### :seedling: 6. file-loader 패키지 설치

: 특정한 파일들을 읽어서 브라우저에 출력할 수 있는 웹팩의 loader

```bash

$ yarn add --dev file-loader
# = npm i -D file-loader

```

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
    // .js, .vue 확장자를 따로 명시하지 않아도 문제 없이 동작할 수 있도록 설정
    resolve: {
        extensions: ['.js', '.vue'],
        // alias(경로별칭)
        alias: {
            '~': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: ['file-loader'],
            },
        ],
    },
};
```

### :seedling: 7. eslint 패키지 설치

```bash

$ yarn add --dev eslint eslint-plugin-vue babel-eslint
# = npm i -D eslint

```

`.eslintrc.js` 파일 생성

```javascript
// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        // vue
        // 'plugin:vue/vue3-essential', // LV1
        'plugin:vue/vue3-strongly-recommended', // LV2
        // 'plugin:vue/vue3-recommended', // LV3
        // javascript
        'eslint:recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
    },
};
```

## Reference

-   [Webpack](https://webpack.js.org/)
-   [output.clean](https://webpack.js.org/configuration/output/#outputclean)
-   [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
-   [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
-   [css-loader](https://yamoo9.gitbook.io/webpack/webpack/webpack-loaders/css-loader)
-   [babel-loader](https://github.com/babel/babel-loader)
-   [file-loader](https://vue-loader.vuejs.org/guide/asset-url.html)
-   [eslint](https://eslint.vuejs.org/user-guide/)
