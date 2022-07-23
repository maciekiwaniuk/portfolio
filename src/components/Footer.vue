<template>
    <div
        class="footer"
        :class="{ 'footer-dark-theme': themeStore.value == 'dark',
                  'footer-light-theme': themeStore.value == 'light' }"
    >
        <div class="info">
            {{ t('author') }} - {{ currentYear }} {{ t('footer.allRightsReserved') }}
        </div>

        <div class="icons">
            <a
                class="link"
                target="_blank"
                v-cursor-hover
                href="https://www.linkedin.com/in/iwaniuk-maciej/"
            >
                <Icon
                    icon="logos:linkedin-icon"
                    width="20"
                />
            </a>


            <a
                class="link"
                target="_blank"
                v-cursor-hover
                href="https://github.com/maciekiwaniuk"
            >
                <Icon
                    icon="codicon:github"
                    width="20"
                />
            </a>
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const currentYear = new Date().getFullYear();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 4rem;
    min-width: 100%;
    border-top: solid @blue-color 0.2rem;
    border-bottom: solid @blue-color 0.2rem;

    .info {
        font-family: 'LatoFontLight';
        font-size: 0.90rem;
        font-style: italic;
        text-align: center;
        padding-right: 0.3rem;
    }
    .icons {
        text-align: center;

        .link {
            text-decoration: none;
            color: inherit;
            padding-right: 0.3rem;
        }
    }
}

@media (min-width: @first-breakpoint) {
    .footer {
        .info {
            font-size: 1.1rem;
            padding-right: 0.5rem;
        }
        .icons {
            padding-top: 0.2rem;
        }
    }
}

.footer-dark-theme {
    background-color: #dark[background-color-on-element];
}
.footer-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
