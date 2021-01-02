<template>
  <div id="app">
    <div>{{this.$store.state.num}}</div>
    <div>{{this.$store.getters.getNum}}</div>
    <button @click="add">+1</button>
    <button @click="asyncadd">+2</button>
  </div>
</template>

<script>

export default {
  method: {
    add() {
      this.$store.commit('add', 1)
    },
    asyncadd() {
      this.$store.dispath('actionAdd', 2)
    }
  }
}
</script>

<style>

</style>
