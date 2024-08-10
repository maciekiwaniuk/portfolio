import antfu from '@antfu/eslint-config';

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true,
    },
    typescript: {
        overrides: {
            'ts/consistent-type-definitions': ['error', 'type'],
            'node/prefer-global/process': ['error', 'always'],
        },
    },
    vue: {
        overrides: {
            'vue/valid-template-root': 0,
        },
    },
    rules: {
        'curly': ['error', 'all'],
        'style/no-tabs': 'off',
        'yaml/indent': 'off',
    },
});
