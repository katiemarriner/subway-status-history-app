<template>
  <div class="half">
    <table>
      <tr>
        <td>
          <span class="identifier"
                :style="routeColor(train.route_color)">{{ $route.params.id }}</span>
        </td>
        <td class="name">{{ train.route_long_name }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="description">Here's a place for a possible description</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.half {
  width: 50%;
  display: inline-block;
  float: left;
}
</style>

<script>
export default {
  name: 'LineDetail',
  props: ['detail'],
  data() {
    return {
      train: this.detail[this.$route.params.id],
    };
  },
  methods: {
    routeColor: function (color) {
      return {
        'background-color': `#${color}`,
      };
    },
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

.name {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
}

.line-description {

}
</style>
