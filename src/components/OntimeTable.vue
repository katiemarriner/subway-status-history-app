<template>
  <table-component
    :data="ontime"
    sort-by="PERIOD_YEAR"
    :show-filter="false"
    sort-order="desc"
    :show-caption="false"
    table-class="ontimeTable-table">
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
  name: 'OntimeTable',
  props: ['ontime'],
  data() {
    return {

    };
  },
  computed: {
    
  },
  mounted() {

  },
  methods: {
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
  text-transform: uppercase;
  font-size: 13.5px;
}
.negative {
  color: red;
}
.number {
  text-align: right;
  font-size: 13.5px;
}
.ontimeTable-table {
  clear: both;
  max-width: 350px;
}
.ontimeTable-table td {
  width: 25%;
}
.positive {
  color: green;
}
.table-component__th {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  text-align: center;
}
</style>
