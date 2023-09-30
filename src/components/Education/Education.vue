<script setup lang="ts">
import EducationItem from '@/components/Education/EducationItem.vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { TechnologyType } from '@/types/TechnologyType';

const { t } = useLanguageSwitcher();

const zsePeriod: string = '2019 - 2023',
    zseUrl: string = 'https://zse.bialystok.pl/',
    zseTechnologies: TechnologyType[] = [
        'php', 'javascript', 'mysql',
        'python', 'csharp', 'java'
    ];

</script>

<template>
    <section
        role="region"
        id="education"
        class="education"
    >
        <h2 data-aos="fade-down" class="title">{{ t('education.title') }}</h2>

        <div class="items">
            <EducationItem
                :title="t('education.educationItems.zse.title')"
                :content="t('education.educationItems.zse.content')"
                :major="t('education.educationItems.zse.major')"
                :period="zsePeriod"
                :url="zseUrl"
                :technologies="zseTechnologies"
                animation="fade-up"
            />
        </div>

    </section>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.education {
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
    .education {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}

</style>
