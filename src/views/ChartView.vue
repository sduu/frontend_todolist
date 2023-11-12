<template>
  <h1>chart</h1>
  <LineChart :data="todoData" />
  <DonutChart :data="todoData" />
</template>

<script>
import DonutChart from '@/components/chart/DonutChart.vue';
import LineChart from '@/components/chart/LineChart.vue';
import { mapState } from 'vuex';

export default {
  components: {
    DonutChart,
    LineChart,
  },
  computed: {
    ...mapState({
      todoData: 'todos',
    }),
  },
};
</script>
