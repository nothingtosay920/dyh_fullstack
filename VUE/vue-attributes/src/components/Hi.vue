<template>
  <div class="hi">
      <p @click="sendHI">
          {{hi}}
      </p>
  </div>
</template>

<script>
export default {
  data () {
   return {
     hi: 'hi welcome',
     hiMsg: '我是hi组件里面的数据'
    }
  },
  methods: {
    sendHI () {
      this.$emit('sendHI', this.hiMsg)
    }
  }
}
</script>

<style>

</style>