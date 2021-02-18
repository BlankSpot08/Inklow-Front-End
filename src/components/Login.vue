<template>
  <b-container class="">
    <b-row class="" align-h="center">
      <b-col class="" cols="12" md="9">
        <div class="py-5 my-3 border-bottom border-dark">
          <div class="text-center">
            <label class="display-4">Login</label>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="" cols="12" md="6">
        <b-form class="py-5 border-bottom border-dark" @submit.prevent='handleLogin'>
          <b-form-group>
            <b-form-input name="username" v-model="user.username" size="lg" type="text" placeholder="Username" v-bind:value="user.username" required></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input name="password" v-model="user.password" size="lg" type="password" v-bind:value="user.password" placeholder="Password" required></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-button class="w-100" size="lg" type="submit" squared>
              Login
            </b-button>
          </b-form-group>

          <b-form-group>
            <b-form-checkbox size="lg">
              Remember login information
            </b-form-checkbox>
          </b-form-group>

          <b-container class="py-1">
            <b-row class="text-center mx-auto">
              <b-col>
                <b-link to="#">Find Account</b-link></b-col>
              <b-col>
                <b-link to="#">Recover Password</b-link></b-col>
              <b-col>
                <b-link to="#">Sign Up</b-link></b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="12" md="6">
        <div class="py-5 px-2">
          <b-form-group>
            <b-button class="w-100" size="lg" squared>
              Login with Facebook
            </b-button>
          </b-form-group>

          <b-form-group>
            <b-button class="w-100" size="lg" squared>
              Login with Steam
            </b-button>
          </b-form-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { authService, userService } from '@/services'

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: 'BlankSpot08',
        password: '09194163795'
      }
    }
  },
  props: [],
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    async handleLogin() {
      const response = await authService.login(this.user)

      if (response) {
        const token = response.data.jwt

        const user = (await userService.getUser(token)).data

        if (token && user) {
          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('user', JSON.stringify(user))

          this.$store.dispatch('updateLoginStatus', true)
          this.$router.push('/')
        }
      }
    },
  },
  created() {

  }
}
</script>

<style scoped>

</style>
