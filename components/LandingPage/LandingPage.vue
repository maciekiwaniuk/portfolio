<script setup lang="ts">
import AnimateSplitLetters from '~/components/LandingPage/AnimateSplitLetters.vue';
</script>

<template>
    <section
        :class="$style.landingPage"
    >
        <div :class="$style.text">
            <h2 :class="$style.myNameIs">
                {{ $t('landingPage.myNameIs') }}
            </h2>

            <h1 :class="$style.name">
                <AnimateSplitLetters
                    :text="$t('landingPage.name')"
                />
            </h1>

            <p :class="$style.description">
                {{ $t('landingPage.description') }}
            </p>
        </div>
    </section>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.landingPage {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: 60vh;
    margin: auto;
    padding: 1.6rem;

    .text {
        .myNameIs {
            font-family: 'Caveat', serif;
            font-weight: 400;
            font-size: 1.7rem;
        }
        .name {
            display: block;
            margin-bottom: 0.5rem;
            font-family: 'Lato', serif;
            font-weight: 700;
            font-size: 3.5rem;
            color: @blue-color;
        }
        .description {
            font-size: 1.4rem;
        }
    }
}

@media (min-width: @first-breakpoint) {
    .landingPage {
        min-width: 30rem;
        max-width: 40rem;
        min-height: calc(100vh - @navbar-height - @navbar-border);

        .text {
            .myNameIs {
                font-size: 2.5rem;
            }
            .name {
                font-size: 5rem;
            }
            .description {
                font-size: 1.7rem;
            }
        }
    }
}
</style>
