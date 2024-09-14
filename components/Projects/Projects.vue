<script setup lang="ts">
import ProjectsItem from '~/components/Projects/ProjectsItem.vue';

import type { TechnologyType } from '~/types/TechnologyType';



type ProjectType = {
    title: string;
    content: string;
    github?: string;
    online?: string;
    technologies: TechnologyType[];
};
const projects: ProjectType[] = [
    {
        title: $t('projects.projectsItems.shopSystem.title'),
        content: $t('projects.projectsItems.shopSystem.content'),
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
        title: $t('projects.projectsItems.isocapi.title'),
        content: $t('projects.projectsItems.isocapi.content'),
        online: 'https://isocapi.com',
        technologies: [
            'golang',
            'typescript',
            'vue',
            'nuxt',
            'tailwind',
            'mysql',
            'keydb',
            'docker',
        ],
    },
    {
        title: $t( 'projects.projectsItems.portfolio.title'),
        content: $t('projects.projectsItems.portfolio.content'),
        github: 'https://github.com/maciekiwaniuk/portfolio',
        technologies: ['typescript', 'vue', 'less'],
    },
    {
        title: $t('projects.projectsItems.snakeGame.title'),
        content: $t('projects.projectsItems.snakeGame.content'),
        github: 'https://github.com/maciekiwaniuk/snake-game',
        technologies: ['python', 'pygame', 'pyqt5'],
    },
    {
        title: $t('projects.projectsItems.snakeWebApp.title'),
        content: $t('projects.projectsItems.snakeWebApp.content'),
        github: 'https://github.com/maciekiwaniuk/snake-web-app',
        technologies: [
            'php',
            'laravel',
            'javascript',
            'jquery',
            'bootstrap',
            'mysql',
            'redis',
        ],
    },
    {
        title: $t('projects.projectsItems.minesweeper.title'),
        content: $t('projects.projectsItems.minesweeper.content'),
        github: 'https://github.com/maciekiwaniuk/minesweeper',
        online: 'https://maciekiwaniuk-minesweeper.netlify.app/',
        technologies: ['javascript', 'css'],
    },
];
</script>

<template>
    <section
        id="projects"
        class="projects"
    >
        <h2 class="title">
            {{ $t('projects.title') }}
        </h2>

        <div class="items">
            <ProjectsItem
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :content="project.content"
                :technologies="project.technologies"
                :github="project.github"
                :online="project.online"
            />
        </div>
    </section>
</template>

<style lang="less" scoped>
@import '../../styles/variables.less';

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
