<template>
    <div
        class="cursor"
        :class="{ 'cursor-dark-theme' : themeStore.value == 'dark',
                  'cursor-light-theme' : themeStore.value == 'light',
                  'cursor-hover-dark-theme' : (themeStore.value == 'dark' && cursorStore.hover),
                  'cursor-hover-light-theme' : (themeStore.value == 'light' && cursorStore.hover) }"
    ></div>

    <div
        class="container"
        :class="{ 'dark-theme' : themeStore.value == 'dark',
                  'light-theme' : themeStore.value == 'light' }"
    >
        <TheHeader>
            <template #changeThemeButton>
                <div
                    class="change-theme-button"
                    @mouseenter="cursorStore.toggle();"
                    @mouseleave="cursorStore.toggle();"
                    @click="themeStore.toggle(); cursorStore.toggle();"
                >
                    <img src="@/assets/icons/sun.svg" class="sun-icon" v-if="themeStore.value == 'dark'" >
                    <img src="@/assets/icons/moon.svg" class="moon-icon" v-else>
                </div>
            </template>

            <template #changeLanguageButtons>
                <button
                    class="change-language-button"
                    @mouseenter="cursorStore.toggle();"
                    @mouseleave="cursorStore.toggle();"
                    @click="changeLanguage('pl');"
                >
                    <img src="@/assets/flags/pl.png" class="flag">
                </button>

                <button
                    class="change-language-button"
                    @mouseenter="cursorStore.toggle();;"
                    @mouseleave="cursorStore.toggle();"
                    @click="changeLanguage('en');"
                >
                    <img src="@/assets/flags/en.png" class="flag">
                </button>
            </template>
        </TheHeader>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

import useLanguageSwitcher from '@/composables/useLanguageSwitcher';

import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

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

        const themeStore = useThemeStore();

        const cursorStore = useCursorStore();

        const { t, changeLanguage } = useLanguageSwitcher();

        return {
            changeLanguage, t,
            themeStore, cursorStore
        };
    }
}
</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';

#app {
    .cursor {
        z-index: 1000;
    }

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

        /* change theme button */
        .change-theme-button {
            font-size: 3rem;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
        }

        /* change language button - flags */
        .change-language-button {
            position: relative;
            width: 4rem;
            height: 4rem;
            color: inherit;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
        .flag {
            max-width: 100%;
            height: auto;
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
