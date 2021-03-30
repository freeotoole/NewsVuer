<template>
  <article

  >
  <div :class="[horizontal ? 'grid gap-4 grid-cols-3' : '']">
    <a
      v-if="article.urlToImage"
      :href="article.url"
      :title="`Article from ${article.source.name} posted at ${article.publishedAt}`"
      :class="['block mb-2', horizontal ? 'order-last' : '']"
    ><img
      :src="article.urlToImage"
      alt=""
    ></a>
    <h3 :class="['text-xl', 'font-serif font-bold', horizontal ? 'col-span-2' : '']">
      <a
        :href="article.url"
        :title="`Article from ${article.source.name} posted at ${article.publishedAt}`"
      >{{ article.title }}</a>
    </h3>
    <p v-if="lede === true">
      {{ article.description }}
    </p>
  </div>
    <small class="text-bold uppercase text-gray-500">
      {{ article.source.name}} | {{ article.publishedAt | date }}
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
    lede: Boolean,
    horizontal: Boolean,
  },
};
</script>
