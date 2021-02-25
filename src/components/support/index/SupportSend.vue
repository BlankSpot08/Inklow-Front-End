<template>
  <b-container class="mb-5 mt-3">
    <b-row class="">
      <b-col class="mb-5 border-bottom">
        <div class="text-center pb-4">
          <label class="display-4">
            Submit an Inquiry
          </label>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col class="m-0 p-0">
        <router-view></router-view>
      </b-col>
    </b-row>

    <b-row class="border">
      <b-col class="py-5 px-5">
        <div class="">
          <b-input-group class="h-100">
              <b-form-checkbox size="lg" class="h-100 w-100 border border-bottom-0" required>
                Privacy Policy
              </b-form-checkbox>
            <b-textarea class="h-100" :value="privacyPolicy" size="md" rows="10" no-resize readonly>
            </b-textarea>

          </b-input-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SupportSend",
  data() {
    return {
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
          "Matters not specified in this \"Guide to Collection and Use of Personal Information\" are subject to the provisions of the \"Privacy Policy\" of the Company.\n"
    }
  }
}
</script>

<style scoped>

</style>
