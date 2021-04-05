<template>
  <article>
    <div
      :class="[article.layout.includes('horizontal') ? 'grid gap-4 grid-cols-3' : '']"
    >
      <a
        v-if="article.urlToImage"
        :href="article.url"
        :title="`Article from ${article.source.name} posted at ${article.publishedAt}`"
        :class="[
          'block mb-2',
          article.layout.includes('horizontal') ? 'order-last' : '',
        ]"
        ><img :src="article.urlToImage" alt=""
      /></a>

      <div :class="article.layout.includes('horizontal') ? 'col-span-2' : ''">
        <h3 class="text-xl font-serif font-bold tracking-wide"
        >
          <a
            :href="article.url"
            class=" hover:underline"
            :title="`Article from ${article.source.name} posted at ${article.publishedAt}`"
            >{{ article.title }}</a
          >
        </h3>
        <p v-if="article.layout.includes('lede')">
          {{ article.description }}
        </p>
      </div>
    </div>
    <small class=" uppercase text-gray-500 font-sans">
      {{ article.source.name }} | {{ article.publishedAt | date }}
    </small>
  </article>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
