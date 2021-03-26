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
      <b-col>
        <template class="border">
          <b-list-group class="border-0 py-3" horizontal="">
            <b-list-group-item class="w-50 border-0 ">
              Title
            </b-list-group-item>
            <b-list-group-item class="w-25 border-0 ">
              Date Created
            </b-list-group-item>
            <b-list-group-item class="w-25 border-0 ">
              Last Updated
            </b-list-group-item>
            <b-list-group-item class="w-25 border-0 ">
              Status
            </b-list-group-item>
          </b-list-group>

          <b-list-group v-for="(item) in reportInquiries" v-bind:key="item.id" class="border-0">
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
                  {{item.status}}
                </b-list-group-item>
              </b-list-group>

              <b-collapse class="px-3 border-top border-bottom border-dark" :id="'questions-collapse-' + item.id">
                <b-container v-for="details in item.listOfDetails" v-bind:key="details.id">
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
                    <b-col md="8">
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
                    <b-col md="4">
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {ReportInquiryService} from "@/services/service-index";

export default {
  name: "SupportInquiry",
  data() {
    return {
      reportInquiries: this.getReportInquiries(),
    }
  },
  methods: {
    async getReportInquiries() {
      const token = JSON.parse(localStorage.getItem(  'token'))

      const reportInquiries = await ReportInquiryService.getUserReportInquiry(token)

      this.reportInquiries = reportInquiries

      return reportInquiries
    }
  },
  async created() {
    console.log(await this.getReportInquiries())
  }
}
</script>

<style scoped>

</style>
