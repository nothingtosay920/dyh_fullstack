<template>
  <div class="login-container">
    <img src="@/assets/2.png" alt="" class="logo">

    <van-cell-group class="box">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>

    <!-- 登录 -->
    <van-row>
      <van-button size="small" type="default">注册</van-button>
      <van-button size="small" type="primary" class="btn-login" @click="handleLogin">登录</van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$http.login({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res);
      })
    },
    showLoginTip (status) {
      this.$toast.loading({
        message: status,
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
    },
    handleLogin() {
      if (this.username.trim() == '' || this.password.trim() == '') {
        this.$toast.fail('用户名密码不能为空')
        return
      }
      this.showLoginTip('登录中...')
      this.login()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 300px;
    margin: 100px 0 20px;
  }

  .box {
    width: 280px;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
}
</style>