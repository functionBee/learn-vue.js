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