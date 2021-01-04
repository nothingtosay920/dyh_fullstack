<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{flag}}</li>
  <quick :data="right" v-if="right.length"></quick>

  
</template>

<script>
export default {
  name: 'quick',
  props: ['data'],
  setup(props) {
    let flag = props.data[0]
    let left = []
    let right = []
    props.data.slice(1).forEach(e => {
      e > flag ? right.push(e) : left.push(e)
    });
    return { left, right, flag }
  }
}
</script>

<style>

</style>