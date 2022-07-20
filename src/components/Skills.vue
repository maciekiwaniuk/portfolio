<template>
    <div
        class="skills"
        :class="{ 'skills-dark-theme': themeStore.value == 'dark',
                  'skills-light-theme': themeStore.value == 'light' }"
    >

        <div data-aos="fade-up-left">

            <div class="title">{{ t('skills.title') }}</div>

            <div class="element">
                <div class="title-smaller">{{ t('skills.useDailyBasis') }}</div>

                <div class="content">
                    <TechnologyElement element="php" />
                    <TechnologyElement element="laravel" />
                    <TechnologyElement element="javascript" />
                    <TechnologyElement element="jquery" />
                    <TechnologyElement element="vue" />
                    <TechnologyElement element="sass" />
                    <TechnologyElement element="bootstrap" />
                    <TechnologyElement element="mysql" />
                    <TechnologyElement element="postgresql" />
                    <TechnologyElement element="git" />
                    <TechnologyElement element="github" />
                </div>
            </div>

            <div class="element">
                <div class="title-smaller">{{ t('skills.hadContact') }}</div>

                <div class="content">
                    <TechnologyElement element="python" />
                    <TechnologyElement element="csharp" />
                </div>
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
    min-width: 50%;
    padding-bottom: 2rem;
    margin: auto;

    .title {
        width: 100%;
        text-align: center;
        font-family: 'LatoFontBold';
        font-size: 3rem;
        padding-bottom: 0.4rem;
        color: @blue-color;
        float: left;
    }

    .element {
        width: 100%;
        padding-top: 0.7rem;
        padding-bottom: 0.5rem;
        .title-smaller {
            width: 100%;
            text-align: center;
            font-size: 1.5rem;
            padding-bottom: 0.3rem;
        }

        .content {
            width: 100%;
            padding-top: 0.5rem;
            display: flex;
            align-content: flex-start;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;

        }
    }
}

@media (min-width: @first-breakpoint) {
    .skills {
        min-width: 35rem;
        max-width: 40rem;
        padding-bottom: 7rem;

        .element {
            .title-smaller {
                text-align: left;
            }
            .content {
                justify-content: flex-start;
            }
        }
    }


}

.skills-dark-theme {

}
.skills-light-theme {

}
</style>
