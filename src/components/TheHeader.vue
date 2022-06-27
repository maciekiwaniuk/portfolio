<template>
    <div class="header">
        <slot name="changeThemeButton"></slot>

        <div class="flags">
            <slot name="changeLanguageButtons"></slot>
        </div>

        <div class="menu">
            <ul>
                <li>HOME</li>
                <li>EDUCATION</li>
                <li>EXPERIENCE</li>
            </ul>
        </div>
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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 100%;
    height: 5rem;
    border-top: 0.7rem solid @blue-color;

    .flags {

    }

    .menu {
        ul {
            list-style-type: none;
        }
    }

}
</style>
