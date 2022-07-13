<template>
    <div
        class="education-item"
        :class="{ 'education-item-dark-theme': themeStore.value == 'dark',
                  'education-item-light-theme': themeStore.value == 'light'}"
    >
        <div class="title">{{ props.title }}</div>

        <div class="major">{{ props.major }}</div>

        <div class="period">{{ props.period }}</div>
    </div>
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
    period: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.education-item {
    min-height: 10rem;
    width: 100%;
    padding: 5rem;
    margin-bottom: 2rem;
    border: solid @blue-color 0.3rem;
}

@media (min-width: 600px) {

}

.education-item-dark-theme {

}

.education-item-light-theme {

}
</style>
