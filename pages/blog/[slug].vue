<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const fooPost = await queryCollection('blog').path(`/blog/${slug}`).first()
</script>

<template>
    <article>
        <ContentRenderer :value="fooPost">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </article>
</template>
