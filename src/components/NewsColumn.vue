<template>
  <section :class="options.title | kebabCase">
    <h2 class="text-xl font-serif uppercase py-2">
      {{ options.title }}
    </h2>
    <div class="grid grid-cols-4 gap-8">
      <div
        v-for="(column, i) in articles"
        :key="i"
        :class="['', column.classes ? column.classes : '']"
      >
        <NewsArticle
          v-for="(article, j) in column.data"
          :key="j"
          :article="article"
          :lede="column.lede"
          :horizontal="column.horizontal"
          class="mb-3"
        />
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import NewsArticle from './NewsArticle.vue';

export default {
  name: 'NewsColumn',
  components: {
    NewsArticle,
  },

  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    articles: [],
  }),
  computed: {

  },
  async created() {
    this.getNewsArticles(this.options);
  },
  methods: {
    async getNewsArticles(opts) {
      await axios
        .get(`https://newsapi.org/v2/${opts.endpoint}?sources=${opts.sources}&pageSize=${opts.pageSize}&sortBy=publishedAt&${process.env.VUE_APP_NEWS_API_KEY}`)
        .then((response) => {
          console.log(response.data);
          let count = 0;
          opts.layout.forEach((col, i) => {
            this.articles.push({
              name: col.col,
              classes: col.classes,
              data: response.data.articles.slice(count, count + col.count),
            });
            // check options for lede and pass to column
            this.articles[i].lede = col.lede;
            this.articles[i].horizontal = col.horizontal;
            count += col.count;
          });
        });
    },
  },
};
</script>

<style>
</style>
