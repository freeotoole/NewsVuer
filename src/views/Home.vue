<template>
  <div class="">
    <section
  v-for="(spread, i) in spreads" :key="i">

    <header
     class="container mx-auto px-4 md:px-6">
     <!-- i > 0 ? 'border-t-2 border-fuchsia-600' : ''  -->
      <h2
        :class="['section-title ',
        ]" >
        <span>{{ spread.title }}</span>
      </h2>
    </header>
    <!-- <news-settings></news-settings> -->
      <NewsColumn
      :options="spread" />
  </section>
  </div>

</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import NewsColumn from '../components/NewsColumn.vue';
// import NewsSettings from '../components/NewsSettings.vue';
// eslint-disable-next-line no-unused-vars
export default {
  name: 'Home',
  components: {
    NewsColumn,
  },
  data: () => ({
    isEditing: true,
  }),
  computed: mapState(['spreads']),
  methods: {

  },
};
</script>
