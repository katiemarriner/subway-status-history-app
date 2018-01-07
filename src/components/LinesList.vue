<template>
  <div class="">
    <div class="trainList-container">
      <table-component
          table-class="trainList-table"
         :data="trains"
         sort-by="route_short_name"
         sort-order="asc"
         :show-caption="false"
         :show-filter="false"
         @rowClick="getTrain"
         >
         <table-column
          show="route_short_name"
          label="Route"
          :formatter="formatter">
            <template slot-scope="obj">
              <span
                class="route-symbol"
                :style="setStyle(obj.route_color)">{{ obj.route_short_name }}
              </span>
            </template>
          </table-column>
         <table-column
          show="route_long_name"
          label=""></table-column>
     </table-component>
      <!-- <div
        v-for="train in trains"
        class="trainList-row"
        :key="train.route_id">
        <router-link
          class="trainList-routeId"
          :to="{ name: 'line', params: { id: train.route_id }}">
          <LinesListRow></LinesListRow>
        </router-link>
      </div> -->
    </div>
    <!-- <div class="half">
      <subway-map :colors="detail" />
    </div> -->
    <div class="trainDetail-container">
      <router-view
        :detail="detail"
      >
      </router-view>
    </div>
  </div>
</template>

<script>
import LinesListRow from './LinesListRow';
import SubwayMap from './SubwayMap';

export default {
  name: 'LinesList',
  props: ['trains', 'detail'],
  data() {
    return {
      columns: [{
        name: 'route_id',
      }],
    };
  },
  mounted() {

  },
  methods: {
    formatter(routeId) {
      return routeId;
    },
    getTrain(e) {
      this.$router.push({ path: `/line/${e.data.route_id}` });
    },
    setStyle(color) {
      return {
        backgroundColor: color !== null ? `#${color}` : '#6D6E71',
      };
    },
  },
  components: {
    LinesListRow,
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
