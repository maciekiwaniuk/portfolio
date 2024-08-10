<script setup lang="ts">
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import type { TechnologyType } from '@/types/TechnologyType';
import { FadeDown, FadeLeft, FadeRight } from '@/constants/app';

const { t } = useLanguageSwitcher();

type Experience = {
    title: string;
    content: string;
    profession: string;
    startDate: Date;
    endDate: Date | null;
    url: string;
    technologies: TechnologyType[];
};

const experienceItems: Experience[] = [
    {
        title: 'EBRAND',
        content: t('experience.experienceItems.ebrand.content'),
        profession: t('experience.experienceItems.ebrand.profession'),
        startDate: new Date('2023-04'),
        endDate: new Date('2023-09'),
        url: 'https://ebrand.com/',
        technologies: [
            'php',
            'phpunit',
            'microservices',
            'git',
            'symfony',
            'mysql',
            'redis',
            'rabbitmq',
            'docker',
        ],
    },
    {
        title: 'Merinosoft',
        content: t('experience.experienceItems.merinosoft.content'),
        profession: t('experience.experienceItems.merinosoft.profession'),
        startDate: new Date('2021-08'),
        endDate: new Date('2022-12'),
        url: 'https://merinosoft.pl/',
        technologies: [
            'php',
            'laravel',
            'javascript',
            'jquery',
            'bootstrap',
            'postgresql',
            'git',
        ],
    },
];

function getTranslatedDateRange(startDate: Date, endDate: Date | null): string {
    const startMonth = (startDate.getMonth()) + 1;
    const startMonthString = t(`experience.monthNames.${startMonth}`);
    const fullStartDateString = `${startMonthString} ${startDate.getFullYear()}`;

    if (endDate) {
        const endMonth = (endDate.getMonth()) + 1;
        const endMonthString = t(`experience.monthNames.${endMonth}`);
        const fullEndDateString = `${endMonthString} ${endDate.getFullYear()}`;

        return `${fullStartDateString} - ${fullEndDateString}`;
    }
    return `${fullStartDateString} - ${t('experience.now')}`;
}

function getTranslatedPeriod(startDate: Date, endDate: Date | null): string {
    if (!endDate) {
        endDate = new Date();
    }
    const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = (endDate.getMonth() - startDate.getMonth()) + 1;

    let yearsString = '';
    if (yearsDifference === 1) {
        yearsString = t('experience.year');
    }
    else if (yearsDifference > 1 && ![12, 13, 14].includes(yearsDifference % 100) && [2, 3, 4].includes(yearsDifference % 10)) {
        yearsString = t('experience.yearsFirstForm');
    }
    else if (yearsDifference > 1) {
        yearsString = t ('experience.yearsSecondForm');
    }

    let monthsString = '';
    if (monthsDifference === 1) {
        monthsString = t('experience.month');
    }
    else if (monthsDifference > 1) {
        monthsString = t('experience.months');
    }

    if (yearsString && monthsString) {
        return `(${yearsDifference} ${yearsString} ${monthsDifference} ${monthsString})`;
    }
    else if (yearsString) {
        return `(${yearsDifference} ${yearsString})`;
    }
    else if (monthsString) {
        return `(${monthsDifference} ${monthsString})`;
    }
    return '';
}
</script>

<template>
    <section
        id="experience"
        class="experience"
    >
        <h2 :data-aos="FadeDown" class="title">
            {{ t('experience.title') }}
        </h2>

        <div class="items">
            <ExperienceItem
                v-for="(experience, index) in experienceItems"
                :key="index"
                :title="experience.title"
                :content="experience.content"
                :profession="experience.profession"
                :date-range="getTranslatedDateRange(experience.startDate, experience.endDate)"
                :period="getTranslatedPeriod(experience.startDate, experience.endDate)"
                :url="experience.url"
                :technologies="experience.technologies"
                :animation="index % 2 === 0 ? FadeRight : FadeLeft"
            />
        </div>
    </section>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.experience {
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
    .experience {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}
</style>
