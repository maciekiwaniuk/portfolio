<script setup lang="ts">
import ProjectsItem from '@/components/Projects/ProjectsItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import type { TechnologyType } from '@/types/TechnologyType';
import { FadeDown, FadeLeft, FadeRight } from '@/constants/app';

const { t } = useLanguageSwitcher();

type ProjectType = {
    titleKey: string;
    contentKey: string;
    github: string;
    online?: string;
    technologies: TechnologyType[];
};
const projects: ProjectType[] = [
    {
        titleKey: 'projects.projectsItems.shopSystem.title',
        contentKey: 'projects.projectsItems.shopSystem.content',
        github: 'https://github.com/maciekiwaniuk/shop-system',
        technologies: [
            'php',
            'phpunit',
            'symfony',
            'redis',
            'mysql',
            'docker',
        ],
    },
    {
        titleKey: 'projects.projectsItems.demoCryptoExchange.title',
        contentKey: 'projects.projectsItems.demoCryptoExchange.content',
        github: 'https://github.com/maciekiwaniuk/demo-crypto-exchange',
        technologies: [
            'php',
            'phpunit',
            'symfony',
            'typescript',
            'vue',
            'mysql',
            'docker',
        ],
    },
    {
        titleKey: 'projects.projectsItems.snakeWebApp.title',
        contentKey: 'projects.projectsItems.snakeWebApp.content',
        github: 'https://github.com/maciekiwaniuk/snake-web-app',
        technologies: [
            'php',
            'laravel',
            'javascript',
            'jquery',
            'bootstrap',
            'mysql',
            'redis',
            'pwa',
        ],
    },
    {
        titleKey: 'projects.projectsItems.snakeGame.title',
        contentKey: 'projects.projectsItems.snakeGame.content',
        github: 'https://github.com/maciekiwaniuk/snake-game',
        technologies: ['python', 'pygame', 'pyqt5'],
    },
    {
        titleKey: 'projects.projectsItems.minesweeper.title',
        contentKey: 'projects.projectsItems.minesweeper.content',
        github: 'https://github.com/maciekiwaniuk/minesweeper',
        online: 'https://maciekiwaniuk-minesweeper.netlify.app/',
        technologies: ['javascript', 'css'],
    },
    {
        titleKey: 'projects.projectsItems.portfolio.title',
        contentKey: 'projects.projectsItems.portfolio.content',
        github: 'https://github.com/maciekiwaniuk/portfolio',
        technologies: ['typescript', 'vue', 'less', 'pwa'],
    },
];
</script>

<template>
    <section
        id="projects"
        class="projects"
    >
        <h2 :data-aos="FadeDown" class="title">
            {{ t('projects.title') }}
        </h2>

        <div class="items">
            <ProjectsItem
                v-for="(project, index) in projects"
                :key="index"
                :title="t(project.titleKey)"
                :content="t(project.contentKey)"
                :technologies="project.technologies"
                :github="project.github"
                :online="project.online"
                :animation="index % 2 === 0 ? FadeRight : FadeLeft"
            />
        </div>
    </section>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    min-height: 50vh;
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
    .projects {
        min-width: 40rem;
        max-width: 42rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}
</style>
