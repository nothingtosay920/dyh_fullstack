<template>
    <div>
      <p>
          <router-link to="/">首页</router-link>|
          <router-link to="/about">关于</router-link>

      </p>
      <!-- a标签 -->
    
      <!-- 路由入口 -->
      <transition name="fade">
        <router-view ></router-view>
      </transition>
    </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5;
}
.fade-leave-active {
  opacity: 0;
}
.page {
  text-align: center;
}
p {
  text-align: center;
}
</style>