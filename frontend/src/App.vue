<template>
  <div class="section pt-4" style="max-width: 900px; margin: auto">
    <NavBar></NavBar>
    <router-view> </router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>
