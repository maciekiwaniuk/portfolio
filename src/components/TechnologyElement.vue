<template>
    <div
        class="technology-element"
        :class="{ 'technology-element-dark-theme': themeStore.value == 'dark',
                  'technology-element-light-theme': themeStore.value == 'light' }"
    >

        <div class="icon">
            <Icon :icon="props.icon" :width="props.width" />
        </div>

        <div class="title">{{ props.title }}</div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    icon: String,
    width: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.technology-element {
    display: flex;
    align-items: center;
    background-color: #dark[background-color-on-element];
    padding: 0.2rem;
    border: solid @blue-color 0.1rem;
    border-radius: 1rem;

    .icon {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
    }
    .title {
        padding: 0.5rem;
    }
}

.technology-element-dark-theme {

}
.technology-element-light-theme {

}
</style>
