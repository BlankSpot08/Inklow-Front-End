<template>
  <b-container class="">
    <b-row class="" align-h="center">
      <b-col class="" cols="6" md="4"></b-col>

      <b-col class="" cols="6" md="6">
        <div class="py-5 my-3">
          <div class="text-center">
            <label class="display-4">{{this.title}}</label>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col cols="5" md="3">
        <b-navbar toggleable="" class="border-top border-bottom border-dark mr-2">
          <b-navbar-nav>
            <b-nav-item to="/MyPage/Home">Account Information</b-nav-item>
            <b-nav-item to="/MyPage/Settings">Security Center</b-nav-item>
            <b-nav-item to="/MyPage/Settings">Settings</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
      <b-col cols="7" md="7">
        <div class="border-top border-dark ml-2">
          <router-view></router-view></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import User from '@/models/User'

export default {
  name: "Profile",
  data() {
    return {
      title: 'My Page',
      user: new User()
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {

  }
}

</script>

<style scoped>

</style>