<template>
    <button
        data-aos="zoom-in-up"
        class="change-theme-button"
        v-cursor-hover
        @click="themeStore.toggle();"
    >
        <div class="blurrable" :class="{ 'blurr': navMenuStore.opened }">

            <img
                class="sun-icon icon"
                src="@/assets/images/icons/sun.svg"
                :alt="t('navbar.images.sun')"
                v-show="themeStore.value == 'dark'"
            >
            <img
                class="moon-icon icon"
                src="@/assets/images/icons/moon.svg"
                :alt="t('navbar.images.moon')"
                v-show="themeStore.value == 'light'"
            >

        </div>
    </button>
</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

/* change theme button */
.change-theme-button {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    transition: background-color ease 0.7s;

    .blurrable {
        transition: filter ease 0.3s;

        .icon {
            width: 2.2rem;
        }
        .sun-icon {
            // change black svg into white
            filter: invert(100%);
        }
        .moon-icon {
            //
        }
    }
}

@media (min-width: @first-breakpoint) {
    .change-theme-button {
        .blurrable {
            .icon {
                width: 2.5rem;
            }
        }
    }
}


</style>
