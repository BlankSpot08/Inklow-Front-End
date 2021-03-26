import axios from 'axios'

class ReportInquiryRepository {
    getUserReportInquiry(token) {
        const authHeader = { 'Authorization': 'Bearer ' + token}

        return axios.post('api/report_inquiry/get_with_user', null, {
            headers: authHeader
        })
    }

    getReportInquiry(title) {
        return axios.get('api/report_inquiry/get', { params: {
            title
            }} )
    }

    addReportInquiry(reportInquiry) {
        return axios.post('api/report_inquiry/add', reportInquiry)
    }
}

export default new ReportInquiryRepository();
