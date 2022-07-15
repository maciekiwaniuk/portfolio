<template>
    <div
        class="experience"
        :class="{ 'experience-dark-theme': themeStore.value == 'dark',
                  'experience-light-theme': themeStore.value == 'light'}"
    >
        <div class="title">{{ t('experience.title') }}</div>

        <div class="items">
            <ExperienceItem
                :title="merinosoftTitle"
                :content="t('experience.experienceItems.merinosoft.content')"
                :profession="t('experience.experienceItems.merinosoft.profession')"
                :period="t('experience.experienceItems.merinosoft.period')"
                :url="merinosoftUrl"
            />
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
      merinosoftUrl = 'https://merinosoft.pl/';
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.experience {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    min-width: 100%;
    margin: auto;

    .title {
        width: 100%;
        min-height: 5rem;
        text-align: center;
        font-family: 'LatoFontBold';
        font-size: 3rem;
        color: @blue-color;
        float: left;
    }

    .items {
        width: 100%;
        min-height: 30rem;
        float: left;
        padding: 0.5rem;
    }
}

@media (min-height: 40rem) {
    .experience {
        min-height: 60vh;
    }
}
@media (min-width: 600px) {
    .experience {
        min-width: 28rem;
        max-width: 33rem;
    }
}

.experience-dark-theme {

}

.experience-light-theme {

}
</style>
