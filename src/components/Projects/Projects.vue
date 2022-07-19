<template>
    <div
        class="projects"
        :class="{ 'projects-dark-theme': themeStore.value == 'dark',
                  'projects-light-theme': themeStore.value == 'light' }"
    >
        <div data-aos="fade-down" class="title">{{ t('projects.title') }}</div>

        <div class="items">
            <ProjectsItem
                title="Snake Web App"
                :content="t('projects.projectsItems.snakeWebApp.content')"
                :technologies="snakeWebAppTechnologies"
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

const snakeWebAppTechnologies = [
    'php', 'laravel', 'jquery',
    'bootstrap', 'mysql'
]
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

.projects-dark-theme {

}
.projects-light-theme {

}
</style>
