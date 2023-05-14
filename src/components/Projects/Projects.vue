<template>
    <section
        role="region"
        id="projects"
        class="projects"
    >
        <h2 data-aos="fade-down" class="title">{{ t('projects.title') }}</h2>

        <div class="items">
            <ProjectsItem
                :title="t('projects.projectsItems.demoCryptoExchange.title')"
                :content="t('projects.projectsItems.demoCryptoExchange.content')"
                :technologies="demoCryptoExchange.technologies"
                :github="demoCryptoExchange.github"
                animation="fade-left"
            />

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
    </section>
</template>

<script setup>
import ProjectsItem from '@/components/Projects/ProjectsItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';

const { t } = useLanguageSwitcher();

/************ Projects ***********/
const snakeOnline = 'https://snake-gra.pl';

const demoCryptoExchange = {
    github: 'https://github.com/maciekiwaniuk/demo-crypto-exchange',
    technologies: [
        'php', 'phpunit', 'symfony',
        'typescript', 'vue', 'mysql'
    ]
};

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
    online: 'https://maciekiwaniuk-minesweeper.netlify.app/',
    technologies: ['javascript', 'css']
}

const portfolio = {
    github: 'https://github.com/maciekiwaniuk/portfolio',
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
    min-width: 100%;
    min-height: 50vh;
    margin: auto;
    padding-bottom: 1rem;

    .title {
        float: left;
        width: 100%;
        min-height: 3rem;
        text-align: center;
        font-family: 'LatoFontBold';
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
