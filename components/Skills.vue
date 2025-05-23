<script setup lang="ts">
import TechnologyElement from '~/components/TechnologyElement.vue';
import type { TechnologyType } from '~/types/TechnologyType';

const useRegularlyTechnologies: TechnologyType[] = [
    'php',
    'phpunit',
    'laravel',
    'symfony',
    'git',
    'javascript',
    'typescript',
    'vue',
    'mysql',
    'redis',
    'docker',
];

const hadContactTechnologies: TechnologyType[] = [
    'python',
    'rabbitmq',
    'nuxt',
    'sass',
    'tailwind',
    'postgresql',
    'elasticsearch',
];
</script>

<template>
    <div id="skills" class="skills">
        <h2 class="title">
            {{ $t('skills.title') }}
        </h2>

        <div class="element">
            <h3 class="title-smaller">
                {{ $t('skills.useRegularly') }}
            </h3>

            <div class="content">
                <TechnologyElement
                    v-for="(technology, index) in useRegularlyTechnologies"
                    :key="index"
                    :element="technology"
                />
            </div>
        </div>

        <div class="element">
            <h3 class="title-smaller">
                {{ $t('skills.hadContact') }}
            </h3>

            <div class="content">
                <TechnologyElement
                    v-for="(technology, index) in hadContactTechnologies"
                    :key="index"
                    :element="technology"
                />
            </div>
        </div>
    </div>
</template>

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
