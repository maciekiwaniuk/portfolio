<script setup lang="ts">
import { useCursorHover } from '~/directives/useCursorHover';

const vCursorHover = useCursorHover();

function copyEmailToClipboard() {
    navigator.clipboard.writeText('iwaniukmaciej1@gmail.com');
}
</script>

<template>
    <section
        id="contact"
        class="contact"
    >
        <h2 class="title">
            {{ $t('contact.title') }}
        </h2>

        <div
            v-cursor-hover
            class="content"
            @click="copyEmailToClipboard();"
        >
            <Icon
                name="clarity:email-solid"
                size="35"
            />

            <span class="email">iwaniukmaciej1@gmail.com</span>
        </div>
    </section>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    margin: auto;
    padding-bottom: 2.5rem;
    user-select: text;

    .title {
        float: left;
        width: 100%;
        min-height: 3rem;
        text-align: center;
        font-family: 'LatoFontBold', serif;
        font-size: 3rem;
        color: @blue-color;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        cursor: pointer;
    }
    .email {
        padding-left: 0.5rem;
    }
}

@media (min-width: @first-breakpoint) {
    .contact {
        min-width: 36rem;
        max-width: 38rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
        .content {
            margin-top: 1rem;
        }
        .email {
            font-size: 1.3rem;
        }
    }
}
</style>
