<template>
  <b-navbar fixed="top" sticky toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <h1>Inklow</h1>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/community">Community</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/support">Support</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-if="loginStatus" class="ml-auto" >
        <b-nav-item to="/MyPage/Home">Profile</b-nav-item>
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item to="/member/register/main">Sign Up</b-nav-item>
        <b-nav-item to="/member/login">Login</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import AuthService from "@/services/auth.service"

export default {
  name: 'Navigation',
  data() {
    return {  }
  },
  computed: {
    loginStatus() {
      // const user = JSON.parse(localStorage.getItem('token'))
      //
      // if (user) {
      //   console.log('user is logged in')
      //   return true
      // }
      //
      // console.log('user is not logged in')
      // return false
      return this.$store.state.loginStatus
    },
  },
  methods: {
    logout: function() {
      AuthService.logout()

      this.$store.dispatch('updateLoginStatus', false)
      this.$router.push('/')
    }
  },
  created() {
    console.log(localStorage.getItem('user'))
    console.log(this.$store.state.loginStatus)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
