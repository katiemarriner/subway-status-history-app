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
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
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

.half {
  display: inline-block;
  width: 50%;
  float: left;
  @media(max-width: 550px){
    width: 100%;
  }
}

.route-symbol {
  border-radius: 100px;
  color: #fff;
  display: block;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 900;
  height: 25px;
  line-height: 25px;
  text-align: center;
  width: 25px;
}

.small {
  font-size: 14px;
}

.trainList-table tr {
  cursor: pointer;
}
</style>
