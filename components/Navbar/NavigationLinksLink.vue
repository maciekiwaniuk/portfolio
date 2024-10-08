<script setup lang="ts">
import { HorizontalNavigationAlignment, VerticalNavigationAlignment } from '~/constants/alignment';
import { useCursorHover } from '~/directives/useCursorHover';
import { useNavMenuStore } from '~/stores/navMenu';
import { useThemeStore } from '~/stores/theme';
import type { AlignmentType } from '~/types/AlignmentType';

const props = defineProps<{
    element: string;
    text: string;
    alignment: AlignmentType;
}>();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();
</script>

<template>
    <a
        v-cursor-hover
        :class="{ 'vertical-alignment': props.alignment === VerticalNavigationAlignment,
                  'horizontal-alignment': props.alignment === HorizontalNavigationAlignment,
                  'link-dark-theme': themeStore.isDark,
                  'link-light-theme': themeStore.isLight }"
        :href="`#${element}`"
        @click="navMenuStore.close()"
    >
        {{ text }}
    </a>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

a {
    position: relative;
    margin-left: 1rem;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    transition: color ease 0.1s,
                transform ease @hover-time;
}
.vertical-alignment {
    margin-right: 1rem;
}
.horizontal-alignment::before {
    content: '';
    position: absolute;
    bottom: -0.1rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);

    transition: clip-path ease-out @hover-time;
}
.horizontal-alignment:hover::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.link-dark-theme::before {
    background-color: #dark[text-color];
}
.link-light-theme::before {
    background-color: #light[text-color];
}
</style>
