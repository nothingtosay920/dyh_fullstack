<template>
  <div class="detail">
      {{$route.params.username}}的个人信息
      <button @click="goBack"></button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // this.$router.push({ path: '/', query: { id: 123 }})
      // 参数刷新会消失
      this.$router.push({ name: 'home', params: { id: 1234 }})

    }
  }
}
</script>

<style>

</style>