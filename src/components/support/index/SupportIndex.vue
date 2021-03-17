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
                <b-button class="w-100" @click="goToSupportWriteLink(compromisedAccountAppeal)" squared>
                  {{ compromisedAccountAppeal }}
                </b-button>
                <b-button class="w-100" @click="goToSupportWriteLink(other)"  squared>
                  {{ other }}
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="border-top mt-5" md="10">
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
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(game)" squared disabled>
                  {{ game }}
                </b-button>
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(inGameRecovery)" squared disabled>
                  {{ inGameRecovery }}
                </b-button>
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(technicalIssues)" squared>
                  {{ technicalIssues }}
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(reportRestriction)" squared>
                  {{ reportRestriction }}
                </b-button>
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(billing)" squared disabled>
                  {{ billing }}
                </b-button>
                <b-button class="w-100" @click="goToProtectedSupportWriteLink(website)" squared>
                  {{ website }}
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="" md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-50" @click="goToProtectedSupportWriteLink(eventCoupon)" squared disabled>
                  {{ eventCoupon }}
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
    goToSupportWriteLink(category) {
      this.$router.push({name: 'SupportWrite', query: { category: category }})
    },
    goToProtectedSupportWriteLink(category) {
      this.goToSupportWriteLink(category)
    }
  },
  data() {
    return {
      other: 'Other',
      compromisedAccountAppeal: 'Compromised Account/Appeal',
      game: 'Game',
      inGameRecovery: 'In-Game Recovery',
      technicalIssues: 'Technical Issues',
      reportRestriction: 'Report/Restriction',
      billing: 'Billing',
      website: 'Website',
      eventCoupon: 'Event/Coupon'
    }
  },
  async mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus
    }
  },
  created() {
  }
}

</script>

<style scoped>

</style>
