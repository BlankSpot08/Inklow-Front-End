<template>
  <b-container class="">
    <b-row class="" align-h="center">
      <b-col class="pb-5" md="10">
        <div class="text-center">
          <h3>
            Select a category
          </h3>
          <label>
            Answers may be delayed if you select the wrong category for your inquiry
          </label>
        </div>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="mx-3 border" md="10">
        <b-container class="py-5" >
          <b-row>
            <b-col class="pb-5">
              <div class="text-center">
                <h5>
                  You do not need to login to submit an inquiry about these following issues
                </h5>
              </div>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="" md="10">
              <b-button-group class="bg-secondary w-100" size="lg">
                <b-button class="w-100" squared>
                  Compromised Account/Appeal
                </b-button>
                <b-button class="w-100" squared>
                  Other
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="border-top my-5" md="10">
              <div class="text-center py-5">
                <h5>
                  You need to login to submit inquiries about the following issues.
                </h5>
              </div>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-100" squared>
                  Game
                </b-button>
                <b-button class="w-100" squared>
                  In-Game Recovery
                </b-button>
                <b-button class="w-100" squared>
                  Technical Issues
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-100" @click="goToLink('SupportWrite')" squared>
                  Report/Restriction
                </b-button>
                <b-button class="w-100" squared>
                  Billing
                </b-button>
                <b-button class="w-100" squared>
                  Website
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="" md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-50" squared>
                  Event/Coupon
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SupportSend",
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    }
  }
}

</script>

<style scoped>

</style>
