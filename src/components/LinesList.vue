<template lang="pug">
  div
    div.trainList-container.half
      table-component(
        table.trainList-table
        :data="trains"
        sort-by="route_short_name"
        sort-order="asc"
        :show-caption="false"
        :show-filter="false"
        @rowClick="getTrain"
      )
        table-column(
          show="route_short_name"
          label="Route"
          :formatter="formatter"
        )
          template(slot-scope="obj")
            span.route-symbol(
              :style="setStyle(obj.route_color)"
            ) {{ obj.route_short_name }}
        table-column(
          show="route_long_name"
          label=""
        )
    div.trainDetail-container.half
      // router-view(
      //   :detail="detail"
      //   v-if="mobile()"
      // )
      div.trainDetail_desktop()
        line-detail(
          :detail="detail"
        )
</template>

<script>
import LinesListRow from './LinesListRow';
import SubwayMap from './SubwayMap';
import LineDetail from './LineDetail';

export default {
  name: 'LinesList',
  props: ['trains', 'detail'],
  data() {
    return {
      columns: [{
        name: 'route_id',
      }],
      mobileBreakpoint: 700,
    };
  },
  computed: {
    
  },
  ready() {
    window.addEventListener('resize', () => {
      this.mobile();
    })
  },
  mounted() {

  },
  methods: {
    formatter(routeId) {
      return routeId;
    },
    getTrain(e) {
      if (this.mobile()) {
        this.$router.push({ path: `/line/mobile/${e.data.route_id}` });
      } else {
        this.$router.push({ path: `/line/${e.data.route_id}` });
      }
      
    },
    mobile: function () {
      return window.innerWidth < this.mobileBreakpoint;
    },
    setStyle(color) {
      return {
        backgroundColor: color !== null  ? `#${color}` : '#6D6E71',
      };
    },
  },
  components: {
    LineDetail,
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
@media(max-width:700px) {
  .trainDetail_desktop {
    display: none;
  }
}

</style>
