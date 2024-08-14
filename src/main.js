/* eslint-disable no-alert */
import { createApp } from 'vue';
import App from './App.vue';
import data from './data';
import data2 from './data2';

createApp(App).mount('#app');

alert(data.message);
alert(data2);
