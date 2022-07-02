<template>
    <div
        class="landing-page"
        :class="{ 'landing-page-dark-theme' : themeStore.value == 'dark',
                  'landing-page-light-theme' : themeStore.value == 'light'}"
    >
        <div class="text">
            <div class="my-name-is">{{ t('landingPage.myNameIs') }}</div>

            <div class="name">{{ t('landingPage.name') }}</div>

            <div class="position">{{ t('landingPage.fullstackSoftwareDeveloper') }}</div>
        </div>


    </div>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

</script>

<style lang="less" scoped>
@import url('@/styles/variables.less');

.landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30rem;
    min-width: 100%;
    @media (min-height: 40rem) {
        min-height: 45rem;
    }

    .text {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;

        .my-name-is {
            font-size: 1.8rem;
            font-family: 'Caveat';
        }

        .name {
            color: @blue-color;
            display: block;
        }

        .position {
            font-size: 3.3rem;
            font-style: italic;
        }
    }
}

.landing-page-dark-theme {

}

.landing-page-light-theme {

}
</style>
