<template>
    <div data-aos="zoom-in-up">
        <button
            class="change-language-button"
            v-cursor-hover
            @click="changeLanguage('pl');"
        >
            <img
                src="@/assets/images/flags/pl.png"
                class="flag"
                width="50"
                height="50"
                :alt="t('navbar.images.polishFlag')"
            >
        </button>

        <button
            class="change-language-button"
            v-cursor-hover
            @click="changeLanguage('en');"
        >
            <img
                src="@/assets/images/flags/en.png"
                class="flag"
                width="50"
                height="50"
                :alt="t('navbar.images.greatBritainFlag')"
            >
        </button>
    </div>
</template>

<script setup lang="ts">
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';

const { t, changeLanguage } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.change-language-button {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.flag {
    max-width: 80%;
    height: auto;
}

@media (min-width: @first-breakpoint) {
    .change-language-button {
        width: 3rem;
        height: 3rem;
    }
}

</style>
