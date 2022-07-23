<template>
    <div
        id="projects"
        class="projects"
        :class="{ 'projects-dark-theme': themeStore.value == 'dark',
                  'projects-light-theme': themeStore.value == 'light' }"
    >
        <div data-aos="fade-down" class="title">{{ t('projects.title') }}</div>

        <div class="items">
            <ProjectsItem
                :title="t('projects.projectsItems.snakeWebApp.title')"
                :content="t('projects.projectsItems.snakeWebApp.content')"
                :technologies="snakeWebApp.technologies"
                :github="snakeWebApp.github"
                :online="snakeOnline"
                animation="fade-right"
            />

            <ProjectsItem
                :title="t('projects.projectsItems.snakeGame.title')"
                :content="t('projects.projectsItems.snakeGame.content')"
                :technologies="snakeGame.technologies"
                :github="snakeGame.github"
                :online="snakeOnline"
                animation="fade-left"
            />

            <ProjectsItem
                :title="t('projects.projectsItems.minesweeper.title')"
                :content="t('projects.projectsItems.minesweeper.content')"
                :technologies="minesweeper.technologies"
                :github="minesweeper.github"
                :online="minesweeper.online"
                animation="fade-right"
            />

            <ProjectsItem
                title="Portfolio"
                :content="t('projects.projectsItems.portfolio.content')"
                :technologies="portfolio.technologies"
                :github="portfolio.github"
                :online="portfolio.online"
                animation="fade-left"
            />

            <ProjectsItem
                :title="t('projects.projectsItems.youtubeDownloader.title')"
                :content="t('projects.projectsItems.youtubeDownloader.content')"
                :technologies="youtubeDownloader.technologies"
                :github="youtubeDownloader.github"
                animation="fade-right"
            />
        </div>
    </div>
</template>

<script setup>
import ProjectsItem from '@/components/Projects/ProjectsItem.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

/************ Projects ***********/
const snakeOnline = 'https://snake-gra.pl';

const snakeWebApp = {
    github: 'https://github.com/maciekiwaniuk/snake-web-app',
    technologies: [
        'php', 'laravel', 'javascript',
        'jquery', 'bootstrap', 'mysql',
        'redis', 'pwa'
    ]
};

const snakeGame = {
    github: 'https://github.com/maciekiwaniuk/snake-game',
    technologies: ['python', 'pygame', 'pyqt5']
};

const minesweeper = {
    github: 'https://github.com/maciekiwaniuk/minesweeper',
    online: 'https://maciekiwaniuk-minesweeper.herokuapp.com/',
    technologies: ['javascript', 'css']
}

const portfolio = {
    github: 'https://github.com/maciekiwaniuk/portfolio',
    online: 'https://maciekiwaniuk.pl',
    technologies: ['javascript', 'vue', 'less', 'pwa']
}

const youtubeDownloader = {
    github: 'https://github.com/maciekiwaniuk/youtube-downloader',
    technologies: ['python', 'tkinter']
}

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    min-width: 100%;
    min-height: 50vh;
    margin: auto;
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
    .projects {
        min-width: 40rem;
        max-width: 42rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}

.projects-dark-theme {

}
.projects-light-theme {

}
</style>
