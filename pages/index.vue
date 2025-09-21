<script setup lang="ts">
import Contact from '~/components/home/Contact.vue';
import Education from '~/components/home/education/Education.vue';
import Experience from '~/components/home/experience/Experience.vue';
import LandingPage from '~/components/home/landingPage/LandingPage.vue';
import Projects from '~/components/home/projects/Projects.vue';
import Skills from '~/components/home/Skills.vue';

const config = useRuntimeConfig();

useSeoMeta({
    title: 'maciekiwaniuk.pl - Software Developer',
    description: 'Portfolio - Maciek Iwaniuk',
    ogDescription: 'Portfolio - Maciek Iwaniuk',
    ogTitle: 'maciekiwaniuk.pl - Software Developer',
    ogImage: `${config.public.baseUrl}/images/icons/180x180.png`,
    ogUrl: config.public.baseUrl,
});
</script>

<template>
    <LandingPage />

    <Experience />

    <Education />

    <Skills />

    <Projects />

    <Contact />
</template>

<style module lang="less">
@import '/styles/variables.less';

.container {
    min-height: 200vh;
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
</style>
