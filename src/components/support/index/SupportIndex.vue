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
                <b-button class="w-100" @click="goToSupportWriteLink(appealCategories)" squared>
                  Compromised Account/Appeal
                </b-button>
                <b-button class="w-100" @click="goToSupportWriteLink(otherCategories)" squared>
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
                <b-button class="w-100" squared disabled>
                  Game
                </b-button>
                <b-button class="w-100" squared disabled>
                  In-Game Recovery
                </b-button>
                <b-button class="w-100" @click="goToSupportWriteLink(technicalIssuesCategories)" squared>
                  Technical Issues
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-100" @click="goToSupportWriteLink(reportRestrictionsCategories)" squared>
                  Report/Restriction
                </b-button>
                <b-button class="w-100" squared disabled>
                  Billing
                </b-button>
                <b-button class="w-100" @click="goToSupportWriteLink(websiteCategories)" squared>
                  Website
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="" md="10">
              <b-button-group class="w-100" size="lg">
                <b-button class="w-50" squared disabled>
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
    goToSupportWriteLink(categories) {
      this.$router.push({name: 'SupportWrite', params: { categories: categories}})
    }
  },
  data() {
    return {
      appealCategories: [
        {value: null, text: 'Choose a category'},
        {value: 'Compromised Account', text: 'Compromised Account'},
        {value: 'Appeal Restriction', text: 'Appeal Restriction'}
      ],
      otherCategories: [
        {value: null, text: 'Choose a category' },
        {value: 'Other Inquiries', text: 'Other Inquiries' }
      ],
      reportRestrictionsCategories: [
        {value: null, text: 'Choose a category'},
        {value: 'System Exploitation', text: 'Report System Exploitation'},
        {value: 'Bots/Macros', text: 'Report Bots/Macros'},
        {value: 'User Behavior', text: 'Report User Behavior'}
      ],
      technicalIssuesCategories: [
        {value: null, text: 'Choose a category'},
        {value: 'Unable to Install', text: 'Unable to Install'},
        {value: 'Unable to Update', text: 'Unable to Update'},
        {value: 'Cannot Run', text: 'Cannot Run'},
        {value: 'Lag/Crash', text: 'Lag/Crash'},
      ],
      websiteCategories: [
        {value: null, text: 'Choose a caregory'},
        {value: 'Membership Information', text: 'Membership Information'},
        {value: 'Web Storage Related', text: 'Web Storage Related'},
        {value: 'Website Related', text: 'Website Related'},
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}

</script>

<style scoped>

</style>
