<template>
    <div
        class="navigation"
        :class="{ 'navigation-dark-theme' : themeStore.value == 'dark',
                  'navigation-light-theme' : themeStore.value == 'light'}"
    >
        <button class="nav-hamburger-toggler" v-cursor-hover>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <div class="nav-links">
            <ul>
                <li v-cursor-hover>{{ t('navbar.home') }}</li>
                <li v-cursor-hover>{{ t('navbar.education') }}</li>
                <li v-cursor-hover>{{ t('navbar.projects') }}</li>
                <li v-cursor-hover>{{ t('navbar.experience') }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useCursorHover } from '@/directives/useCursorHover';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navigation {
    .nav-hamburger-toggler {
        flex-direction: column;
        justify-content: space-evenly;
        width: 3rem;
        height: 1.8rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        @media (min-width: 600px) {
            display: none;
        }

        .bar {
            height: 0.3rem;
            width: 100%;
            border-radius: 10px;
        }
    }
    .nav-links {
        text-transform: uppercase;

        ul {
            list-style-type: none;
            justify-content: flex-start;
            align-items: center;
            font-size: 1rem;
            display: none;
            @media (min-width: 600px) {
                display: flex;
            }

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


.navigation-dark-theme {
    .bar {
        background-color: #dark[text-color];
    }
    li:hover {
        color: #dark[text-color-hover];
    }
}
.navigation-light-theme {
    .bar {
        background-color: #light[text-color];
    }
    li:hover {
        color: #light[text-color-hover];
    }
}
</style>
