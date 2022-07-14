<template>
    <a
        class="link"
        target="_blank"
        :href="props.url"
        v-cursor-hover
    >
        <div
            class="education-item"
            :class="{ 'education-item-dark-theme': themeStore.value == 'dark',
                      'education-item-light-theme': themeStore.value == 'light'}"
        >
            <div class="title">{{ props.title }}</div>

            <div class="content">
                tutaj opis tego typu
            </div>

            <div class="down">
                <span>{{ props.major }}</span>
                <span>{{ props.period }}</span>
            </div>
        </div>
    </a>

</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    major: String,
    period: String,
    url: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}
.education-item {
    display: grid;
    grid-template-rows: 1fr 1.8fr 0.5fr;
    min-height: 10rem;
    width: 100%;
    border: solid @blue-color 0.2rem;
    border-radius: 1rem;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;

    transition: background-color ease 1s;

    .title {
        font-size: 1.2rem;
    }
    .major {
        font-size: 1.4rem;
    }
    .period {
        font-size: 1.6rem;
        text-align: right;
    }




    .down {
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 600px) {

}

.education-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.education-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
