<template>
    <div
        class="header"
        :class="{ 'header-dark-theme' : themeStore.value == 'dark',
                  'header-light-theme' : themeStore.value == 'light'}"
    >
        <TheHeaderThemeButton />

        <div class="flags">
            <TheHeaderLanguageButtons />
        </div>

        <div class="menu">
            <ul>
                <li v-cursor-hover>{{ t('header.home') }}</li>
                <li v-cursor-hover>{{ t('header.education') }}</li>
                <li v-cursor-hover>{{ t('header.projects') }}</li>
                <li v-cursor-hover>{{ t('header.experience') }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import TheHeaderThemeButton from '@/components/TheHeaderThemeButton.vue';
import TheHeaderLanguageButtons from '@/components/TheHeaderLanguageButtons.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 100%;
    min-height: 5rem;
    border-top: 0.7rem solid @blue-color;
    font-family: 'LatoFont';
    font-weight: 700;
    transition: background-color ease 1s,
                color ease 1s;

    .menu {
        text-transform: uppercase;

        ul {
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1rem;

            li:first-of-type {
                position: relative;
            }
            li:first-of-type::after {
                content: '';

                position: absolute;
                left: 0;
                bottom: -0.15rem;
                width: 100%;

                border-width: 0 0 0.15rem 0;
                border-style: solid;
            }
            li {
                margin-left: 1rem;
                transition: color ease 0.1s,
                            transform ease 0.3s;
            }
            li:hover {
                cursor: pointer;
                transform: translateY(-0.2rem);
            }
        }
    }
}

.header-dark-theme {
    li:hover {
        color: #dark[text-color-hover];
    }
}

.header-light-theme {
    li:hover {
        color: #light[text-color-hover];
    }
}
</style>
