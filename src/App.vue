<template>
  <div id="app">
    <header class="bg-gray-700 py-4">
      <div class="nav container mx-auto text-white">
        <router-link to="/">Home</router-link> |
        <router-link to="/settings">Settings</router-link>
      </div>

    </header>
    <router-view class="container mx-auto" />
  </div>
</template>
