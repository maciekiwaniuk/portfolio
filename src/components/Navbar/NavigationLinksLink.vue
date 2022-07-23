<template>
    <a
        :class="{ 'vertical-alignment': props.alignment == 'vertical',
                  'horizontal-alignment': props.alignment == 'horizontal',
                  'link-dark-theme': themeStore.value == 'dark',
                  'link-light-theme': themeStore.value == 'light' }"
        v-cursor-hover
        :href="`#${element}`"
        @click="navMenuStore.close()"
    >
        {{ text }}
    </a>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

const props = defineProps({
    element: String,
    text: String,
    alignment: String
})
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

a {
    text-decoration: none;
    color: inherit;
    position: relative;
    cursor: pointer;
    margin-left: 1rem;

    transition: color ease 0.1s,
                transform ease 0.3s;
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

    transition: clip-path ease-out 0.3s;
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
