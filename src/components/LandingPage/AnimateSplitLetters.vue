<script setup lang="ts">
const props = defineProps<{
    text: string
}>();

const splitLetters = props.text.split('');

const minScreenWidthToDisplayAnimation = 800;
const smallDevice = window.innerWidth <= minScreenWidthToDisplayAnimation;

const restartAnimation = (event: Event) => {
    const element = event.target! as HTMLElement;
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = '';
};

</script>

<template>
    <span v-if="smallDevice">{{ props.text }}</span>

    <span
        v-if="!smallDevice"
        v-for="(letter, index) in splitLetters"
        :key="index"
        :style="{ animationDelay: (index / 10) + 's' }"
        @mouseover="restartAnimation($event);"
        class="animation"
    >
        {{ letter }}
    </span>
</template>

<style lang="less">
.animation {
    position: relative;
    opacity: 0;
    animation: move-text 0.6s forwards;
}

@keyframes move-text {
    0% { bottom: 0; opacity: 1; }
    50% { bottom: 0.2em; }
    100% { bottom: 0; opacity: 1; }
}

</style>
