<template>
    <div
        class="navigation-links"
        :class="{ 'navigation-links-dark-theme': themeStore.value == 'dark',
                  'navigation-links-light-theme': themeStore.value == 'light' }"
    >

        <div
            v-if="props.alignment =='vertical'"
            :class="{ 'hidden': !props.navMenuOpened }"
            class="area-to-close-menu"
            @click="props.navMenuToggle();"
        >
            <button class="close-button">
                <span class="bar bar-to-right"></span>
                <span class="bar bar-to-left"></span>
            </button>
        </div>

        <ul
            :data-aos="linksAnimation"
            :class="{ 'vertical': props.alignment == 'vertical',
                      'horizontal': props.alignment == 'horizontal',
                      'hidden-text': (props.alignment == 'vertical' && !props.navMenuOpened) }">
            <li v-cursor-hover>{{ t('navbar.education') }}</li>
            <li v-cursor-hover>{{ t('navbar.experience') }}</li>
            <li v-cursor-hover>{{ t('navbar.skills') }}</li>
            <li v-cursor-hover>{{ t('navbar.projects') }}</li>
        </ul>

    </div>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useCursorHover } from '@/directives/useCursorHover';
import { ref } from '@vue/reactivity';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();

const props = defineProps({
    alignment: String,
    navMenuOpened: Boolean,
    navMenuToggle: Function
});

// animation only for menu on big screens
const linksAnimation = ref(props.alignment == 'horizontal' ? 'fade-left' : null);
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navigation-links {
    .area-to-close-menu {
        position: absolute;
        top: 0;
        left: 0;
        height: 10rem;
        width: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .close-button {
            flex-direction: column;
            justify-content: space-evenly;
            height: 3rem;
            width: 3rem;
            border: none;
            background-color: transparent;
            cursor: pointer;

            display: flex;
            .bar {
                height: 0.2rem;
                width: 80%;
                border-radius: 10px;
            }
            .bar-to-left {
                transform: rotate(45deg);
            }
            .bar-to-right {
                transform: translateY(17px) rotate(-45deg);
            }
        }
    }
    .hidden {
        display: none;
    }
    .hidden-text {
        font-size: 0 !important;
    }

    ul {
        text-transform: uppercase;
        display: flex;
        list-style-type: none;
        font-size: 1rem;

        transition: font-size ease 0.3s;

        li {
            position: relative;
            cursor: pointer;
            margin-left: 1rem;

            transition: color ease 0.1s,
                        transform ease 0.3s;
        }
    }

    .horizontal {
        justify-content: flex-start;
        align-items: center;

        li::before {
            content: '';
            position: absolute;
            bottom: -0.1rem;
            left: 0;
            width: 100%;
            height: 0.1rem;
            clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);

            transition: clip-path ease-out 0.3s;
        }
        li:hover::before {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    .vertical {
        align-content: center;
        flex-direction: column;
        row-gap: 2rem;
        font-size: 1rem;

        li {
            margin-right: 1rem;
        }
    }

}
.navigation-links-dark-theme {
    li::before {
        background-color: #dark[text-color];
    }

    .bar {
        background-color: #dark[text-color];
    }
}
.navigation-links-light-theme {
    li::before {
        background-color: #light[text-color];
    }

    .bar {
        background-color: #light[text-color];
    }
}


</style>
