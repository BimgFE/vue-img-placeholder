<template>
    <div>
        <div class="img-placeholder" :style="{backgroundColor: backgroundColor, paddingBottom: paddingBottom}">
           <img :src="src">
        </div>
    </div>
</template>

<script>
import defaultSrc from './img/1.png';
export default {
    name: 'img-placeholder',
    props: {
        backgroundColor: {
            type: String,
            default: '#f7f7f7'
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required:true
        },
        src: {
            type: String,
            default: defaultSrc
        }
    },

    computed: {
        paddingBottom() {
            return (this.height / this.width) * 100 + '%';
        }
    }
}
</script>

<style scoped lang="less">
.img-placeholder {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0 none;
    height: 0;
    overflow: hidden;

    img {
        left: 0;
        top: 0;
        position: absolute;
        height: 100%;
        width: 100%;
    }
}
</style>