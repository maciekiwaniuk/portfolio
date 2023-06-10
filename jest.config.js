/** @type {import('jest').Config} */
const config = {
    verbose: true,
    moduleFileExtensions: [
        'js', 'jsx', 'ts', 'vue'
    ],
    transform: {
        '^.+\\.(js|ts)$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$',
        '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$',
        '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$',
    ],
    roots: [
        '<rootDir>/tests'
    ],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};

module.exports = config;
