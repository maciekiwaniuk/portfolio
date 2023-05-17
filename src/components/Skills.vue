<template>
    <div id="skills" class="skills">
        <div>

            <h2 class="title" data-aos="fade-down">{{ t('skills.title') }}</h2>

            <div class="element" data-aos="fade-right">
                <h3 class="title-smaller">{{ t('skills.useRegularly') }}</h3>

                <div class="content">
                    <TechnologyElement element="php" />
                    <TechnologyElement element="phpunit" />
                    <TechnologyElement element="symfony" />
                    <TechnologyElement element="mysql" />
                    <TechnologyElement element="docker" />
                    <TechnologyElement element="git" />
                    <TechnologyElement element="github" />
                </div>
            </div>

            <div class="element" data-aos="fade-left">
                <h3 class="title-smaller">{{ t('skills.hadContact') }}</h3>

                <div class="content">
                    <TechnologyElement element="python" />
                    <TechnologyElement element="csharp" />
                    <TechnologyElement element="java" />
                    <TechnologyElement element="laravel" />
                    <TechnologyElement element="jquery" />
                    <TechnologyElement element="sass" />
                    <TechnologyElement element="bootstrap" />
                    <TechnologyElement element="postgresql" />
                    <TechnologyElement element="javascript" />
                    <TechnologyElement element="typescript" />
                    <TechnologyElement element="vue" />
                    <TechnologyElement element="pwa" />
                    <TechnologyElement element="redis" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import TechnologyElement from '@/components/TechnologyElement.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';

const { t } = useLanguageSwitcher();

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    min-width: 50%;
    padding-bottom: 2rem;

    .title {
        float: left;
        width: 100%;
        text-align: center;
        font-family: 'LatoFontBold', serif;
        font-size: 3rem;
        padding-bottom: 0.4rem;
        color: @blue-color;
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
            display: flex;
            align-content: flex-start;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            width: 100%;
            padding-top: 0.5rem;
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

</style>
