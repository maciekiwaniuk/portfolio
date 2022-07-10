<template>
    <div
        class="landing-page"
        :class="{ 'landing-page-dark-theme' : themeStore.value == 'dark',
                  'landing-page-light-theme' : themeStore.value == 'light'}"
    >
        <div class="text">
            <div class="my-name-is">{{ t('landingPage.myNameIs') }}</div>

            <div class="name">{{ t('landingPage.name') }}</div>

            <div class="position">{{ t('landingPage.softwareDeveloper') }}</div>
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
    padding: 1.5rem;
    min-height: 50vh;
    min-width: 100%;
    @media (min-height: 40rem) {
        min-height: 70vh;
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
            font-size: 2.6rem;
            font-style: italic;
        }
    }
}


@media (min-width: 600px) {
    .landing-page {
        .text {
            font-size: 4.5rem;

            .my-name-is {
                font-size: 3rem;
            }
            .position {
                font-size: 4.3rem;
            }
        }
    }
}

.landing-page-dark-theme {

}

.landing-page-light-theme {

}
</style>
