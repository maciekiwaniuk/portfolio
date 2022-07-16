<template>
    <div
        class="skills"
        :class="{ 'skills-dark-theme': themeStore.value == 'dark',
                  'skills-light-theme': themeStore.value == 'light' }"
    >

        <div class="title">{{ t('skills.title') }}</div>

        <div class="element">
            <div class="title-smaller">{{ t('skills.useDailyBasis') }}</div>

            <div class="content">
                <TechnologyElement
                    title="PHP"
                    icon="logos:php"
                    width="48"
                />

                <TechnologyElement
                    title="Laravel"
                    icon="logos:laravel"
                    width="48"
                />

                <TechnologyElement
                    title="JavaScript"
                    icon="vscode-icons:file-type-js-official"
                    width="48"
                />

                <TechnologyElement
                    title="jQuery"
                    icon="mdi:jquery"
                    width="48"
                />

                <TechnologyElement
                    title="Bootstrap"
                    icon="fa6-brands:bootstrap"
                    width="48"
                />


            </div>
        </div>

        <div class="element">
            <div class="title-smaller">{{ t('skills.hadContactWith') }}</div>

            <div class="content">
                <TechnologyElement
                    title="Python"
                    icon="logos:python"
                    width="48"
                />
            </div>
        </div>

    </div>
</template>

<script setup>
import TechnologyElement from '@/components/TechnologyElement.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    min-width: 50%;
    padding: 0.9rem;
    margin: auto;

    .title {
        width: 100%;
        text-align: center;
        font-family: 'LatoFontBold';
        font-size: 3rem;
        color: @blue-color;
        float: left;
    }

    .element {
        width: 100%;
        padding-top: 0.7rem;
        .title-smaller {
            width: 100%;
            text-align: left;
            font-size: 1.5rem;
        }

        .content {
            width: 100%;
            padding-top: 0.5rem;
            display: flex;
            align-content: flex-start;
            justify-content: start;
            flex-wrap: wrap;
            gap: 0.5rem;

        }
    }
}

@media (min-width: @first-breakpoint) {
    .skills {
        min-width: 35rem;
        max-width: 40rem;
    }
}

.skills-dark-theme {

}
.skills-light-theme {

}
</style>
