import axios from 'axios'

class ReportInquiryRepository {
    async addReportInquiryRepository(reportInquiry) {
        return axios.post('api/report_inquiry/add', reportInquiry)
    }
}

export default new ReportInquiryRepository();
