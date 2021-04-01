<template>
  <div class="home">
    <template v-for="(spread, i) in spreads">
      <component :is="NewsColumn" :options="spread"  :key="i"/>
    </template>
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
    // component needs to be registered in data
    NewsColumn: 'news-column',
    spreads: [],
  }),
  mounted() {
    this.spreads = this.$store.state.spreads;
  },
};
</script>
