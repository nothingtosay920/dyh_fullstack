<template>
  <div class="wrap">
      aaaaaa
      <button @click="sendA">AA</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      item: '我是组件A里面的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendAA', this.item)
    }
  }
}
</script>

<style>

</style>
