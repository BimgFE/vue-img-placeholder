import ImgPlaceholder from './index.vue';

ImgPlaceholder.install = function (Vue) {
    Vue.component(ImgPlaceholder.name, ImgPlaceholder);
};

export default ImgPlaceholder;
