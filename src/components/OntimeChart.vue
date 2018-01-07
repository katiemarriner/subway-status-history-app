<template>
  <table-component
    :data="ontime"
    sort-by="PERIOD_YEAR"
    :show-filter="false"
    sort-order="desc"
    :show-caption="false"
    table-class="ontimeChart-table">
    <table-column
      :formatter="formatDate"
      label="Month"
      cell-class="date"
      header-class="date">
    </table-column>
    <table-column
      show="MONTHLY_ACTUAL"
      :formatter="formatPercent"
      label="Actual"
      data-type="numeric"
      cell-class="number"
      header-class="number">
    </table-column>
    <table-column
      show="MONTHLY_TARGET"
      :formatter="formatPercent"
      label="Target"
      data-type="numeric"
      cell-class="number"
      header-class="number">
    </table-column>
    <table-column
      label="% point difference"
      data-type="numeric"
      cell-class="number"
      header-class="number">
      <template slot-scope="obj">
        <span v-html="formatPctPt(obj)"></span>
      </template>
    </table-column>
  </table-component>
</template>

<script>
export default {
  name: 'OntimeChart',
  data() {
    return {

    };
  },
  computed: {
    ontime() {
      return this.formatData(require(`./../assets/waitTimes/${this.$route.params.id}.json`));
    },
  },
  mounted() {

  },
  methods: {
    formatData(data) {
      const dataFiltered = data.filter((datum) => {
        return datum.PERIOD_YEAR !== 2009 && datum.PERIOD_YEAR !== 2010;
      });

      return dataFiltered.sort((a, b) => {
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
    formatDate(obj) {
      const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
      return `${months[obj.PERIOD_MONTH - 1]} ${obj.PERIOD_YEAR}`;
    },
    formatPercent(num) {
      return `${num.toFixed(2)}%`;
    },
    formatPctPt(obj) {
      const pctPtDiff = (Number(obj.MONTHLY_ACTUAL) - Number(obj.MONTHLY_TARGET)).toFixed(2);
      let pctPtClass = '';
      if (pctPtDiff < 0) {
        pctPtClass = 'negative';
      } else if (pctPtDiff > 0) {
        pctPtClass = 'positive';
      }
      return `<span class="${pctPtClass}">${pctPtDiff}</span>`;
    },
  },
  components: {

  },
};
</script>

<style>
.date {
  text-align: left;
}
.negative {
  color: red;
}
.number {
  text-align: right;
}
.ontimeChart-table {
  clear: both;
}
.ontimeChart-table td {
  width: 70px;
}
.positive {
  color: green;
}
</style>
