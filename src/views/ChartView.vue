<template>
  <h1>chart</h1>
  <DonutChart :data="todoData" />
</template>

<script>
import DonutChart from '@/components/chart/DonutChart.vue';
import { mapState } from 'vuex';

export default {
  components: {
    DonutChart,
  },
  computed: {
    ...mapState({
      todoData: 'todos',
    }),
  },
};
</script>
