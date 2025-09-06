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
        :class="[
            $style.navigationLinks,
            { [$style.navigationLinksDarkTheme]: themeStore.isDark,
              [$style.navigationLinksLightTheme]: themeStore.isLight }
        ]"
    >
        <div
            v-if="props.alignment === VerticalNavigationAlignment"
            :class="[$style.areaToCloseMenu, { [$style.hidden]: !navMenuStore.opened }]"
            @click="navMenuStore.close();"
        >
            <button :class="$style.closeButton">
                <span :class="[$style.bar, $style.barToRight]" />
                <span :class="[$style.bar, $style.barToLeft]" />
            </button>
        </div>

        <div>
            <nav
                :class="[
                    { [$style.vertical]: props.alignment === VerticalNavigationAlignment,
                      [$style.horizontal]: props.alignment === HorizontalNavigationAlignment,
                      [$style.hiddenText]: (props.alignment === VerticalNavigationAlignment && !navMenuStore.opened) }
                ]"
            >
                <NavigationLinksLink element="experience" :text="$t('navbar.experience')" :alignment="props.alignment" />
                <NavigationLinksLink element="education" :text="$t('navbar.education')" :alignment="props.alignment" />
                <NavigationLinksLink element="skills" :text="$t('navbar.skills')" :alignment="props.alignment" />
                <NavigationLinksLink element="projects" :text="$t('navbar.projects')" :alignment="props.alignment" />
                <NavigationLinksLink element="contact" :text="$t('navbar.contact')" :alignment="props.alignment" />
            </nav>
        </div>

        <div
            :class="[$style.areaBelowToCloseMenu, { [$style.hidden]: !navMenuStore.opened }]"
            @click="navMenuStore.close();"
        />
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.navigationLinks {
    .areaToCloseMenu {
        position: absolute;
        top: 0;
        left: 0;
        height: 10rem;
        width: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .closeButton {
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
            .barToLeft {
                transform: rotate(45deg);
            }
            .barToRight {
                transform: translateY(17px) rotate(-45deg);
            }
        }
    }

    .areaBelowToCloseMenu {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 12rem;
        height: 30vh;
    }
    .hidden {
        display: none;
    }
    .hiddenText {
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

.navigationLinksDarkTheme {
    .bar {
        background-color: #dark[text-color];
    }
}
.navigationLinksLightTheme {
    .bar {
        background-color: #light[text-color];
    }
}
</style>
