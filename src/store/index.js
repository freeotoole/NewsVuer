import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spreads: [
      {
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
      {
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
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
