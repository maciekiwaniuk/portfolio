<template>
    <div
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <Header :changeTheme="changeTheme" :changeLanguage="changeLanguage" />

        {{ t('message') }}

        <br/>
        <br/>


    </div>

</template>

<script>
import Header from './components/Header.vue';
import useThemeSwitcher from './composables/useThemeSwitcher';
import useLanguageSwitcher from './composables/useLanguageSwitcher';

export default {
    name: 'Portfolio',
    components: {
        Header
    },
    setup() {
        const { container, theme, changeTheme } = useThemeSwitcher();

        const { t, changeLanguage } = useLanguageSwitcher();

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
