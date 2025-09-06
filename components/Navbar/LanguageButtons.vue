<script setup lang="ts">
import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher';
import { EnglishLanguage, PolishLanguage } from '~/constants/language';
import { useCursorHover } from '~/directives/useCursorHover';

const changeLanguage = useLanguageSwitcher()!;

const vCursorHover = useCursorHover();
</script>

<template>
    <div>
        <button
            v-cursor-hover
            :class="$style.changeLanguageButton"
            @click="changeLanguage(PolishLanguage);"
        >
            <NuxtImg
                src="/images/flags/pl.png"
                format="avif"
                :class="$style.flag"
                width="50"
                height="50"
                :alt="$t('navbar.images.polishFlag')"
            />
        </button>

        <button
            v-cursor-hover
            :class="$style.changeLanguageButton"
            @click="changeLanguage(EnglishLanguage);"
        >
            <NuxtImg
                src="/images/flags/en.png"
                format="avif"
                :class="$style.flag"
                width="50"
                height="50"
                :alt="$t('navbar.images.greatBritainFlag')"
            />
        </button>
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.changeLanguageButton {
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
    .changeLanguageButton {
        width: 3rem;
        height: 3rem;
    }
}
</style>
