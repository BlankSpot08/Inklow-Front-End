<template>
  <b-container class="py-4 bg-white">
    <b-row class="" align-h="center">
      <b-col class="p-0" cols="" md="5">
          <b-button class="w-100 h-100" size="lg" squared>
            My Inquiries
          </b-button>
      </b-col>

      <b-col class="p-0" md="5">
          <b-button @click="goToLink('SupportIndex')" class="w-100 h-100" size="lg" squared>
            Submit an Inquiry
          </b-button>
      </b-col>
    </b-row>

    <b-row class="" align-h="center">
      <b-col class="my-4 py-4 border" md="10">
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

    <b-row class="" align-h="center">
      <b-col class="py-4 border" md="10">
        <b-container>
          <b-row align-h="center">
            <b-col md="10">
              <div class="text-center">
                <b-input-group class="w-100">
                  <b-form-input class="tex" size="md" placeholder="Search for what you need.">
                  </b-form-input>
                  <b-input-group-append>
                    <b-button class="" squared>
                      Search
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="py-3" md="8">
              <b-button-group class="" size="md" >
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
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-table
                id="talble"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                >

              </b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-pagination class="justify-content-center"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                >
              </b-pagination>
            </b-col>
          </b-row>
        </b-container>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import supportService from '@/services/service-index';

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
      // items: supportService.getQuestions()
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
  },
  mounted() {
    window.scrollTo(0, 0);

    console.log(supportService.getQuestions())
  }
}
</script>

<style scoped>

</style>
