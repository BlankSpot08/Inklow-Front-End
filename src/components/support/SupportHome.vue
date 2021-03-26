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

        <b-list-group class="p-0 m-0 w-100" v-for="question in FAQ" v-bind:key="question.id">
          <b-list-group-item class="p-0 m-0 border-0" v-b-toggle="'faq-collapse-' + question.id">
            <div class="border py-2 px-2">
              [ {{ question.category }} ] {{ question.question }}
            </div>
            <b-collapse :id="'faq-collapse-' + question.id">
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
            <b-col class="pb-4">
              <b-list-group v-for="(item) in paginatedQuestions" v-bind:key="item.id">
                <b-list-group-item class="m-0 p-0 border-0" v-b-toggle="'questions-collapse-' + item.id">
                  <div class="border py-2 px-2">
                    [ {{ item.category }} ] {{ item.question }}
                  </div>
                  <b-collapse :id="'questions-collapse-' + item.id">
                    <b-card>
                      <b-container>
                        <b-row>
                          <b-col class="py-3">
                            <div>
                              <strong>Q</strong>: {{item.question}}
                            </div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col class="py-3">
                            <div>
                              <strong>A</strong>: {{item.answer}}
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
          <b-row>
            <b-col>
              <b-pagination
                  class="justify-content-center"
                  v-model="currentPage"
                  :total-rows="questions.length"
                  :per-page="perPage"
                  aria-controls="test"
                  @page-click="getPaginatedQuestions()"
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
import { QuestionService } from '@/services/service-index'

export default {
  name: "SupportHome",
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      questions: this.getQuestions(),
      paginatedQuestions: this.getPaginatedQuestions(),
      FAQ: this.getFAQ()  ,
      questionSearch: '',
    }
  },
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    },
    async getQuestions() {
      const questions = await QuestionService.getQuestions()

      this.questions = questions

      return questions
    },
    async getFAQ() {
      const FAQ = await QuestionService.getFAQ()

      this.FAQ = FAQ

      return FAQ
    },
    async getFilteredQuestions(filter) {
      if (this.questionSearch) {
        const filteredQuestions = await QuestionService.getFilteredQuestions(filter)

        this.questions = filteredQuestions

        await this.getPaginatedQuestions()
      }

      else {
        this.questions = this.getQuestions()
      }
    },
    async getCategorizedQuestions(category) {
      const categorizedQuestions = await QuestionService.getCategorizedQuestions(category)

      this.questions = categorizedQuestions

      await this.getPaginatedQuestions()

      return categorizedQuestions
    },
    async getPaginatedQuestions() {
        let questions = this.questions

        if (!questions) {
          questions = await QuestionService.getQuestions()
        }

        const currentPage = this.currentPage - 1
        const paginatedQuestions = questions.slice(currentPage * this.perPage, currentPage + this.perPage)

        this.paginatedQuestions = paginatedQuestions

        return paginatedQuestions
    }
  },
  computed: {
    test() {
      return ''
    }
  },
  async created() {
    console.log(await this.questions)
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
