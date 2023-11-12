import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/reset.css';
import './assets/common.css';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('VueDatePicker', VueDatePicker);
app.component('VueApexCharts', VueApexCharts);

app.mount('#app');
