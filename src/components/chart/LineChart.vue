<template>
  <div>
    <apexchart :options="chartOptions" :series="chartSeries" type="line" height="350" />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import dayjs from 'dayjs';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    data: Array,
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: this.dates,
          labels: {
            formatter: value => dayjs(value).format('MM.DD'),
          },
        },
        yaxis: {
          min: 0,
          max: Math.max(...this.todoCounts) + 1,
          labels: {
            formatter: value => Math.round(value),
          },
        },
      };
    },
    chartSeries() {
      return [
        {
          name: 'Todo 개수',
          data: this.todoCounts,
        },
      ];
    },
    dates() {
      return this.sortedDates;
    },
    todoCounts() {
      return this.sortedDates.map(date => {
        const count = this.lastWeekData.filter(todo => todo.date === date).length;
        return count;
      });
    },
    sortedDates() {
      const oneWeekAgo = dayjs().subtract(1, 'week');
      const filteredData = this.data.filter(todo => dayjs(todo.date).isAfter(oneWeekAgo));

      const uniqueSortedDates = Array.from(new Set(filteredData.map(todo => todo.date))).sort();
      return uniqueSortedDates;
    },
    lastWeekData() {
      const oneWeekAgo = dayjs().subtract(1, 'week');
      return this.data.filter(todo => dayjs(todo.date).isAfter(oneWeekAgo));
    },
  },
};
</script>
