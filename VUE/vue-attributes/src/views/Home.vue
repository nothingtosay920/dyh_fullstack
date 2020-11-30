<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num++
    }
  },
  extends: app, // 扩展 允许重复存在
  // 代码混入
  mixins: [addLog]
}
</script>

<style>

</style>
