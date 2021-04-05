<template>
<div class="container mx-auto px-4 md:px-6">
    <!-- List articles -->
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
          class="mb-3 pb-2"
        />

      </div>
    </div>
    <!-- end  -->
</div>
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

  async created() {
    this.getNewsArticles(this.options);
  },
  methods: {
    async getNewsArticles(opts) {
      const options = () => {
        let param = `${opts.endpoint}?`;
        // `&pageSize=${opts.pageSize}&sortBy=publishedAt`
        if (opts.sources) param += `sources=${opts.sources}&`;
        if (opts.category) param += `category=${opts.category}&`;
        if (opts.country) param += `country=${opts.country}&`;

        if (opts.pageSize) param += `pageSize=${opts.pageSize}&`;
        param += `${process.env.VUE_APP_NEWS_API_KEY}`;
        return param;
      };
      await axios
        .get(`https://newsapi.org/v2/${options()}`)
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
                // console.log('has array');
              } else {
                this.articles[i].data[j].layout = col.layout;
                // console.log('no array');
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
