<template>
  <div id="app">
    <div class="main-section columns">
      <NavBar />
      <main class="column">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
