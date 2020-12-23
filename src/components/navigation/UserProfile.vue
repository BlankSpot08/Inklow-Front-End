<template>
  <b-nav-bar class="ml-auto">
    <b-nav-item>
      Profile
    </b-nav-item>
    <b-nav-item >
      Logout
    </b-nav-item>
  </b-nav-bar>
</template>

<script>
export default {
  name: "UserProfile",
  methods: {
    handleLogout() {
      localStorage.removeItem('user')
    }
  }
}
</script>

<style scoped>

</style>