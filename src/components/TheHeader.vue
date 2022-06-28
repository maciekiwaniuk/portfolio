<template>
    <div class="header">
        <slot name="changeThemeButton"></slot>

        <div class="flags">
            <slot name="changeLanguageButtons"></slot>
        </div>

        <div class="menu">
            <ul
                @mouseenter="cursorStore.toggle();"
                @mouseleave="cursorStore.toggle();"
            >
                <li>{{ t('header.home') }}</li>
                <li>{{ t('header.education') }}</li>
                <li>{{ t('header.experience') }}</li>
                <li>{{ t('header.projects') }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorStore } from '@/stores/cursor';

export default {
    name: 'TheHeader',
    setup() {
        const { t } = useLanguageSwitcher();

        const cursorStore = useCursorStore();

        return { t, cursorStore };
    }
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
    font-family: 'LatoFont';
    font-weight: 700;

    .menu {
        text-transform: uppercase;

        ul {
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1rem;
        }
        li:first-of-type {
            position: relative;
        }
        li:first-of-type::after {
            content: '';

            position: absolute;
            left: 0;
            bottom: -0.15rem;
            width: 100%;

            border-width: 0 0 0.15rem 0;
            border-style: solid;
        }
        li {
            margin-left: 1rem;
        }
        li:hover {
            cursor: pointer;
        }
    }

}
</style>
