<script setup lang="ts">
const props = defineProps<{
    text: string;
}>();

const { isMobile } = useDevice();

const splitLetters = props.text.split('');

function restartAnimation(event: Event) {
    const element = event.target! as HTMLElement;
    element.style.animation = 'none';
    // eslint-disable-next-line ts/no-unused-expressions
    element.offsetHeight; /* trigger reflow */
    element.style.animation = '';
}
</script>

<template>
    <span v-if="isMobile">{{ props.text }}</span>

    <span
        v-for="index in 15"
        v-else
        :key="index"
        :style="{ animationDelay: `${index / 10}s` }"
        :class="$style.animationText"
        @mouseover="restartAnimation($event);"
    >
        {{ splitLetters[index - 1] }}
    </span>
</template>

<style module lang="less">
.animationText {
    position: relative;
    opacity: 0;
    animation: moveText 0.6s forwards;
}

@keyframes moveText {
    0% { bottom: 0; opacity: 1; }
    50% { bottom: 0.2em; }
    100% { bottom: 0; opacity: 1; }
}
</style>
