<template>
  <div class="subway-map"></div>
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import * as spam from 'spamjs';

export default {
  name: 'SubwayMap',

  created() {
    d3.json('./src/assets/mapSubway.json', function(error, mapSubway) {
      console.log(spam);
      var map = new spam.StaticCanvasMap({
        element: '.subway-map',
        data: [{
          features: topojson.feature(mapSubway, mapSubway.objects.mapSubway),
          static: {
            paintfeature: function(parameters, mapSubway) {
              parameters.context.stroke()
            }
          }
        }]
      })
      map.init()
    });
  }
}
</script>
