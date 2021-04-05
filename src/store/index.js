import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputTest: 'Test string',
    spreads: [
      {
        id: '1617319926',
        title: 'Top News',
        endpoint: 'top-headlines',
        sources: 'abc-news-au, australian-financial-review',
        // category: 'business',
        // country: 'au',
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
        id: '1617319857',
        title: 'Science & Environment',
        endpoint: 'everything',
        sources: 'new-scientist,national-geographic', // ,google-news-au
        pageSize: 4,
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
      {
        id: '1617568969',
        title: 'Entertainment',
        endpoint: 'top-headlines',
        category: 'entertainment',
        country: 'au',
        pageSize: 4,
        columns: [
          {
            count: 3,
            classes: 'col-span-2',
            layout: 'horizontal lede',
          },
          {
            count: 1,
            classes: 'col-span-2',
            layout: ['lede', 'horizontal lede'],
          },
        ],
      },
    ],
  },
  mutations: {
    // updateSpread

  },
  actions: {
    // do the local storage things here
  },
  modules: {
  },
});
