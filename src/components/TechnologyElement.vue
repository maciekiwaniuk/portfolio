<template>
    <div
        class="technology-element"
        :class="{ 'technology-element-dark-theme': themeStore.value == 'dark',
                  'technology-element-light-theme': themeStore.value == 'light' }"
    >

        <img
            class="image"
            :src="getImageUrl()"
            :alt="props.title"
            :width="props.imageSize"
        >

        <div class="title">{{ props.title }}</div>

    </div>
</template>

<script setup>
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    image: String,
    imageSize: String
});

// returns path to image of technology from prop
const getImageUrl = () => {
    let technologies = require.context('../assets/images/technologies/', false, /\.png$/);
    return technologies(`./${props.image}.png`);
};
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

    .image {
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
