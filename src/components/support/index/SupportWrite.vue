<template>
  <b-container class="">
    <b-form @submit.prevent="handleSubmit">
      <b-row class="" align-h="center">
        <b-col class="border mb-5" md="10">
          <b-container class="">
            <b-row>
              <b-col>
                <div class="text-center py-4">
                  <label class="h5">
                    Please fill in the necessary information
                  </label>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-form-select class="w-100 mb-3" v-model="selected" :options="categories" size="lg" required>
                </b-form-select>

                <b-input class="w-100 mb-3" placeholder="Inquiry Title" type="text" size="lg" required>
                </b-input>
              </b-col>
              <b-col>
                <b-input class="w-100 mb-3" placeholder="Email" size="lg" required>
                </b-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-form-group label="Details" label-size="lg">
                  <b-textarea placeholder="We can get back to you faster if you provide us with more details." rows="7" no-resize>
                  </b-textarea>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col class="border py-3" md="10">
          <b-container>
            <b-row align-h="">
              <b-col class="py-3" md="">
                <b-input-group class="">
                  <b-form-checkbox class="w-100 py-1 pl-5 border border-bottom-0" size="lg" required>
                    Privacy Policy
                  </b-form-checkbox>

                  <b-textarea class="h-100 pl-4 bg-white" :value="privacyPolicy" size="md" rows="10" no-resize readonly>
                  </b-textarea>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row align-h="center">
              <b-col md="4">
                <b-button class="w-100" type="submit" size="lg" squared>
                  Submit
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "SupportWrite",
  methods: {
    handleSubmit() {

    }
  },
  data() {
    return {
      selected: null,
      privacyPolicy: "Terms and Conditions:\n" +
          "The personal data is collected in order to improve or better the services rendered to you, the player, from Pearl Abyss. By using this service, you agree to the collection and use of information in accordance with this policy.\n" +
          "\n" +
          "Required Personal Information\n" +
          "- Email Address\n" +
          "\n" +
          "Purpose of collection and use\n" +
          "- Customer Support and User Inquiries\n" +
          "\n" +
          "Personal Information Retention and Use Duration\n" +
          "- [Member] until Account is Deleted\n" +
          "- [Non-Member] 3 Years after Receipt of Inquiry\n" +
          "\n" +
          "※ Depending on the type of inquiry, there may be additional information collected such as name, date of birth, linkage information, mobile phone number, account number, payment records, automatically generated information, and information identifying the device.\n" +
          "\n" +
          "Matters not specified in this \"Guide to Collection and Use of Personal Information\" are subject to the provisions of the \"Privacy Policy\" of the Company.\n",
      categories: this.$store.getters.getSupportCategory
    }
  },
  mounted() {
    window.scrollTo(0, 0);

    console.log(this.categories)
    console.log([{ name: 'sad' }, {name:' yay'}])
  }
}
</script>

<style scoped>

</style>

