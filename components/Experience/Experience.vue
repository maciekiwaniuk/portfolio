<script setup lang="ts">
import ExperienceItem from '~/components/Experience/ExperienceItem.vue';
import type { TechnologyType } from '~/types/TechnologyType';

const { t } = useI18n();

type Experience = {
    companyName: string;
    contentKey: string;
    professionKey: string;
    startDate: Date;
    endDate: Date | null;
    url: string;
    technologies: TechnologyType[];
};
const experienceItems: Experience[] = [
    {
        companyName: 'Transparent Data',
        contentKey: 'experience.experienceItems.transparentData.content',
        professionKey: 'experience.experienceItems.transparentData.profession',
        startDate: new Date('2024-07'),
        endDate: null,
        url: 'https://transparentdata.pl/',
        technologies: [
            'php',
            'phpunit',
            'microservices',
            'laravel',
            'javascript',
            'typescript',
            'vue',
            'nuxt',
            'sass',
            'redis',
            'mysql',
            'elasticsearch',
            'kubernetes',
            'gcp',
            'docker',
        ],
    },
    {
        companyName: 'EBRAND',
        contentKey: 'experience.experienceItems.ebrand.content',
        professionKey: 'experience.experienceItems.ebrand.profession',
        startDate: new Date('2023-04'),
        endDate: new Date('2023-09'),
        url: 'https://ebrand.com/',
        technologies: [
            'php',
            'phpunit',
            'microservices',
            'symfony',
            'mysql',
            'redis',
            'rabbitmq',
            'docker',
        ],
    },
    {
        companyName: 'Merinosoft',
        contentKey: 'experience.experienceItems.merinosoft.content',
        professionKey: 'experience.experienceItems.merinosoft.profession',
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

    let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    let monthsDifference = endDate.getMonth() - startDate.getMonth();

    if (monthsDifference < 0) {
        yearsDifference -= 1;
        monthsDifference += 12;
    }

    if (endDate.getDate() >= startDate.getDate()) {
        monthsDifference += 1;
    }

    if (monthsDifference === 12) {
        yearsDifference += 1;
        monthsDifference = 0;
    }

    let yearsString = '';
    if (yearsDifference === 1) {
        yearsString = t('experience.year');
    }
    else if (
        yearsDifference > 1
        && ![12, 13, 14].includes(yearsDifference % 100)
        && [2, 3, 4].includes(yearsDifference % 10)
    ) {
        yearsString = t('experience.yearsFirstForm');
    }
    else if (yearsDifference > 1) {
        yearsString = t('experience.yearsSecondForm');
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
        :class="$style.experience"
    >
        <h2 :class="$style.title">
            {{ $t('experience.title') }}
        </h2>

        <div :class="$style.items">
            <ExperienceItem
                v-for="(experience, index) in experienceItems"
                :key="index"
                :index="index"
                :company-name="experience.companyName"
                :content="$t(experience.contentKey)"
                :profession="$t(experience.professionKey)"
                :date-range="getTranslatedDateRange(experience.startDate, experience.endDate)"
                :period="getTranslatedPeriod(experience.startDate, experience.endDate)"
                :url="experience.url"
                :technologies="experience.technologies"
            />
        </div>
    </section>
</template>

<style module lang="less">
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
        font-family: 'Lato', serif;
        font-weight: 700;
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

@media (min-width: @second-breakpoint) {
    .experience {
        min-width: 60rem;
        max-width: 70rem;
    }
}
</style>
