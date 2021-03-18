import axios from 'axios'

class ReportInquiryRepository {
    getReportInquiryRepository(title) {
        return axios.get('api/report_inquiry/get', { params: {
            title
            }} )
    }

    addReportInquiryRepository(reportInquiry) {
        return axios.post('api/report_inquiry/add', reportInquiry)
    }
}

export default new ReportInquiryRepository();
