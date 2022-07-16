<template>
    <div class="navbar">

        <ThemeButton />

        <LanguageButtons />

        <Navigation />

    </div>
</template>

<script setup>
import ThemeButton from '@/components/Navbar/ThemeButton.vue';
import LanguageButtons from '@/components/Navbar/LanguageButtons.vue';
import Navigation from '@/components/Navbar/Navigation.vue';
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navbar {
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 5rem;
    border-top: 0.7rem solid @blue-color;
    justify-content: space-around;
}

@media (min-width: @first-breakpoint) {
    .navbar {
        justify-content: space-evenly;
    }
}
</style>
