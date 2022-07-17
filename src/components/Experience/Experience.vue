<template>
    <div
        class="experience"
        :class="{ 'experience-dark-theme': themeStore.value == 'dark',
                  'experience-light-theme': themeStore.value == 'light' }"
    >
        <div data-aos="fade-up-right">
            <div class="title">{{ t('experience.title') }}</div>

            <div class="items">
                <ExperienceItem
                    :title="merinosoftTitle"
                    :content="t('experience.experienceItems.merinosoft.content')"
                    :profession="t('experience.experienceItems.merinosoft.profession')"
                    :period="t('experience.experienceItems.merinosoft.period')"
                    :url="merinosoftUrl"
                    :technologies="merinosoftTechnologies"
                />
            </div>
        </div>

    </div>
</template>

<script setup>
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const merinosoftTitle = 'Merinosoft Sp. z o.o.',
      merinosoftUrl = 'https://merinosoft.pl/',
      merinosoftTechnologies = [
        'php', 'laravel', 'javascript', 'jquery',
        'bootstrap', 'postgresql', 'git'
      ];
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.experience {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    min-width: 100%;
    margin: auto;

    .title {
        width: 100%;
        min-height: 3rem;
        text-align: center;
        font-family: 'LatoFontBold';
        font-size: 3rem;
        color: @blue-color;
        float: left;
    }

    .items {
        width: 100%;
        float: left;
        padding: 0.5rem;
    }
}

@media (min-width: @first-breakpoint) {
    .experience {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}

.experience-dark-theme {

}

.experience-light-theme {

}
</style>
