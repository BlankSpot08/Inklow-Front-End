<template>
  <b-container class="py-4 bg-white">
    <b-row class="" align-h="center">
      <b-col class="p-0" cols="" md="5">
          <b-button @click="goToLink('SupportInquiry')" class="w-100 h-100" size="lg" squared>
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

        <b-list-group class="p-0 m-0 w-100" v-for="question in FAQ" v-bind:key="question.id" v-bind:item="question">
          <b-list-group-item class="p-0 m-0 border-0">
            <b-input-group prepend="" append="">
              <b-button class="w-100 border text-left" squared v-b-toggle="'collapse-' + question.id" size="md">
                [ {{question.category}} ] {{question.question}}
              </b-button>
            </b-input-group>
            <b-collapse :id="'collapse-' + question.id">
              <b-card>
                <b-container>
                  <b-row>
                    <b-col class="py-3">
                      <div>
                        <strong>Q</strong>: {{question.question}}
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="py-3">
                      <div>
                        <strong>A</strong>: {{question.answer}}
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
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
                  <b-form-input class="tex" size="md" placeholder="Search for what you need." v-model="questionSearch" v-bind:value="questionSearch">
                  </b-form-input>
                  <b-input-group-append>
                    <b-button class="" squared @click="getFilteredQuestions(questionSearch)">
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
                <b-button squared @click="getCategorizedQuestions('Id/Sign-up')">
                  ID/Sign-up
                </b-button>
                <b-button squared disabled>
                  Game Related
                </b-button>
                <b-button squared @click="getCategorizedQuestions('Bugs/Errors')">
                  Bugs/Errors
                </b-button>
                <b-button squared @click="getCategorizedQuestions('Website')">
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
                :items="questions"
                :fields="questionTableFields"
                :per-page="perPage"
                :current-page="currentPage"
                >
              </b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-pagination
                  class="justify-content-center"
                  v-model="currentPage"
                  :total-rows="questions.length"
                  :per-page="perPage"
                  aria-controls="test"
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
import { QuestionRepository } from '@/repository/repository-index'

export default {
  name: "SupportHome",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      questionTableFields: ['category', 'question', 'answer'],
      questions: this.getQuestions(),
      FAQ: this.getFAQ(),
      questionSearch: '',
    }
  },
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    },
    async getQuestions() {
      const questions = await QuestionRepository.getQuestions()

      this.questions = questions.data
    },
    async getFAQ() {
      const FAQ = await QuestionRepository.getFAQ()

      this.FAQ = FAQ.data
    },
    async getFilteredQuestions(filter) {
      if (this.questionSearch) {
        const questions = await QuestionRepository.getFilteredQuestions(filter)

        this.questions = questions.data

      } else {
        this.questions = this.getQuestions()
      }
    },
    async getCategorizedQuestions(category) {
      const questions = await QuestionRepository.getCategorizedQuestions(category)

      this.questions = questions.data
    }
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
