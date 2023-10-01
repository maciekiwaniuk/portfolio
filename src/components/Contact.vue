<script setup lang="ts">
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { FadeDown, FadeUp } from '@/constants/app';
import { Icon } from '@iconify/vue';

const { t } = useLanguageSwitcher();

</script>

<template>
    <section
        role="region"
        id="contact"
        class="contact"
    >
        <h2 :data-aos="FadeDown" class="title">{{ t('contact.title') }}</h2>

        <div :data-aos="FadeUp" class="content">
            <Icon
                icon="clarity:email-solid"
                width="35"
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
