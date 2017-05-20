import Vue from 'vue';
import App from './App.vue';

import ImgPlaceholder from '../src';
Vue.use(ImgPlaceholder);
new Vue({
  el: '#app',
  ...App,
})