<template>
    <div
        class="landing-page"
        :class="{ 'landing-page-dark-theme' : themeStore.value == 'dark',
                  'landing-page-light-theme' : themeStore.value == 'light'}"
    >
        <div
            data-aos="fade-up-right"
            class="text">
            <div class="my-name-is">{{ t('landingPage.myNameIs') }}</div>

            <div class="name">{{ t('landingPage.name') }}</div>

            <div class="description">{{ t('landingPage.description') }}</div>
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
@import '@/styles/variables.less';

.landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    min-height: 50vh;
    min-width: 100%;
    margin: auto;
    @media (min-height: 40rem) {
        min-height: 70vh;
    }

    .text {

        .my-name-is {
            font-size: 1.5rem;
            font-family: 'Caveat';
        }

        .name {
            font-family: 'LatoFontBold';
            font-size: 3rem;
            color: @blue-color;
            display: block;
            margin-bottom: 0.5rem;
        }

        .description {
            font-family: 'LatoFontLight';
            font-size: 1rem;
        }
    }
}


@media (min-width: 600px) {
    .landing-page {
        min-width: 30rem;
        max-width: 40rem;
        .text {

            .my-name-is {
                font-size: 2.2rem;

            }
            .name {
                font-size: 4rem;
            }
            .description {
                font-size: 1.3rem;
            }
        }
    }
}

.landing-page-dark-theme {

}

.landing-page-light-theme {

}
</style>
