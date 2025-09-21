<script setup lang="ts">
import Blog from '~/components/blog/Blog.vue';

useHead({
    title: 'Blog - Maciek Iwaniuk',
    meta: [
        { name: 'description', content: 'Read my latest blog posts about web development, programming, and technology.' }
    ]
});
</script>

<template>
    <Blog />
</template>

<style module lang="less">
@import '/styles/variables.less';

.container {
    font-family: 'Lato', serif;
    font-weight: 400;
    user-select: none;
    transition: background-color ease @theme-switch-time,
                color ease @theme-switch-time;
}

.containerDarkTheme {
    background-color: #dark[background-color];
    color: #dark[text-color];
}

.containerLightTheme {
    background-color: #light[background-color];
    color: #light[text-color];
}

.blog {
    padding-top: 5rem;
    height: calc(100vh - @navbar-height - 4rem);
}
</style>
