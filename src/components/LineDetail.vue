<template>
  <div class="">
    <span
      class="listDetail-back"
      v-html="getArrow()"
      @click="goBack">
    </span>
    <table class="">
      <tr>
        <td class="route-symbol-td">
          <span class="route-symbol"
                :style="routeColor(train.route_color)">{{ $route.params.id }}</span>
        </td>
        <td class="name">{{ train.route_long_name }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="small description">{{ train.route_desc }}</p>
        </td>
      </tr>
    </table>
    <ontime-table
      :detail="detail">
    </ontime-table>
  </div>
</template>

<script>
import icons from 'glyphicons';

export default {
  name: 'LineDetail',
  props: ['detail'],
  data() {
    return {
      train: this.detail[this.$route.params.id],
    };
  },
  mounted() {

  },
  methods: {
    getArrow() {
      return `${icons.arrowL} View list`;
    },
    goBack() {
      this.$router.push({ path: '/' });
    },
    routeColor(color) {
      return {
        'background-color': `#${color}`,
      };
    },
  },
  components: {
    OntimeTable: () => import('./OntimeTable'),
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

.line-description {

}

.listDetail-back {
  cursor: pointer;
  display: block;
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
