<template>
  <div>
    <AppHeader />
    <div id="app">
      <router-view
        :trains="trains"
        :detail="detail" />
    </div>
  </div>
</template>

<script>
import trains from './assets/routeMeta.json';
import detail from './assets/routeDetail.json';
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  data() {
    return {
      trains,
      detail,
    };
  },
  mounted() {
    // bus.$emit('id-selected', 1);
  },
  components: {
    AppHeader,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  margin: 8px;
}
</style>
