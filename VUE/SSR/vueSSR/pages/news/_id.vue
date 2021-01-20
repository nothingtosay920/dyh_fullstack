<template>
  <div>
    <h2>new-content</h2>
    <p>NewsId: {{$route.params.NewsId}}</p>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>