<script setup lang="ts">
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { TechnologyType } from '@/types/TechnologyType';
import { FadeDown, FadeLeft, FadeRight } from '@/constants/app';

const { t } = useLanguageSwitcher();

type Experience = {
    title: string,
    contentKey: string,
    professionKey: string,
    periodKey: string,
    lengthKey?: string,
    url: string,
    technologies: TechnologyType[]
};

const experienceItems: Experience[] = [
    {
        title: 'EBRAND',
        contentKey: 'experience.experienceItems.ebrand.content',
        professionKey: 'experience.experienceItems.ebrand.profession',
        periodKey: 'experience.experienceItems.ebrand.period',
        lengthKey: 'experience.experienceItems.ebrand.length',
        url: 'https://ebrand.com/',
        technologies: [
            'php', 'phpunit', 'symfony', 'redis',
            'rabbitmq', 'microservices', 'git'
        ]
    },
    {
        title: 'Merinosoft Sp. z o.o.',
        contentKey: 'experience.experienceItems.merinosoft.content',
        professionKey: 'experience.experienceItems.merinosoft.profession',
        periodKey: 'experience.experienceItems.merinosoft.period',
        lengthKey: 'experience.experienceItems.merinosoft.length',
        url: 'https://merinosoft.pl/',
        technologies: [
            'php', 'laravel', 'javascript', 'jquery',
            'bootstrap', 'postgresql', 'git'
        ]
    }
];

</script>

<template>
    <section
        role="region"
        id="experience"
        class="experience"
    >
        <h2 :data-aos="FadeDown" class="title">{{ t('experience.title') }}</h2>

        <div class="items">
            <ExperienceItem
                v-for="(experience, index) in experienceItems"
                :key="index"
                :title="experience.title"
                :content="t(experience.contentKey)"
                :profession="t(experience.professionKey)"
                :period="t(experience.periodKey)"
                :length="t(experience.lengthKey ?? '')"
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
