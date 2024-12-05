<script setup lang="ts">
import NavigationLinksLink from '~/components/Navbar/NavigationLinksLink.vue';
import { HorizontalNavigationAlignment, VerticalNavigationAlignment } from '~/constants/alignment';
import { useNavMenuStore } from '~/stores/navMenu';
import { useThemeStore } from '~/stores/theme';
import type { AlignmentType } from '~/types/AlignmentType';

const props = defineProps<{
    alignment: AlignmentType;
}>();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();
</script>

<template>
    <div
        class="navigation-links"
        :class="{ 'navigation-links-dark-theme': themeStore.isDark,
                  'navigation-links-light-theme': themeStore.isLight }"
    >
        <div
            v-if="props.alignment === VerticalNavigationAlignment"
            :class="{ hidden: !navMenuStore.opened }"
            class="area-to-close-menu"
            @click="navMenuStore.close();"
        >
            <button class="close-button">
                <span class="bar bar-to-right" />
                <span class="bar bar-to-left" />
            </button>
        </div>

        <div>
            <nav
                :class="{ 'vertical': props.alignment === VerticalNavigationAlignment,
                          'horizontal': props.alignment === HorizontalNavigationAlignment,
                          'hidden-text': (props.alignment === VerticalNavigationAlignment && !navMenuStore.opened) }"
            >
                <NavigationLinksLink element="experience" :text="$t('navbar.experience')" :alignment="props.alignment" />
                <NavigationLinksLink element="education" :text="$t('navbar.education')" :alignment="props.alignment" />
                <NavigationLinksLink element="skills" :text="$t('navbar.skills')" :alignment="props.alignment" />
                <NavigationLinksLink element="projects" :text="$t('navbar.projects')" :alignment="props.alignment" />
                <NavigationLinksLink element="contact" :text="$t('navbar.contact')" :alignment="props.alignment" />
            </nav>
        </div>

        <div
            class="area-below-to-close-menu"
            :class="{ hidden: !navMenuStore.opened }"
            @click="navMenuStore.close();"
        />
    </div>
</template>

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
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 3rem;
            width: 3rem;
            border: none;
            background-color: transparent;
            cursor: pointer;

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

    .area-below-to-close-menu {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 12rem;
        height: 30vh;
    }
    .hidden {
        display: none;
    }
    .hidden-text {
        font-size: 0 !important;
    }
    nav {
        display: flex;
        text-transform: uppercase;
        font-size: 1rem;

        transition: font-size ease @hover-time;
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
