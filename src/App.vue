<template>
    <div ref="cursor" class="cursor"></div>

    <div
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <Header>
            <template #changeThemeButton>
                <button @click="changeTheme();" class="changeThemeButton">Theme switch</button>
            </template>

            <template #changeLanguageButtons>
                <button @click="changeLanguage('pl');" class="changeLanguageButton">PL</button>

                <button @click="changeLanguage('en');" class="changeLanguageButton">EN</button>
            </template>
        </Header>

        {{ t('message') }}

        <br/>
        <br/>


    </div>

</template>

<script>
import Header from '@/components/Header.vue';
import useThemeSwitcher from '@/composables/useThemeSwitcher';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { onMounted } from '@vue/runtime-core';

export default {
    name: 'Portfolio',
    components: {
        Header
    },
    setup() {
        onMounted(() => {
            // cursor updating
            const cursor = document.querySelector('.cursor');
            document.addEventListener('mousemove', event => {
                let cssPositions = `top: ${event.pageY - 15}px; left: ${event.pageX - 15}px;`;
                cursor.setAttribute('style', cssPositions);
            });
        });

        const { container, cursor, theme, changeTheme } = useThemeSwitcher();

        const { t, changeLanguage } = useLanguageSwitcher();

        // set lang attribute
        document.documentElement.setAttribute(
            'lang',
            localStorage.getItem('language')
        );

        return {
            container,
            cursor,
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
        min-height: 200vh;

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
