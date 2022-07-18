<template>
    <div
        class="education"
        :class="{ 'education-dark-theme': themeStore.value == 'dark',
                  'education-light-theme': themeStore.value == 'light',
                  'blurr': navMenuStore.opened }"
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
                    :technologies="zseTechnologies"
                />
            </div>
        </div>

    </div>
</template>

<script setup>
import EducationItem from '@/components/Education/EducationItem.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

const zsePeriod = '2019 - 2023',
      zseUrl = 'https://zse.bialystok.pl/',
      zseTechnologies = [
        'php', 'javascript', 'mysql',
        'python', 'csharp'
      ];
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.education {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    min-width: 100%;
    margin: auto;

    transition: filter ease 0.3s;
    z-index: 9;

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
    .education {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;
        .title {
            min-height: 4rem;
        }
    }
}

.education-dark-theme {

}

.education-light-theme {

}
</style>
