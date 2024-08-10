<script setup lang="ts">
import EducationItem from '@/components/Education/EducationItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import type { TechnologyType } from '@/types/TechnologyType';
import { FadeDown, FadeLeft, FadeRight } from '@/constants/app';

const { t } = useLanguageSwitcher();

type Education = {
    title: string;
    content: string;
    major: string;
    period: string;
    url: string;
    technologies: TechnologyType[];
};
const educationItems: Education[] = [
    {
        title: t('education.educationItems.universityOfTechnology.title'),
        content: t('education.educationItems.universityOfTechnology.content'),
        major: t('education.educationItems.universityOfTechnology.major'),
        period: '2023 - 2027',
        url: 'https://pb.edu.pl/',
        technologies: [
            'c',
            'linux',
        ],
    },
    {
        title: t('education.educationItems.zse.title'),
        content: t('education.educationItems.zse.content'),
        major: t('education.educationItems.zse.major'),
        period: '2019 - 2023',
        url: 'https://zse.bialystok.pl/',
        technologies: [
            'php',
            'javascript',
            'mysql',
            'python',
            'csharp',
            'java',
        ],
    },
];
</script>

<template>
    <section
        id="education"
        class="education"
    >
        <h2 :data-aos="FadeDown" class="title">
            {{ t('education.title') }}
        </h2>

        <div class="items">
            <EducationItem
                v-for="(education, index) in educationItems"
                :key="index"
                :title="education.title"
                :content="education.content"
                :major="education.major"
                :period="education.period"
                :url="education.url"
                :technologies="education.technologies"
                :animation="index % 2 === 0 ? FadeRight : FadeLeft"
            />
        </div>
    </section>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.education {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    margin: auto;
    padding-bottom: 1rem;

    .title {
        float: left;
        width: 100%;
        min-height: 3rem;
        text-align: center;
        font-family: 'LatoFontBold', serif;
        font-size: 3rem;
        color: @blue-color;
    }

    .items {
        float: left;
        width: 100%;
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
</style>
