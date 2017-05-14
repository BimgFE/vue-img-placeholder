import ImgPlaceholder from './index.vue';

ImgPlaceholder.install = function (Vue) {
    Vue.component(Img.name, ImgPlaceholder);
};

export default ImgPlaceholder;
