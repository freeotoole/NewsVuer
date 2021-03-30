<template>
  <div class="home">
    <NewsColumn :options="TopNews" />
    <NewsColumn :options="FakeNews" />
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
      endpoint: 'everything',
      sources: 'new-scientist,national-geographic,google-news-au', //
      pageSize: 9,
      columns: [
        {
          count: 2,
          classes: 'col-span-2',
          layout: ['lede', 'horizontal lede'],
        },
        {
          count: 2,
          classes: 'lg:order-first',
          layout: 'lede',
        },
        {
          count: 5,
          layout: 'horizontal',
        },
      ],
    },
    FakeNews: {
      title: 'Fake News (Fox)',
      endpoint: 'everything',
      sources: 'fox-news', // ,google-news-au
      pageSize: 9,
      columns: [
        {
          count: 1,
          classes: 'col-span-2',
          layout: ['lede', 'horizontal lede'],
        },
        {
          count: 3,
          classes: 'col-span-2',
          layout: 'horizontal lede',
        },
      ],
    },
  }),
};
</script>
