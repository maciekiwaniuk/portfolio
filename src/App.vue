<template>
    <div
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <h1>Hello, I am Maciek</h1>
        <h2>Software developer</h2>

        {{ t('message') }}

        <button @click="changeTheme();">Theme switch</button>

        <br/>
        <br/>

        <button @click="changeLanguage('pl');">PL</button>

        <br/>

        <button @click="changeLanguage('en');">EN</button>
    </div>

</template>

<script>
import { ref } from '@vue/reactivity';
import { useI18n } from 'vue-i18n'


export default {
    name: 'Portfolio',
    setup() {
        let theme = ref('dark');

        const container = ref(null);

        const changeTheme = () => {
            if (theme.value == 'dark') {
                container.value.classList.remove('dark-theme');
                container.value.classList.add('light-theme');
                theme.value = 'light'
            } else {
                container.value.classList.remove('light-theme');
                container.value.classList.add('dark-theme');
                theme.value = 'dark'
            }
        }

        const { t, locale } = useI18n({
            useScope: 'global'
        });

        const changeLanguage = (newLanguage) => {
            locale.value = newLanguage;
        };

        return {
            container,
            theme,
            changeTheme,
            changeLanguage,
            t
        };
    }
}
</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';

#app {
    .container {
        min-height: 100vh;

        transition: background-color ease 1s,
                    color ease 1s;
    }

    .dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];
    }

    .light-theme {
        background-color: #light[background-color];
        color: #light[text-color];
    }

}
</style>
