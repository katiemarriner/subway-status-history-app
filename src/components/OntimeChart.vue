<template>
  <div>
    <h4>On-time performance</h4>
    <div class="ontimeChart-legend">
      <div>On-time performance target (% on-time) compared to actual</div>
      <div>
        <div>
          <svg width="10" height="10">
            <rect width="5" height="1" stroke-width="1" x="5" y="5" class="lineTarget-legend"></rect>
          </svg>
          Target
        </div>
        <div>
          <svg width="10" height="10">
            <circle r="3" cx="5" cy="5" class="lineActual-legend" fill="red"></circle>
          </svg>
          Below target
          <svg width="10" height="10">
            <circle r="3" cx="5" cy="5" class="lineActual-legend" fill="green"></circle>
          </svg>
          Above target
        </div>
      </div>
    </div>
    <div id="ontimeChart" class="ontimeChart-container"><svg></svg></div>
  </div>
</template>

<script>
const d3 = Object.assign({}, require('d3-axis'), require('d3-selection'), require('d3-time-format'), require('d3-scale'), require('d3-shape'), require('d3-array'));

export default {
  name: 'OntimeChart',
  props: ['ontime'],
  data() {
    return {
      container: '#ontimeChart',
    };
  },
  mounted() {
    this.renderLineChart();
  },
  watch: {
    'ontime': 'renderLineChart',
  },
  methods: {
    formatLineData(data, x, y) {
      return data.map(d => ({ x: d[x], y: d[y], data: d })).reverse();
    },
    renderLineChart() {
      this.padding = {
        top: 15,
        right: 30,
        bottom: 30,
        left: 15,
      };
      this.width = this.getContainerWidth(this.container.slice(1))
                  - this.padding.left 
                  - this.padding.right;
      this.height = (this.width / 1.5)
                  - this.padding.top
                  - this.padding.bottom;

      this.svg = d3.select(`${this.container} svg`);
      this.svg.selectAll('svg > *').remove();
      this.svg
        .attr('width', this.width + this.padding.left + this.padding.right)
        .attr('height', this.height + this.padding.top + this.padding.bottom);

      this.offset = `translate(${this.padding.left}, ${this.padding.top})`;

      this.lineActual = this.svg
        .append('g')
        .attr('transform', this.offset);

      this.lineTarget = this.svg
        .append('g')
        .attr('transform', this.offset);

      this.calculateScale(this.ontime, () => {
        this.renderCircles(this.formatLineData(this.ontime, 'dateFormat', 'MONTHLY_ACTUAL'), this.lineActual, 'lineActual');
        this.renderTicks(this.formatLineData(this.ontime, 'dateFormat', 'MONTHLY_TARGET'), this.lineTarget, 'lineTarget');
      });
    },
    calculateScale(raw, callback) {
      const data = this.formatLineData(raw, 'dateFormat', 'MONTHLY_ACTUAL');
      
      this.parseTime = d3.timeParse('%-m-%Y');
      
      this.x = d3.scaleTime()
        .rangeRound([0, this.width]);

      this.y = d3.scaleLinear()
        .rangeRound([this.height, 0]);
      
      this.x.domain(d3.extent(data, d => this.parseTime(d.x)));
      this.y.domain([50, d3.max(data, d => d.y)]);

      this.xAxis = this.svg
        .append('g')
        .attr('transform', `translate(${this.padding.left}, ${this.padding.top + this.height})`)
        .call(d3.axisBottom(this.x));
      
      this.yAxis = this.svg
        .append('g')
        .attr('transform', `translate(${this.padding.left + this.width}, ${this.padding.top})`)
        .call(d3.axisRight(this.y))
      .append('text')
        .attr('class', 'label')
        .attr('x', 15)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text('(%)');
      
      callback();
    },
    renderTicks(data, gElement, className) {
      gElement
        .selectAll(`.${className}`)
        .data(data)
        .enter()
        .append('rect')
        .attr('class', className)
        .attr('x', (d) => {
          return this.x(this.parseTime(d.x)) - 1.5;
        })
        .attr('y', (d) => {
          return this.y(d.y);
        })
        .attr('width', 2)
        .attr('height', 0.1);
    },
    renderCircles(data, gElement, className) {
      gElement
        .selectAll(`.${className}`)
        .data(data)
        .enter()
        .append('circle')
        .attr('fill', (d) => {
          if (d.data.MONTHLY_ACTUAL > d.data.MONTHLY_TARGET) {
            return 'green';
          } else if (d.data.MONTHLY_ACTUAL < d.data.MONTHLY_TARGET) {
            return 'red';
          }
          return '#aaa';
        })
        .attr('class', className)
        .attr('cx', (d) => {
          return this.x(this.parseTime(d.x));
        })
        .attr('cy', (d) => {
          return this.y(d.y);
        })
        .attr('r', 2);
    },
    getContainerWidth: containerID => document.getElementById(containerID).clientWidth,
  },
};
</script>

<style lang="scss">
.ontimeChart-container {
  max-width: 350px;
}
h4 {
  margin: 5px 0;
}
.ontimeChart-legend {
  font-size: 11px;
  margin: 15px 0;
}
.lineTarget, .lineTarget-legend {
  fill: none;
  stroke: #000;
  stroke-width: 1;
}
.label {
  fill: #000;
}
</style>