<template>
    <div class="navbar">

        <TheNavbarThemeButton />

        <TheNavbarLanguageButtons />

        <TheNavbarNavigation />

    </div>
</template>

<script setup>
import TheNavbarThemeButton from '@/components/TheNavbarThemeButton.vue';
import TheNavbarLanguageButtons from '@/components/TheNavbarLanguageButtons.vue';
import TheNavbarNavigation from '@/components/TheNavbarNavigation.vue';

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navbar {
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 5rem;
    border-top: 0.7rem solid @blue-color;
    font-weight: 700;
    transition: background-color ease 1s,
                color ease 1s;

    justify-content: space-around;
    @media (min-width: 600px) {
        justify-content: space-evenly;
    }
}


</style>
