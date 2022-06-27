<template>
    <div
        ref="cursor"
        class="cursor"
        :class="{ 'cursor-dark-theme' : theme == 'dark',
                  'cursor-light-theme' : theme == 'light',
                  'cursor-hover-dark-theme' : (theme == 'dark' && cursorHover),
                  'cursor-hover-light-theme' : (theme == 'light' && cursorHover)}"
    ></div>

    <div
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <TheHeader>
            <template #changeThemeButton>
                <button
                    @mouseenter="cursorHover = true;"
                    @mouseleave="cursorHover = false;"
                    @click="changeTheme();"
                    class="change-theme-button"
                >Theme switch</button>
            </template>

            <template #changeLanguageButtons>
                <button
                    @mouseenter="cursorHover = true;"
                    @mouseleave="cursorHover = false;"
                    @click="changeLanguage('pl');"
                    class="change-language-button"
                >PL</button>

                <button
                    @mouseenter="cursorHover = true;"
                    @mouseleave="cursorHover = false;"
                    @click="changeLanguage('en');"
                    class="change-language-button"
                >EN</button>
            </template>
        </TheHeader>

        {{ t('message') }}

        <br/>
        <br/>


    </div>

</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

import useThemeSwitcher from '@/composables/useThemeSwitcher';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';

import addEventOnCursor from '@/functions/addEventOnCursor';
import setLangAttribute from '@/functions/setLangAttribute';

import { onMounted, ref } from '@vue/runtime-core';

export default {
    name: 'Portfolio',
    components: {
        TheHeader
    },
    setup() {
        onMounted(() => {
            addEventOnCursor();
            setLangAttribute();
        });

        const { container, cursor, theme, changeTheme } = useThemeSwitcher();

        const { t, changeLanguage } = useLanguageSwitcher();

        let cursorHover = ref(false);

        return {
            container, cursor, theme, changeTheme,
            changeLanguage, t,
            cursorHover
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

        .change-theme-button {

        }
        .change-theme-button:hover {
            cursor: pointer;
        }
    }

    .light-theme {
        background-color: #light[background-color];
        color: #light[text-color];

        .change-theme-button {

        }
        .change-theme-button:hover {
            cursor: pointer;
        }
    }

}
</style>
