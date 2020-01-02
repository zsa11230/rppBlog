<template>
  <img class="img" :src="fackerImg" />
</template>
<script>
const fackerImg = require('./facker.png')
export default {
  name: 'VecToDev',
  data () {
    return {
      fackerImg,
    }
  },
}
</script>
<style scoped>
img {
  margin: 0 auto;
  width: 500px;
  display: block;
}
</style>
