<template>
    <a
        class="link"
        target="_blank"
        :href="props.url"
        v-cursor-hover
    >
        <div
            class="experience-item"
            :class="{ 'experience-item-dark-theme': themeStore.value == 'dark',
                      'experience-item-light-theme': themeStore.value == 'light' }"
        >
            <div class="title">{{ props.title }}</div>

            <div class="content">
                {{ props.content }}
            </div>

            <div class="technologies">
                <TechnologyElement
                    v-for="(technology, index) in props.technologies"
                    :key="index"
                    :element="technology"
                />
            </div>

            <div class="down">
                <span>{{ props.profession }}</span>
                <span>{{ props.period }}</span>
            </div>
        </div>
    </a>

</template>

<script setup>
import TechnologyElement from '@/components/TechnologyElement.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    content: String,
    profession: String,
    period: String,
    url: String,
    technologies: Array
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}
.experience-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 10rem;
    width: 100%;
    border: solid @blue-color 0.2rem;
    border-radius: 1rem;
    padding: 0.6rem 0.9rem 0.6rem 0.9rem;
    text-align: center;
    cursor: pointer;

    transition: background-color ease 1s;

    .title {
        display: flex;
        align-items: center;
        margin: auto;
        font-size: 1.4rem;
    }
    .content {
        display: flex;
        align-items: center;
        text-align: left;
        font-family: 'LatoFontLight';
        font-style: italic;
        line-height: 1.5rem;
        font-size: 1.1rem;
    }
    .technologies {
        padding-top: 0.5rem;
        display: flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .down {
        font-family: 'LatoFontLight';
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;
    }
}

@media (min-width: @first-breakpoint) {
    .experience-item {
        .title {
            max-width: 25rem;
        }
        .technologies {
            justify-content: flex-start;
        }
    }

}

.experience-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.experience-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
