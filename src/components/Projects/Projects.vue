<template>
    <div
        class="projects"
        :class="{ 'projects-dark-theme': themeStore.value == 'dark',
                  'projects-light-theme': themeStore.value == 'light' }"
    >
        Projekty
    </div>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.projects {

}

.projects-dark-theme {

}
.projects-light-theme {

}
</style>
