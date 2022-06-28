<template>
    <TheCursor />

    <div
        class="container"
        :class="{ 'container-dark-theme' : themeStore.value == 'dark',
                  'container-light-theme' : themeStore.value == 'light' }"
    >
        <TheHeader>
            <template #changeThemeButton>
                <div
                    class="change-theme-button"
                    v-cursor-hover
                    @click="themeStore.toggle();"
                >
                    <img src="@/assets/icons/sun.svg" class="sun-icon" v-if="themeStore.value == 'dark'" >
                    <img src="@/assets/icons/moon.svg" class="moon-icon" v-else>
                </div>
            </template>

            <template #changeLanguageButtons>
                <button
                    class="change-language-button"
                    v-cursor-hover
                    @click="changeLanguage('pl');"
                >
                    <img src="@/assets/flags/pl.png" class="flag">
                </button>

                <button
                    class="change-language-button"
                    v-cursor-hover
                    @click="changeLanguage('en');"
                >
                    <img src="@/assets/flags/en.png" class="flag">
                </button>
            </template>
        </TheHeader>
    </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheCursor from '@/components/TheCursor.vue';

import useLanguageSwitcher from '@/composables/useLanguageSwitcher';

import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

import { useCursorHover } from '@/directives/useCursorHover';

import addEventOnCursor from '@/functions/addEventOnCursor';
import setLangAttribute from '@/functions/setLangAttribute';

import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    addEventOnCursor();
    setLangAttribute();
});

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

const { t, changeLanguage } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

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

    .container-dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];

        /* buttons */
        .change-theme-button {

        }
    }

    .container-light-theme {
        background-color: #light[background-color];
        color: #light[text-color];


        /* buttons */
        .change-theme-button {

        }
    }

}
</style>
