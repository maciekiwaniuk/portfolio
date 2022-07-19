<template>
    <div
        class="landing-page"
        :class="{ 'landing-page-dark-theme': themeStore.value == 'dark',
                  'landing-page-light-theme': themeStore.value == 'light' }"
    >
        <div
            data-aos="fade-up-right"
            class="text"

        >
            <div class="my-name-is">{{ t('landingPage.myNameIs') }}</div>

            <div class="name">{{ t('landingPage.name') }}</div>

            <div class="description">{{ t('landingPage.description') }}</div>
        </div>


    </div>
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

.landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    min-width: 100%;
    min-height: 60vh;
    margin: auto;

    .text {

        .my-name-is {
            font-size: 1.7rem;
            font-family: 'FontCaveat';
        }

        .name {
            font-family: 'LatoFontBold';
            font-size: 3.5rem;
            color: @blue-color;
            display: block;
            margin-bottom: 0.5rem;
        }

        .description {
            font-size: 1.4rem;
        }
    }
}


@media (min-width: @first-breakpoint) {
    .landing-page {
        min-width: 30rem;
        max-width: 40rem;
        min-height: calc(100vh - 5rem - 0.7rem);

        .text {

            .my-name-is {
                font-size: 2.5rem;

            }
            .name {
                font-size: 5rem;
            }
            .description {
                font-size: 1.7rem;
            }
        }
    }
}

.landing-page-dark-theme {

}

.landing-page-light-theme {

}
</style>
