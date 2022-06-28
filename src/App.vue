<template>
    <div
        ref="cursor"
        class="cursor"
        :class="{ 'cursor-dark-theme' : theme == 'dark',
                  'cursor-light-theme' : theme == 'light',
                  'cursor-hover-dark-theme' : (theme == 'dark' && store.cursorHover),
                  'cursor-hover-light-theme' : (theme == 'light' && store.cursorHover) }"
    ></div>

    <div
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <TheHeader>
            <template #changeThemeButton>
                <div
                    @mouseenter="store.cursorHover = true;"
                    @mouseleave="store.cursorHover = false;"
                    @click="changeTheme();"
                    class="change-theme-button"
                >
                    <img src="@/assets/icons/sun.svg" class="sun-icon" v-if="theme == 'dark'" >
                    <img src="@/assets/icons/moon.svg" class="moon-icon" v-else>
                </div>
            </template>

            <template #changeLanguageButtons>
                <img
                    src="@/assets/flags/pl.png"
                    class="change-language-button"
                    @mouseenter="store.cursorHover = true;"
                    @mouseleave="store.cursorHover = false;"
                    @click="changeLanguage('pl');"
                >

                <img
                    src="@/assets/flags/en.png"
                    class="change-language-button"
                    @mouseenter="store.cursorHover = true;"
                    @mouseleave="store.cursorHover = false;"
                    @click="changeLanguage('en');"
                >
            </template>
        </TheHeader>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

import useThemeSwitcher from '@/composables/useThemeSwitcher';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { store } from '@/composables/store';

import addEventOnCursor from '@/functions/addEventOnCursor';
import setLangAttribute from '@/functions/setLangAttribute';

import { onMounted } from '@vue/runtime-core';

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

        return {
            container, cursor, theme, changeTheme,
            changeLanguage, t,
            store
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

        /* icons */
        .sun-icon {
            width: 2.5rem;
            // change black svg into white
            filter: invert(100%);
        }
        .moon-icon {
            width: 2.5rem;
        }

        /* buttons */
        .change-theme-button {
            font-size: 3rem;
        }
        .change-theme-button:hover {
            cursor: pointer;
        }

        .change-language-button {
            width: 3rem;
            height: 3rem;
            margin-right: 0.5rem;
        }
        .change-language-button:hover {
            cursor: pointer;
        }
    }

    .dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];

        /* buttons */
        .change-theme-button {

        }
    }

    .light-theme {
        background-color: #light[background-color];
        color: #light[text-color];


        /* buttons */
        .change-theme-button {

        }
    }

}
</style>
