<script setup lang="ts">
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const currentYear: number = new Date().getFullYear();
</script>

<template>
    <footer
        class="footer"
        :class="{ 'footer-dark-theme': themeStore.isDark,
                  'footer-light-theme': themeStore.isLight }"
    >
        <h3 class="info">
            {{ $t('author') }} - {{ currentYear }} {{ $t('footer.allRightsReserved') }}
        </h3>

        <!-- icons visible on footer while screen is small -->
        <div class="icons">
            <a
                v-cursor-hover
                class="link"
                target="_blank"
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/iwaniuk-maciej/"
            >
                <Icon
                    name="logos:linkedin-icon"
                    size="20"
                    class="linkedin-icon"
                />
            </a>

            <a
                v-cursor-hover
                class="link"
                target="_blank"
                aria-label="GitHub"
                href="https://github.com/maciekiwaniuk"
            >
                <Icon
                    name="codicon:github"
                    size="20"
                />
            </a>
        </div>

        <!-- icons on left side of screen while screen is big -->
        <div class="icons-on-big-screens">
            <a
                v-cursor-hover
                class="link"
                target="_blank"
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/iwaniuk-maciej/"
            >
                <Icon
                    name="logos:linkedin-icon"
                    size="40"
                    class="linkedin-icon"
                />
            </a>

            <a
                v-cursor-hover
                class="link"
                target="_blank"
                aria-label="GitHub"
                href="https://github.com/maciekiwaniuk"
            >
                <Icon
                    name="icon-park-outline:github"
                    size="40"
                />
            </a>
        </div>
    </footer>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 4rem;
    min-width: 100%;
    border-top: solid @blue-color 0.1rem;

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    .linkedin-icon {
        background-color: white;
        border-radius: 10%;
    }
    .info {
        text-align: center;
        padding-right: 0.3rem;
        font-family: 'LatoFontLight', serif;
        font-size: 0.90rem;
    }
    .icons {
        display: block;
        text-align: center;

        .link {
            padding-right: 0.3rem;
        }
    }
    .icons-on-big-screens {
        display: none;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 4rem;
        height: 7rem;

        a {
            width: 100%;
            text-align: center;
        }
    }
}

@media (min-width: @first-breakpoint) {
    .footer {
        .info {
            font-size: 1.1rem;
            padding-right: 0.7rem;
        }
        .icons {
            padding-top: 0.2rem;
        }
    }
}

@media (min-width: @footer-icons-breakpoint) {
    .footer {
        .icons {
            display: none;
        }

        .icons-on-big-screens {
            display: flex;
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
