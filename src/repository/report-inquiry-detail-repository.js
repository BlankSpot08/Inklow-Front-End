import axios from 'axios'

class ReportInquiryDetailsRepository {
    addReportInquiryDetail(reportInquiryDetail) {
        return axios.post('api/report_inquiry_details/add', reportInquiryDetail)
    }

    cancelReportInquiryDetail(reportInquiryDetail) {
        return axios.patch('api/report_inquiry_details/cancel', reportInquiryDetail)
    }
}


export default new ReportInquiryDetailsRepository()
