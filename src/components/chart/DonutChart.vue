<template>
  <div id="pie"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    data: Object,
    statusData: [],
  },
  mounted() {
    console.log('Todo Data in DonutChart:', this.data);
    this.drawChart();
  },
  data() {
    return {};
  },
  computed: {
    counts() {
      if (this.data) {
        return {
          진행전: this.data.filter(todo => todo.status === '진행전').length,
          진행중: this.data.filter(todo => todo.status === '진행중').length,
          완료: this.data.filter(todo => todo.status === '완료').length,
        };
      } else {
        return {
          진행전: 0,
          진행중: 0,
          완료: 0,
        };
      }
    },
  },
  methods: {
    drawChart() {
      const width = 300;
      const height = Math.min(width, 500);
      const radius = Math.min(width, height) / 2;
      const legendWidth = 110;

      const statusData = Object.entries(this.counts).map(([status, count]) => ({ status, count }));
      const sumData = statusData.map(d => d['count']).reduce((a, b) => a + b);
      const statusValues = statusData.map(d => d['count']);

      const svg = d3
        .select('#pie')
        .append('svg')
        .attr('width', width + legendWidth)
        .attr('height', height)
        .attr('viewBox', [-width / 2 + legendWidth / 2, -height / 2, width, height])
        .attr('style', 'max-width: 100%; height: auto;');

      const arc = d3
        .arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1)
        .startAngle((d, i) => (i != 0 ? angleScale(statusValues.slice(0, i).reduce((a, b) => a + b)) : 0))
        .endAngle((d, i) => angleScale(statusValues.slice(0, i + 1).reduce((a, b) => a + b)));

      const pie = d3
        .pie()
        .padAngle(1 / radius)
        .sort(null)
        .value(d => d.status);

      const color = d3
        .scaleOrdinal()
        .domain(statusData.map(d => d.status))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), statusData.length).reverse());

      const angleScale = d3
        .scaleLinear()
        .domain([0, sumData])
        .range([0, 2 * Math.PI]);

      svg
        .append('g')
        .selectAll()
        .data(pie(statusData))
        .join('path')
        .attr('fill', d => color(d.data.status))
        .attr('d', arc)
        .append('title')
        .text(d => `${d.data.status}: ${d.data.count.toLocaleString()}`);

      const legendGroup = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2 - 80})`);

      legendGroup
        .selectAll()
        .data(statusData)
        .join('rect')
        .attr('fill', d => color(d.status))
        .attr('y', (d, i) => i * 20)
        .attr('width', 12)
        .attr('height', 12);

      legendGroup
        .selectAll()
        .data(statusData)
        .join('text')
        .attr('x', 20)
        .attr('y', (d, i) => i * 20 + 10)
        .text(d => `${d.status} ${d.count}개`);
    },
  },
};
</script>

<style scoped></style>
