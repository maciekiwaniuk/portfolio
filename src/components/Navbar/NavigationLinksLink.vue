<template>
    <a
        v-cursor-hover
        :href="`#${element}`"
        @click="navMenuStore.close()"
    >
        {{ text }}
    </a>
</template>

<script setup>
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

const props = defineProps({
    element: String,
    text: String
})
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

a {
    text-decoration: none;
    color: inherit;
    position: relative;
    cursor: pointer;
    margin-left: 1rem;

    transition: color ease 0.1s,
                transform ease 0.3s;
}
</style>
