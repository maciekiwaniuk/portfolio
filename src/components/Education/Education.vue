<template>
    <div
        class="education"
        :class="{ 'education-dark-theme': themeStore.value == 'dark',
                  'education-light-theme': themeStore.value == 'light'}"
    >
        <div class="title">{{ t('education.title') }}</div>

        <div class="items">
            <EducationItem
                :title="t('education.educationItems.zse.title')"
                :major="t('education.educationItems.zse.major')"
                :period="'2019 - 2023'"
            />
        </div>
    </div>
</template>

<script setup>
import EducationItem from '@/components/Education/EducationItem.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.education {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    min-width: 100%;
    margin: auto;
    @media (min-height: 40rem) {
        min-height: 60vh;
    }

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
    }
}

@media (min-width: 600px) {
    .education {
        min-width: 30rem;
        max-width: 40rem;
    }
}

.education-dark-theme {

}

.education-light-theme {

}
</style>
