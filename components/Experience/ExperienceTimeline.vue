<template>
    <div :class="$style.experienceTimeline">
        <div :class="$style.lineBefore" />
        <div :class="$style.circle" />
        <div :class="$style.lineAfter" />
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

@circle-size: 2.3rem;
@circle-margin: 0.5rem;
@line-width: 0.6rem;
@line-before-height: 10%;
@line-after-height: calc(100% - @line-before-height - @circle-size - @circle-margin);
@border-radius-lines: 3px;

.experienceTimeline {
    width: 100%;

    .lineBefore {
        width: @line-width;
        height: @line-before-height;
        margin: auto;
        background-color: @blue-color;
        border-radius: @border-radius-lines;
    }

    .circle {
        height: @circle-size;
        width: @circle-size;
        margin: @circle-margin auto;
        background-color: @blue-color;
        border-radius: 50%;
    }

    .lineAfter {
        width: @line-width;
        height: @line-after-height;
        margin: auto;
        background-color: @blue-color;
        border-radius: @border-radius-lines;
    }
}
</style>
