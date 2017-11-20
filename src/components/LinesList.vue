<template>
  <div class="container">
    <div class="trainList-container">
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
    <div class="trainDetail-container">
      <router-view
        :detail="detail">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinesList',
  props: ['trains', 'detail'],
  data() {
    return {

    };
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
