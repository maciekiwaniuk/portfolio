<script setup lang="ts">
import ProjectsItem from '~/components/Projects/ProjectsItem.vue';
import type { TechnologyType } from '~/types/TechnologyType';

type ProjectType = {
    titleKey: string;
    contentKey: string;
    github?: string;
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
            'microservices',
            'elasticsearch',
            'rabbitmq',
            'redis',
            'mysql',
            'typescript',
            'tailwind',
            'react',
            'next',
            'golang',
            'docker',
            'kubernetes',
        ],
    },
    // {
    //     titleKey: 'projects.projectsItems.isocapi.title',
    //     contentKey: 'projects.projectsItems.isocapi.content',
    //     online: 'https://isocapi.com',
    //     technologies: [
    //         'golang',
    //         'typescript',
    //         'vue',
    //         'nuxt',
    //         'tailwind',
    //         'mysql',
    //         'keydb',
    //         'docker',
    //     ],
    // },
    {
        titleKey: 'projects.projectsItems.portfolio.title',
        contentKey: 'projects.projectsItems.portfolio.content',
        github: 'https://github.com/maciekiwaniuk/portfolio',
        technologies: ['typescript', 'vue', 'nuxt', 'less', 'docker'],
    },
    {
        titleKey: 'projects.projectsItems.snakeMonorepo.title',
        contentKey: 'projects.projectsItems.snakeMonorepo.content',
        github: 'https://github.com/maciekiwaniuk/snake-monorepo',
        technologies: [
            'php',
            'laravel',
            'javascript',
            'jquery',
            'bootstrap',
            'python',
            'pygame',
            'pyqt5',
            'mysql',
            'redis',
        ],
    },
    {
        titleKey: 'projects.projectsItems.minesweeper.title',
        contentKey: 'projects.projectsItems.minesweeper.content',
        github: 'https://github.com/maciekiwaniuk/minesweeper',
        online: 'https://minesweeper.maciekiwaniuk.pl',
        technologies: ['javascript', 'css'],
    },
];
</script>

<template>
    <section
        id="projects"
        :class="$style.projects"
    >
        <h2 :class="$style.title">
            {{ $t('projects.title') }}
        </h2>

        <div :class="$style.items">
            <ProjectsItem
                v-for="(project, index) in projects"
                :key="index"
                :title="$t(project.titleKey)"
                :content="$t(project.contentKey)"
                :technologies="project.technologies"
                :github="project.github"
                :online="project.online"
            />
        </div>
    </section>
</template>

<style module lang="less">
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
