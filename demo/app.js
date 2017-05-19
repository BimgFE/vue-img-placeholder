import Vue from 'vue';
import App from './App.vue';

import ImgPlaceholder from '../dist';
Vue.use(ImgPlaceholder);
new Vue({
  el: '#app',
  ...App,
})