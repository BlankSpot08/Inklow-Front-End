<template>
  <b-container class="my-4">
    <b-row class="" align-h="center">
      <b-col class="mb-5 border" md="10">
        <div class="py-4 text-center">
          <label class="display-4">
            Submit an Inquiry
          </label>
        </div>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="" md="">
        <router-view class="p-0"></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SupportSend",
  data() {
    return {

    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>

</style>
