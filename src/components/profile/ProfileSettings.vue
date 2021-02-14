<template>
  <b-container>
    <b-row>
      <b-col cols="6" md="6">
        <div>
          <b-card class="text-center" title="Disable Account">
            <b-card-text class="text-center">
              Your account will be enable when you login
            </b-card-text>
            <b-button class="w-100" size="lg" squared>
              Click Here
            </b-button>
          </b-card>
        </div>
      </b-col>

      <b-col cols="6" md="6">
        <div>
          <b-card class="text-center" title="Delete Account">
            <b-card-text class="text-center">
              Once you delete an account, there is no going back. Please be certain
            </b-card-text>
            <b-button class="w-100" size="lg" squared>
              Click Here
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
name: "ProfileSettings"
}
</script>

<style scoped>

</style>