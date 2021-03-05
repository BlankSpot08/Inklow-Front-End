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

        <b-list-group class="p-0 m-0 w-100" v-for="item in items" :key="item.categories">
          <b-list-group-item class="p-0 m-0 border-0">
            <b-input-group prepend="" append="">
              <b-button class="w-100 border text-left" squared v-b-toggle="'collapse-' + item.id" size="md">
                {{item.question}}
              </b-button>
            </b-input-group>
            <b-collapse :id="'collapse-' + item.id">
              <b-card>
                {{item.answer}}
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
            <b-col class="py-3 pb-5" md="8">
              <b-button-group class="" size="md" >
                <b-button squared @click="pickCategory('Id/Sign-up')">
                  ID/Sign-up
                </b-button>
                <b-button squared disabled>
                  Game Related
                </b-button>
                <b-button squared @click="pickCategory('Bugs/Errors')">
                  Bugs/Errors
                </b-button>
                <b-button squared @click="pickCategory('Website')">
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
                id="table"
                :items="items"
                :fields="itemsFields"
                :per-page="perPage"
                :current-page="currentPage"
                :filter="searchCategory"
                >

              </b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-pagination class="justify-content-center"
                v-model="currentPage"
                :total-rows="items.length"
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
import { SupportRepository } from '@/repository/repository-index'

export default {
  name: "SupportHome",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      itemsFields: ['category', 'question', 'answer'],
      items: this.getQuestions,
      testing: [ 'aw', 'tsu', 'weh', 'di', 'nga', 'nganga', 'payo' ],
      searchCategory: ''
    }
  },
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    },
    async getQuestions() {
      const test = await SupportRepository.getQuestions();

      return test.data;
    },
    pickCategory(category) {
      this.searchCategory = category
    }
  },
  computed: {
  },
  async mounted() {
    window.scrollTo(0, 0)

    this.items = await this.getQuestions()
  }
}
</script>

<style scoped>

</style>
