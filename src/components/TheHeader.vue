<template>
    <div class="header">
        <slot name="changeThemeButton"></slot>

        <slot name="changeLanguageButtons"></slot>
    </div>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.header {
    min-width: 100%;
    height: 2rem;
    background-color: orange;
}
</style>
