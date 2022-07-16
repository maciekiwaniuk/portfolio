<template>
    <div
        class="education"
        :class="{ 'education-dark-theme': themeStore.value == 'dark',
                  'education-light-theme': themeStore.value == 'light' }"
    >
        <div data-aos="fade-up-left">
            <div class="title">{{ t('education.title') }}</div>

            <div class="items">
                <EducationItem
                    :title="t('education.educationItems.zse.title')"
                    :content="t('education.educationItems.zse.content')"
                    :major="t('education.educationItems.zse.major')"
                    :period="zsePeriod"
                    :url="zseUrl"
                />
            </div>
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

const zsePeriod = '2019 - 2023',
      zseUrl = 'https://zse.bialystok.pl/';
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
    .education {
        min-height: 60vh;
    }
}
@media (min-width: @first-breakpoint) {
    .education {
        min-width: 28rem;
        max-width: 33rem;
    }
}

.education-dark-theme {

}

.education-light-theme {

}
</style>
