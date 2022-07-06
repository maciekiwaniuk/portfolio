<template>
    <div class="flags">
        <button
            class="change-language-button"
            v-cursor-hover
            @click="changeLanguage('pl');"
        >
            <img src="@/assets/images/flags/pl.png" class="flag" :alt="t('navbar.images.polishFlag')">
        </button>

        <button
            class="change-language-button"
            v-cursor-hover
            @click="changeLanguage('en');"
        >
            <img src="@/assets/images/flags/en.png" class="flag" :alt="t('navbar.images.greatBritainFlag')">
        </button>
    </div>
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
    width: 2.5rem;
    height: 2.5rem;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (min-width: 600px) {
        width: 3rem;
        height: 3rem;
    }
}
.flag {
    max-width: 80%;
    height: auto;
}
</style>
