<template>
  <div class="subway-map"></div>
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import * as spam from 'spamjs';

export default {
  name: 'SubwayMap',
  props: ['colors'],
  created() {
    d3.json('./src/assets/mapSubway.json', (error, mapSubway) => {
      var map = new spam.StaticCanvasMap({
        element: '.subway-map',
        data: [{
          features: topojson.feature(mapSubway, mapSubway.objects.mapSubway),
          static: {
            paintfeature: (parameters, mapSubway) => {
              const name = mapSubway.properties.name.substring(0, 1);
              const color = this.colors[name] ? this.colors[name].route_color : '000';

              parameters.context.strokeStyle = `#${color}`;
              parameters.context.stroke();
            }
          }
        }]
      })
      map.init()
    });
  }
}
</script>
