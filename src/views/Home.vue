<template>
  <div class="home">
    <NewsColumn :options="TopNews" />
  </div>
</template>

<script>
// @ is an alias to /src
import NewsColumn from '../components/NewsColumn.vue';

export default {
  name: 'Home',
  components: {
    NewsColumn,
  },
  data: () => ({
    TopNews: {
      title: 'Top News',
      endpoint: 'top-headlines',
      sources: 'new-scientist,national-geographic', // ,google-news-au
      pageSize: 9,
      layout: [
        {
          col: 'lead',
          count: 2,
          classes: 'col-span-2',
          lede: true,
        },
        {
          col: 'secondary',
          count: 2,
          classes: 'order-first',
          lede: true,
        },
        {
          col: 'tertiary',
          count: 5,
          horizontal: true,
        },
      ],
    },
  }),
};
</script>
