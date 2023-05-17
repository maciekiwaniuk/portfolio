<template>
    <section
        role="region"
        id="experience"
        class="experience"
    >
        <div data-aos="fade-up-right">
            <h2 class="title">{{ t('experience.title') }}</h2>

            <div class="items">
                <ExperienceItem
                    :title="merinosoftTitle"
                    :content="t('experience.experienceItems.merinosoft.content')"
                    :profession="t('experience.experienceItems.merinosoft.profession')"
                    :period="t('experience.experienceItems.merinosoft.period')"
                    :length="t('experience.experienceItems.merinosoft.length')"
                    :url="merinosoftUrl"
                    :technologies="merinosoftTechnologies"
                />

                <ExperienceItem
                    :title="ebrandTitle"
                    :content="t('experience.experienceItems.ebrand.content')"
                    :profession="t('experience.experienceItems.ebrand.profession')"
                    :period="t('experience.experienceItems.ebrand.period')"
                    :url="ebrandUrl"
                    :technologies="ebrandTechnologies"
                />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { TechnologyType } from '@/types/TechnologyType';

const { t } = useLanguageSwitcher();

const merinosoftTitle: string = 'Merinosoft Sp. z o.o.',
      merinosoftUrl: string = 'https://merinosoft.pl/',
      merinosoftTechnologies: TechnologyType[] = [
        'php', 'laravel', 'javascript', 'jquery',
        'bootstrap', 'postgresql', 'git'
      ];

const ebrandTitle: string = 'EBRAND Sp. z o.o.',
      ebrandUrl: string = 'https://ebrand.com/',
      ebrandTechnologies: TechnologyType[] = [
        'php', 'phpunit', 'symfony', 'git'
      ];

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.experience {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
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
    .experience {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}

</style>
