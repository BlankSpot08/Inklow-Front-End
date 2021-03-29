import {ReportInquiryRepository} from "@/repository/repository-index";
import {ReportInquiry} from "@/models/model-index";

class ReportInquiryService {
    addReportInquiry(reportInquiry) {
        const temp = ReportInquiryRepository.addReportInquiry(reportInquiry)

        return temp.then(result => {
            return result.data
        })
    }

    getUserReportInquiry(token) {
        const reportInquiries = ReportInquiryRepository.getUserReportInquiry(token)

        const temp = reportInquiries.then(result => {
            const data = result.data.map(e => {
                return new ReportInquiry(e.id, e.userId, e.title, e.category, e.email, e.dateCreated, e.lastUpdated, e.status, e.listOfDetails)
            })

            return data
        })

        return temp
    }

    getReportInquiryByTitle(title) {
        const reportInquiry = ReportInquiryRepository.getReportInquiry(title)

        return reportInquiry.then(result => {
            return result.data
        })
    }
}

export default new ReportInquiryService()
