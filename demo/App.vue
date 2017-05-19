<template>
  <div class="wrapper">
    <h1>{{title}}</h1>
    <img-placeholder backgroundColor="red" :width="300" :height="200" src="https://avatars3.githubusercontent.com/u/3872051"></img-placeholder>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: 'This is a demo',
    }
  },
}
</script>

