<template>
  <div id="app">
    <masthead/>
    <router-view class="" />
    <colophon />
  </div>
</template>

<script>
import Colophon from './components/Colophon.vue';
import Masthead from './components/Masthead.vue';

export default {
  components: { Masthead, Colophon },
  name: 'App',
};
</script>
