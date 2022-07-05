<template>
    <div
        v-if="props.alignment =='vertical'"
        :class="{ 'hidden': (props.alignment == 'horizontal' || !navMenuStore.opened) }"
        class="area-to-close-menu"
        @click="navMenuStore.toggle();"
    >
        <button class="close-button">X</button>
    </div>

    <ul :class="{ 'vertical': props.alignment == 'vertical',
                  'horizontal': props.alignment == 'horizontal',
                  'links-dark-theme' : themeStore.value == 'dark',
                  'links-light-theme' : themeStore.value == 'light',
                  'hidden-text': (props.alignment == 'vertical' && !navMenuStore.opened) }">
        <li v-cursor-hover>{{ t('navbar.aboutMe') }}</li>
        <li v-cursor-hover>{{ t('navbar.education') }}</li>
        <li v-cursor-hover>{{ t('navbar.projects') }}</li>
        <li v-cursor-hover>{{ t('navbar.experience') }}</li>
    </ul>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

const props = defineProps({
    alignment: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

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
        height: 3rem;
        width: 3rem;
        cursor: pointer;
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
        margin-left: 1rem;
        transition: color ease 0.1s,
                    transform ease 0.3s;
    }
}

.horizontal {
    justify-content: flex-start;
    align-items: center;

    li:hover {
        cursor: pointer;
        transform: translateY(-0.2rem);
    }
}
.vertical {
    align-content: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 1rem;
}

.links-dark-theme:hover {
    li:hover {
        color: #dark[text-color-hover];
    }
}
.links-light-theme {
    li:hover {
        color: #light[text-color-hover];
    }
}

</style>
