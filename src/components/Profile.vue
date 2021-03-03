<template>
  <b-container class="">
    <b-row class="">
      <b-col class="" cols="12" md="12">
        <div class=" py-5 my-3">
          <div class="text-center">
            <label class="display-4">{{this.title}}</label>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="">
      <b-col class="">
        <b-navbar toggleable="lg" class="">
          <b-navbar-toggle target="test" label="test"></b-navbar-toggle>

          <b-collapse id="test" is-nav>
            <b-navbar-nav>
              <b-nav-item @click="goToLink('ProfileHome')">Account Information</b-nav-item>
              <b-nav-item >Security Center</b-nav-item>
              <b-nav-item @click="goToLink('ProfileSettings')">Settings</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row class="">
      <b-col class="">
        <router-view></router-view>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import { User } from '@/models/model-index'

export default {
  name: "Profile",
  data() {
    return {
      title: 'Account Information',
      user: new User()
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    }
  }
}

</script>

<style scoped>

</style>
