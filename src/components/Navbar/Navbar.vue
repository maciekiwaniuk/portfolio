<script setup lang="ts">
import ThemeButton from '@/components/Navbar/ThemeButton.vue';
import LanguageButtons from '@/components/Navbar/LanguageButtons.vue';
import Navigation from '@/components/Navbar/Navigation.vue';
</script>

<template>
    <div class="navbar">
        <ThemeButton />

        <LanguageButtons />

        <Navigation />
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    min-height: @navbar-height;
    border-top: @navbar-border solid @blue-color;
}

@media (min-width: @first-breakpoint) {
    .navbar {
        justify-content: space-evenly;
    }
}
</style>
