<template>
  <div class="">
    <span
      class="listDetail-back"
      v-html="getArrow()"
      @click="goBack"
      v-if="this.$route.name === 'mobile'">
    </span>
    <table class="">
      <tr>
        <td class="route-symbol-td">
          <span class="route-symbol"
                :style="routeColor(train.route_color)">{{ train.route_short_name }}</span>
        </td>
        <td class="name">{{ train.route_long_name }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="small description">{{ train.route_desc }}</p>
        </td>
      </tr>
    </table>
    <ontime-chart
      v-if="exists"
      :ontime="ontime">
    </ontime-chart>
    <ontime-table
      v-if="exists"
      :detail="detail"
      :ontime="ontime">
    </ontime-table>
    <div v-else>No data available</div>
  </div>
</template>

<script>
import icons from 'glyphicons';

export default {
  name: 'LineDetail',
  props: ['detail', 'routeId'],
  data() {
    return {

    };
  },
  computed: {
    exists: function () {
      return this.train.exists === 'true';
    },
    ontime() {
      console.log(this.$route.params.id)
      let rId = this.routeId;
      if (this.$route.params.id) {
        rId = this.$route.params.id
      } else if (!this.routeId && !this.$route.params.id) {
        return;
      }

      if (this.exists) {
        return this.formatData(require(`./../assets/waitTimes/${rId}.json`));
      } else {
        return '';
      }
    },
    train: function () {
      if (this.routeId) {
        return this.detail[this.routeId]
      } else {
        return this.detail[this.$route.params.id];
      }
    }
  },
  mounted() {
    
  },
  methods: {
    formatData(data) {
      const dataFiltered = data.filter((datum) => {
        return datum.PERIOD_YEAR !== 2009 && datum.PERIOD_YEAR !== 2010;
      });

      const dataYear = dataFiltered.map((datum) => {
        const obj = datum;
        obj['dateFormat'] = `${datum.PERIOD_MONTH}-${datum.PERIOD_YEAR}`
        return obj;
      });

      return dataYear.sort((a, b) => {
        const aYear = a.PERIOD_YEAR;
        const bYear = b.PERIOD_YEAR;
        const aMonth = a.PERIOD_MONTH;
        const bMonth = b.PERIOD_MONTH;

        if (bYear < aYear) {
          return -1;
        } else if (bYear > aYear) {
          return 1;
        } else if (bMonth < aMonth) {
          return -1;
        } else if (bMonth > aMonth) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    getArrow() {
      return `${icons.arrowL} View list`;
    },
    goBack() {
      this.$router.push({ path: '/' });
    },
    routeColor(color) {
      return {
        backgroundColor: color !== null  ? `#${color}` : '#6D6E71',
      };
    },
  },
  components: {
    OntimeTable: () => import('./OntimeTable'),
    OntimeChart: () => import('./OntimeChart'),
  },
};
</script>

<style>
td {
  vertical-align: middle;
}

.identifier {
  color: #fff;
  font-family: Helvetica;
  font-weight: 900;
  width: 28px;
  height: 28px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  margin-right: 7px;
}

.listDetail-back {
  cursor: pointer;
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
}

.listDetail-back:hover {
  font-weight: bold;
}

.name {
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
}

.route-symbol-td {
  width: 35px;
}
</style>
