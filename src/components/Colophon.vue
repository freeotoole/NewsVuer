<template>
  <div class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 md:px-6 py-8">
      <div class="grid grid-cols-3">
        <div>
          <h2 class="text-xl text-blue-400 mb-1">Built in a weekend using:</h2>
          <ul>
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li><a href="https://newsapi.org/">News API</a></li>
          </ul>
        </div>
        <div class="col-span-2">
          <h2 class="text-xl text-blue-400 mb-1">Can I use/steal it?</h2>
          <p>I would love to throw this on a server and build out a control panel for users (you) to create customised news feeds, however the <a href="https://newsapi.org/">News API</a> free licence only permits development usage from localhost. While it would be simple to run the Vue js build on localhost on the server and set up an NGINX reverse proxy to get around the CORS limitation implemented on the News API, it's not really ethical (or legal). So if you want to check it out properly grab a clone from Github and spin it up locally.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'colophon',
};
</script>
