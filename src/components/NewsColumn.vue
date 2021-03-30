<template>
  <section :class="options.title | kebabCase">
    <h2 class="text-xl font-serif uppercase py-2">
      {{ options.title }}
    </h2>
    <div class="sm:grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(column, i) in articles"
        :key="i"
        :class="['', column.classes ? column.classes : '']"
      >
        <NewsArticle
          v-for="(article, j) in column.data"
          :key="j"
          :article="article"

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
          let count = 0;
          opts.columns.forEach((col, i) => {
            this.articles.push({
              classes: col.classes,
              data: response.data.articles.slice(count, count + col.count),
            });
            // check options for layout and pass to column
            this.articles[i].data.forEach((bbb, j) => {
              if (Array.isArray(col.layout)) {
                this.articles[i].data[j].layout = col.layout[j];
                console.log('has array');
              } else {
                this.articles[i].data[j].layout = col.layout;
                console.log('no array');
              }
            });
            count += col.count;
          });
        });
    },
  },
};
</script>

<style>
</style>
