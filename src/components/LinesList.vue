<template>
  <div class="half">
    <div class="trainList-container half">
      <div
        v-for="train in trains"
        class="trainList-row"
        :key="train.route_id">
        <router-link
          class="trainList-routeId"
          :to="{ name: 'line', params: { id: train.route_id }}">
          {{ train.route_id }}
        </router-link>
      </div>
    </div>
    <div class="half">
      <SubwayMap :colors="detail" />
    </div>
    <div class="trainDetail-container">
      <router-view
        :detail="detail">
      </router-view>
    </div>
  </div>
</template>

<script>
import SubwayMap from './SubwayMap';

export default {
  name: 'LinesList',
  props: ['trains', 'detail'],
  data() {
    return {

    };
  },
  components: {
    SubwayMap,
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
