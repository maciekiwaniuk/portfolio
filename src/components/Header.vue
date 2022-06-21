<template>
    <div class="header">
        <button @click="changeTheme();" class="changeThemeButton">Theme switch</button>

        <button @click="changeLanguage('pl');" class="changeLanguageButton">PL</button>

        <button @click="changeLanguage('en');" class="changeLanguageButton">EN</button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        changeTheme: Function,
        changeLanguage: Function
    }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.header {
    min-width: 100%;
    height: 2rem;
    background-color: orange;
    .changeThemeButton {

    }

    .changeLanguageButton {

    }
}
</style>
