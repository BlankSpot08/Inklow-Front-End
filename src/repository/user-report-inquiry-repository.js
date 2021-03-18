import axios from 'axios';

class UserReportInquiryRepository {
    addUserReportInquiryRepository(reportInquiry) {
        return axios.post('api/user_report_inquiry/add', reportInquiry)
    }
}

export default new UserReportInquiryRepository()
