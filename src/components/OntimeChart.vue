<template>
    <div id="ontimeChart-container"></div>
</template>

<script>
// import * as d3 from 'd3';
const d3 = Object.assign({}, require('d3-selection'), require('d3-time-format'), require('d3-scale'), require('d3-shape'), require('d3-array'));

export default {
  name: 'OntimeChart',
  props: ['ontime'],
  data() {
      return {
          container: '#ontimeChart-container'
      }
  },
  mounted() {
    this.renderLineChart();
  },
  methods: {
    formatLineData: function (data, x, y) {
        return data.map((d) => {
            return {
                x: d[x],
                y: d[y],
            }
        }).reverse();
    },
    renderLineChart: function () {
        this.width = this.getContainerWidth(this.container.slice(1));
        this.height = this.width / 1.5;

        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.lineActual = this.svg
            .append('g');
        
        this.lineTarget = this.svg
            .append('g');

        this.renderLine(this.formatLineData(this.ontime, 'dateFormat', 'MONTHLY_ACTUAL'), this.lineActual);
        this.renderLine(this.formatLineData(this.ontime, 'dateFormat', 'MONTHLY_TARGET'), this.lineTarget);
                
    },
    renderLine: function (data, gElement) {
        const parseTime = d3.timeParse('%-m-%Y');
        
        this.x = d3.scaleTime()
            .rangeRound([0, this.width]);
        
        this.y = d3.scaleLinear()
            .rangeRound([this.height, 0]);
        
        this.line = d3.line()
            .x((d) => {
                return this.x(parseTime(d.x));
            })
            .y((d) => {
                return this.y(d.y);
            });
        
        this.x.domain(d3.extent(data, (d) => {
            return parseTime(d.x);
        }));

        this.y.domain([50, d3.max(data, (d) => {
            return d.y;
        })]);

        console.log(data);

        gElement.append('path')
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", this.line);
    },
    getContainerWidth: function (containerID) {
        return document.getElementById(containerID).clientWidth;
    },
  },
};
</script>

