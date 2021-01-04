<template>
   <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>

  <TeleportDemo/>
  <Fragment :data="[1,2,3,4,5]" /> -->


  <!-- 异步 -->
  <!-- <Suspense>
    <template #defaule>
      <AsyncComponent :timeout="3000"></AsyncComponent>
    </template>
    <template #fallback>
      <loading></loading>
    </template>
  </Suspense>   -->
  <Todolist></Todolist>
  
</template>

<script>
// composition api
import { reactive, computed, ref, onMounted } from 'vue'
// import TeleportDemo from '@/components/Teleport'
// import Fragment from '@/components/Fargment'
// import AsyncComponent from '@/components/AsyncComponent.vue'
// import loading from '@/components/loading'
import Todolist from '@/components/Todolist'
// import AsyncComponent from '@/components/AsyncComponent'
export default {
  // 入口
  setup() {
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCounter(1)
    const num = ref(2)
    function add() {
      state.count++
      num.value += 10
    }
    // const double = computed(() => state.count * 2)

    onMounted(() => {
      console.log('onMounted');
    })
    
    return { state, add, double, num }
  },
  components: {
    // TeleportDemo,
    // Fragment,
    // AsyncComponent,
    // loading,
    Todolist
  }
}
  function useCounter (count) {
    const state = reactive({
      count
    })
    const double = computed(() => state.count * 2)
    return { state, double }
  }

  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
