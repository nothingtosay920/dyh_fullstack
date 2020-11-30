<template>
  <div class="hello">
      {{message}}
      <hr />
      <!-- 子组件向父组件通信 -->
      <button @click="send">发送</button>
      <!-- 组件向组件传数据 -->
      {{formHI}}
  </div>
</template>

<script>
export default {
  props: ['message', 'formHI'],
  data () {
    return {
      msg: '我是子组件里面的数据'
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  }
}
</script>

<style>
.hello {
    color: brown;
    font-size: 20px;
    /* width: 100px;
    height: 50px;
    border: 2px dotted #361;
    margin: 0 auto; */
}
</style>
