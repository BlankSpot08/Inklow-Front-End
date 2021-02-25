<template>
  <b-container class="mb-5 text-center">
    <b-row class="pb-5">
      <b-col>
        <div class="">
          <h3>
            Select a category
          </h3>
          <label>
            Answers may be delayed if you select the wrong category for your inquiry
          </label>
        </div>
      </b-col>
    </b-row>

    <b-row class="border pb-5">
      <b-col class="mx-3">
        <div class="pb-5 border-bottom">
          <div class="py-5">
            <h5>
              You do not need to login to submit an inquiry about these following issues
            </h5>
          </div>

          <b-button-group class="w-75" size="lg">
            <b-button class="w-75" squared>
              Compromised Account/Appeal
            </b-button>
            <b-button class="w-75" squared>
              Other
            </b-button>
          </b-button-group>
        </div>

        <div class="">
          <div class="py-5">
            <h5>
              You need to login to submit inquiries about the following issues.
            </h5>
          </div>

          <b-button-group class="w-75" size="">
            <b-button-group class="w-50 h-100" size="lg" vertical>
              <b-button size="" squared disabled>
                Game
              </b-button>
              <b-button size="" @click="goToLink('SupportWrite')" squared>
                Report/Restriction
              </b-button>
            </b-button-group>
            <b-button-group class="w-50 h-100" size="lg" vertical>
              <b-button squared disabled>
                In-Game Recovery
              </b-button>
              <b-button squared disabled>
                Billing
              </b-button>
              <b-button squared disabled>
                Event/Coupon
              </b-button>
            </b-button-group>
            <b-button-group class="w-50 h-100" size="lg" vertical>
              <b-button squared to="/Support/Index/Write">
                Technical Issues
              </b-button>
              <b-button to="/Support/Index/Write" squared>
                Website
              </b-button>
            </b-button-group>
          </b-button-group>
        </div>
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
