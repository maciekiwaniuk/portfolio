<script setup lang="ts">
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { TechnologyType } from '@/types/TechnologyType';
import ProjectsItem from "@/components/Projects/ProjectsItem.vue";

const { t } = useLanguageSwitcher();

type Experience = {
    title: string,
    content: string,
    profession: string,
    period: string,
    length?: string,
    url: string,
    technologies: TechnologyType[]
};

const experienceItems: Experience[] = [
    {
        title: 'Merinosoft Sp. z o.o.',
        content: t('experience.experienceItems.merinosoft.content'),
        profession: t('experience.experienceItems.merinosoft.profession'),
        period: t('experience.experienceItems.merinosoft.period'),
        length: t('experience.experienceItems.merinosoft.length'),
        url: 'https://merinosoft.pl/',
        technologies: [
            'php', 'laravel', 'javascript', 'jquery',
            'bootstrap', 'postgresql', 'git'
        ]
    },
    {
        title: 'EBRAND',
        content: t('experience.experienceItems.ebrand.content'),
        profession: t('experience.experienceItems.ebrand.profession'),
        period: t('experience.experienceItems.ebrand.period'),
        length: t('experience.experienceItems.ebrand.length'),
        url: 'https://ebrand.com/',
        technologies: [
            'php', 'phpunit', 'symfony', 'redis',
            'rabbitmq', 'microservices', 'git'
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
        <h2 data-aos="fade-down" class="title">{{ t('experience.title') }}</h2>

        <div class="items">
            <ExperienceItem
                v-for="(experience, index) in experienceItems"
                :key="index"
                :title="experience.title"
                :content="experience.content"
                :profession="experience.profession"
                :period="experience.period"
                :length="experience.length"
                :url="experience.url"
                :technologies="experience.technologies"
                :animation="index % 2 === 0 ? 'fade-right' : 'fade-left'"
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
