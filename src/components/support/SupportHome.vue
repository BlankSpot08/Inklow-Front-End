<template>
  <b-container class="py-4 bg-white">
    <b-row class="" align-h="center">
      <b-col class="p-0" md="6">
        <div style="height: 60px">
          <b-button class="w-100 h-100" size="lg" squared>
            My Inquiries
          </b-button>
        </div>
      </b-col>

      <b-col class="p-0" md="6">
        <div style="height: 60px">
          <b-button @click="goToLink('SupportIndex')" class="w-100 h-100" size="lg" squared>
            Submit an Inquiry
          </b-button>
        </div>
      </b-col>
    </b-row>

    <b-row class="my-4 py-4 border" align-h="center">

      <b-col class="w-100 py-0 mx-0" md="12">
        <div class="text-center pb-4">
          <label>
            <strong>
              FAQ
            </strong>
          </label>
        </div>

        <b-list-group class="p-0 m-0 w-100" v-for="fruit in fruits" :key="fruit">
          <b-list-group-item class="p-0 m-0 border-0">
            <b-input-group prepend="" append="">
              <b-button class="w-100 border text-left" squared v-b-toggle="'collapse-' + fruit" size="md">
                {{fruit}}
              </b-button>
            </b-input-group>
            <b-collapse :id="'collapse-' + fruit">
              <b-card>
                {{fruit}}
              </b-card>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>

    <b-row class="border py-4" align-h="center" align-content="center" align-v="center">

      <b-col class="w-100 px-0 mx-3 border-0" md="11">

        <div class="w-100 py-3 w-50 justify-content-center d-flex" >
          <b-input-group class="w-75 text-center align-center">
            <b-form-input class="tex" size="md" placeholder="Search for what you need.">

            </b-form-input>
            <b-input-group-append>
              <b-button class="" squared>
                Search
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>

        <div class="w-100 pb-3 text-center">
          <b-button-group class="w-75" size="md">
            <b-button squared>
              ID/Sign-up
            </b-button>
            <b-button squared disabled>
              Game Related
            </b-button>
            <b-button squared>
              Bugs/Errors
            </b-button>
            <b-button squared>
              Website
            </b-button>
            <b-button squared disabled>
              Billing
            </b-button>
          </b-button-group>
        </div>

        <!-- ANOTHER -->
        <div class="py-4 my-4 justify-content-center d-block">

<!--          <b-list-group class="">-->
<!--            <b-list-group-item class="p-0 m-0 border-0">-->
<!--              <b-input-group prepend="" append="">-->
<!--                <b-button class="w-100 border text-left" squared>-->

<!--                </b-button>-->
<!--              </b-input-group>-->
<!--              <b-collapse>-->

<!--              </b-collapse>-->
<!--            </b-list-group-item>-->
<!--          </b-list-group>-->

          <b-table
            id="talble"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            >

          </b-table>

          <b-pagination class="justify-content-center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            >
          </b-pagination>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: "SupportHome",
  data() {
    return {
      fruits: ['sad', 'happy', 'angery', 'not_angery', 'super_sad_boi'],
      perPage: 5,
      currentPage: 1,
      salads: ['sad', 'kangkong', 'apoy', 'tubig', 'water', 'aqua', 'mamma', 'mia', 'oh_well', 'hihi', 'hohhoo_mofos'],
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  methods: {
    // async handleSubmittingInquiry() {
    //   this.$router.push('/Support')
    // }
    goToLink(name) {
      this.$router.push({name: name})
    }
  },
  computed: {
    rows() {
      return this.salads.length
    }
  }
}
</script>

<style scoped>

</style>
