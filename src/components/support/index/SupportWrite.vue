<template>
  <b-container class="border px-0 px-5" fluid="">
    <b-row>
      <b-col>
        <div class="text-center py-4">
          <Label class="">
            Please fill in the necessary information
          </Label>
        </div>

        <div class="d-flex">
          <div class="w-100 mr-4 d-block">
            <b-form-select class="w-100 mb-3" v-model="selected" :options="selections" size="lg">
            </b-form-select>

            <b-input class="w-100 mb-3" placeholder="Inquiry Title" type="text" size="lg">
            </b-input>
          </div>


          <div class="w-100 ml-4">
            <b-input class="w-100 mb-3" placeholder="Email" size="lg">
            </b-input>
          </div>
        </div>

        <div>
          <b-form-group label="Details">
            <b-textarea placeholder="We can get back to you faster if you provide us with more details." rows="7" no-resize>
            </b-textarea>
          </b-form-group>
        </div>

        <div>
          <b-form-group label="Attach Files" description="">
            <b-list-group class="" horizontal="" content="border-0">
              <b-list-group-item class="border-0">
                <b-form-file class="">
                </b-form-file>
              </b-list-group-item>
              <b-list-group-item class="border-0">
                <b-form-file class="">
                </b-form-file>
              </b-list-group-item>
              <b-list-group-item class="border-0">
                <b-form-file class="">
                </b-form-file>
              </b-list-group-item>
              <b-list-group-item class="border-0">
                <b-form-file class="">
                </b-form-file>
              </b-list-group-item>
            </b-list-group>
          </b-form-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SupportWrite",
  props: {
    categories: Array
  },
  data() {
    return {
      selected: null,
      selections: [
        {value: null, text: "Choose a category"},
        {value: "1", text: "Sad"},
        {value: "2", text: "Happy"}
      ]
    }
  }
}
</script>

<style scoped>

</style>

