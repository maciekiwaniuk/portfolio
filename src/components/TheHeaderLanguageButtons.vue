<template>
    <button
        class="change-language-button"
        v-cursor-hover
        @click="changeLanguage('pl');"
    >
        <img src="@/assets/flags/pl.png" class="flag" :alt="t('header.images.polishFlag')">
    </button>

    <button
        class="change-language-button"
        v-cursor-hover
        @click="changeLanguage('en');"
    >
        <img src="@/assets/flags/en.png" class="flag" :alt="t('header.images.greatBritainFlag')">
    </button>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';

const { t, changeLanguage } = useLanguageSwitcher();

const vCursorHover = useCursorHover();
</script>

<style lang="less" scoped>
.change-language-button {
    position: relative;
    width: 4rem;
    height: 4rem;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.flag {
    max-width: 100%;
    height: auto;
}
</style>
