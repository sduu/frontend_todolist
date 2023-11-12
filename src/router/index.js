import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';
import ChartView from '../views/ChartView.vue';

const routes = [
  { path: '/', name: 'TodoView', component: TodoView },
  { path: '/chart', name: 'ChartView', component: ChartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
