<template>
  <b-navbar fixed="top" sticky toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand @click="goToLink('Home')">
      <h1>Inklow</h1>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="goToLink('Community')">Community</b-nav-item>
        <b-nav-item @click="goToLink('About')">About</b-nav-item>
        <b-nav-item @click="goToLink('Support')">Support</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-if="loginStatus" class="ml-auto" >
        <b-nav-item @click="goToLink('ProfileHome')">Profile</b-nav-item>
        <b-nav-item @click="handleLogout()">Logout</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item @click="goToLink('Register')">Sign Up</b-nav-item>
        <b-nav-item @click="goToLink('Login')">Login</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import AuthenticationService from "@/services/authentication-service"

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
    handleLogout() {
      AuthenticationService.logout()

      this.$store.dispatch('updateLoginStatus', false)
      this.$router.push('/')
    },
    goToLink(name) {
      this.$router.push({name: name})
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
