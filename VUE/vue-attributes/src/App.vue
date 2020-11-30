<template>
  <div id="app">
    <!-- 父组件向子组件通信
    <Hello :message= "title" @sendData="getData" :formHI="formHI" />
    {{formChild}}
    组件相互传数据 <H1 @sendHI="getHI" /> -->
    <A/>
    <B/>
  </div>
</template>

<script>
// import Hello from '@/components/Hello.vue'
// import H1 from '@/components/Hi.vue'
import A from '@/components/A'
import B from '@/components/B'
export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      formChild: '',
      formHI: ''
    }
  },
  components: {
    // Hello,
    // Hi
    A,
    B
  },
  methods: {
    getData (e) {
      this.formChild = e
    },
    getHI (e) {
      this.formHI = e
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
