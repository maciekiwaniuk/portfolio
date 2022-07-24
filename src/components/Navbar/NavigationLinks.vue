<template>
    <div
        class="navigation-links"
        :class="{ 'navigation-links-dark-theme': themeStore.value == 'dark',
                  'navigation-links-light-theme': themeStore.value == 'light' }"
    >

        <div
            v-if="props.alignment =='vertical'"
            :class="{ 'hidden': !navMenuStore.opened }"
            class="area-to-close-menu"
            @click="navMenuStore.toggle();"
        >
            <button class="close-button">
                <span class="bar bar-to-right"></span>
                <span class="bar bar-to-left"></span>
            </button>
        </div>

        <div :data-aos="linksAnimation">
            <nav
                :class="{ 'vertical': props.alignment == 'vertical',
                        'horizontal': props.alignment == 'horizontal',
                        'hidden-text': (props.alignment == 'vertical' && !navMenuStore.opened) }"
            >
                <NavigationLinksLink element="education" :text="t('navbar.education')" :alignment="props.alignment" />
                <NavigationLinksLink element="experience" :text="t('navbar.experience')" :alignment="props.alignment" />
                <NavigationLinksLink element="skills" :text="t('navbar.skills')" :alignment="props.alignment" />
                <NavigationLinksLink element="projects" :text="t('navbar.projects')" :alignment="props.alignment" />
            </nav>
        </div>

    </div>
</template>

<script setup>
import NavigationLinksLink from '@/components/Navbar/NavigationLinksLink.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';
import { ref } from '@vue/reactivity';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

const props = defineProps({
    alignment: String
});

// animation only for menu on big screens
const linksAnimation = ref(props.alignment == 'horizontal' ? 'zoom-in-up' : null);
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

    nav {
        text-transform: uppercase;
        display: flex;
        list-style-type: none;
        font-size: 1rem;

        transition: font-size ease 0.3s;
    }

    .horizontal {
        justify-content: flex-start;
        align-items: center;
    }
    .vertical {
        align-content: center;
        flex-direction: column;
        row-gap: 2rem;
        font-size: 1rem;
    }

}

.navigation-links-dark-theme {
    .bar {
        background-color: #dark[text-color];
    }
}
.navigation-links-light-theme {
    .bar {
        background-color: #light[text-color];
    }
}


</style>
