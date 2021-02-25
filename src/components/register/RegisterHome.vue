<template>
  <b-container class="">
    <RegisterLabel/>

    <b-row class="">
      <b-col class="">
        <div class="py-4 text-center">
          <h3>Welcome to Inklow.</h3>
          <h6>Select how to create account</h6>
        </div>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="pb-4" cols="12" md="6">
        <b-button class="w-100" @click="goToLink('In-Progress')" size="lg" squared>
          Create Inklow Account
        </b-button>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="" cols="12" md="6">
        <div class="py-3">
        <span class="text-center">
          <h6>Use your Open Id to login easily</h6>
        </span>
          <div class="">
            <b-input-group>
              <b-button class="w-100" size="lg" squared>
                Login with Facebook
              </b-button>
            </b-input-group>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RegisterLabel from '@/components/register/RegisterLabel'

export default {
  name: "Register",
  components: {
    RegisterLabel,
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
