<template>
    <button
        class="change-theme-button"
        v-cursor-hover
        @click="themeStore.toggle();"
    >
        <img
            class="sun-icon icon"
            src="@/assets/images/icons/sun.svg"
            :alt="t('navbar.images.sun')"
            v-show="themeStore.value == 'dark'"
        >
        <img
            class="moon-icon icon"
            src="@/assets/images/icons/moon.svg"
            :alt="t('navbar.images.moon')"
            v-show="themeStore.value == 'light'"
        >
    </button>
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

.icon {
    width: 2.2rem;

    @media (min-width: 600px) {
        width: 2.5rem;
    }
}
.sun-icon {
    // change black svg into white
    filter: invert(100%);
}
.moon-icon {
    //
}

/* change theme button */
.change-theme-button {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    transition: background-color ease 0.7s;
}
</style>
