<template>
  <div class="wrap">
      bbbbbb {{msg}}
  </div>
</template>

<script>
// 公用一个Bus
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendAA', (e) => {
      console.log(e)
      this.msg = e
    })
  }
}
</script>

<style>

</style>
