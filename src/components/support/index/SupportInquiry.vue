<template>
  <b-container>
    <b-row class="" align-h="center">
      <b-col class="border-dark border-bottom">
        <div class="py-4 pb-5 text-center">
          <label class="display-4">
            My Inquiries
          </label>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="my-5 py-5 px-5 border">
        <template class="border">

          <b-list-group class="border-0 py-3 bg-light" horizontal="">
            <b-list-group-item class="w-50 bg-light border-0 ">
              Title
            </b-list-group-item>
            <b-list-group-item class="w-25 bg-light border-0 ">
              Date Created
            </b-list-group-item>
            <b-list-group-item class="w-25 bg-light border-0 ">
              Last Updated
            </b-list-group-item>
            <b-list-group-item class="w-25 bg-light border-0 ">
              Status
            </b-list-group-item>
          </b-list-group>

          <b-list-group v-for="(item) in paginatedReportInquiries" v-bind:key="item.id" class="border-0">
            <b-list-group-item class="px-0 py-0 border-top-0 border-left-0 border-right-0" v-b-toggle="'questions-collapse-' + item.id">
              <b-list-group horizontal="" class="">
                <b-list-group-item class="w-50 border-0 ">
                  {{item.title}}
                </b-list-group-item>
                <b-list-group-item class="w-25 border-0 ">
                  {{item.dateCreated}}
                </b-list-group-item>
                <b-list-group-item class="w-25 border-0 ">
                  {{item.lastUpdated}}
                </b-list-group-item>
                <b-list-group-item class="w-25 border-0 ">
                  {{ item.listOfDetails[item.listOfDetails.length - 1].status }}
                </b-list-group-item>
              </b-list-group>
            </b-list-group-item>

            <b-collapse class="px-3 border-top border-bottom border-dark" :id="'questions-collapse-' + item.id" accordion="details">
              <b-container v-for="details in item.listOfDetails" v-bind:key="details.id" class="border-bottom py-4 pb-5">
                <b-row>
                  <b-col class="" md="4">
                  </b-col>

                  <b-col class="" md="8">
                    <b-card class="my-3">
                      <b-container>
                        <b-row>
                          <b-col>
                            {{ details.dateCreated }}
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            {{ details.details }}
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-card>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col v-if="details.reply" md="8">
                    <b-card class="my-3">
                      <b-container>
                        <b-row>
                          <b-col>
                            {{ details.reply.dateCreated }}
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            {{ details.reply.details }}
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-card>
                  </b-col>

                  <b-col v-else-if="!details.reply && details.status === 'Cancel Inquiry'" md="8">
                    <b-card class="my-3">
                      <b-container>
                        <b-row>
                          <b-col>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            Your inquiry has been canceled.
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>

              <b-container class="my-5">
                <b-row>
                  <b-col v-if="item.listOfDetails[item.listOfDetails.length - 1].status === 'Opened'" class="text-center py-4">
                    <b-button class="w-25" size="lg" squared @click="cancelReportInquiryDetail(item.listOfDetails[item.listOfDetails.length - 1])">
                      Cancel Inquiry
                    </b-button>
                  </b-col>

                  <b-col v-else-if="item.listOfDetails[item.listOfDetails.length - 1].status === 'Replied' || item.listOfDetails[item.listOfDetails.length - 1].status === 'Cancel Inquiry'" class="text-center py-4">
                    <b-button class="w-50" size="lg" v-b-toggle="'collapse-' + item.listOfDetails[item.listOfDetails.length - 1].id" squared >
                      Start an Inquiry Thread
                    </b-button>

                    <b-collapse class="py-4" :id="'collapse-' + item.listOfDetails[item.listOfDetails.length - 1].id">
                      <b-row>
                        <b-col>
                          <b-form-group label-align="left" label="Start an Inquiry Thread">
                            <b-textarea v-model="item.listOfDetails[item.listOfDetails.length - 1].newThreadText" placeholder="We can get back to you faster if you provide us with more details." rows="7" no-resize>
                            </b-textarea>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col class="pt-4">
                          <b-button class="" @click="addReportInquiryDetail(item.id, item.listOfDetails[item.listOfDetails.length - 1].newThreadText)" squared>
                            Register Inquiry
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-collapse>

                  </b-col>
                </b-row>
              </b-container>

            </b-collapse>
          </b-list-group>

          <b-container>
            <b-row>
              <b-col class="text-right px-0 py-4">
                <b-button @click="goToLink('SupportIndex')" squared>Submit an Inquiry</b-button>
              </b-col>
            </b-row>
          </b-container>

          <b-container>
            <b-row>
              <b-col>
                <b-pagination
                    class="justify-content-center"
                    v-model="currentPage"
                    :per-page="perPage"
                    :total-rows="reportInquiries.length"
                    @page-click="getPaginatedReportInquiries()">
                </b-pagination>
              </b-col>
            </b-row>
          </b-container>

        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ReportInquiryDetailsService, ReportInquiryService } from "@/services/service-index";
import { ReportInquiryDetail } from "@/models/model-index";

export default {
  name: "SupportInquiry",
  data() {
    return {
      reportInquiries: this.getReportInquiries(),
      paginatedReportInquiries: '',
      currentPage: 1,
      perPage: 5
    }
  },
  methods: {
    goToLink(name) {
      this.$router.push({name: name})
    },
    async getPaginatedReportInquiries() {
      let reportInquiries = this.reportInquiries

      if (reportInquiries) {
        const token = JSON.parse(localStorage.getItem(  'token'))
        reportInquiries = await ReportInquiryService.getUserReportInquiry(token)
      }

      const currentPage = this.currentPage - 1

      const paginatedReportInquiries = reportInquiries.slice(currentPage * this.perPage, (currentPage * this.perPage) + this.perPage)

      this.paginatedReportInquiries = paginatedReportInquiries

      return paginatedReportInquiries
    },
    async getReportInquiries() {
      const token = JSON.parse(localStorage.getItem(  'token'))
      const reportInquiries = await ReportInquiryService.getUserReportInquiry(token)

      this.reportInquiries = reportInquiries

      return reportInquiries
    },
    async cancelReportInquiryDetail(reportInquiryDetail) {
      const temp = await ReportInquiryDetailsService.cancelReportInquiryDetail(reportInquiryDetail)

      const reportInquiries = this.getReportInquiries()
      console.log(reportInquiries)

      return temp
    },
    addReportInquiryDetail(reportInquiryId, details) {
      const reportInquiryDetail = new ReportInquiryDetail()

      reportInquiryDetail.reportInquiryId = reportInquiryId
      reportInquiryDetail.details = details
      reportInquiryDetail.status = 'Opened'
      reportInquiryDetail.dateCreated = new Date()

      const temp = ReportInquiryDetailsService.addReportInquiryDetail(reportInquiryDetail)

      const reportInquiries = this.getReportInquiries()
      console.log(reportInquiries)

      return temp
    }
  },
  async created() {

  }
}
</script>

<style scoped>

</style>
