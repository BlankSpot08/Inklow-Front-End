import ReportInquiryDetailRepository from '@/repository/report-inquiry-detail-repository'

class ReportInquiryDetailsService {
    addReportInquiryDetail(reportInquiryDetail) {
        const temp = ReportInquiryDetailRepository.addReportInquiryDetail(reportInquiryDetail)

        return temp.data
    }

    cancelReportInquiryDetail(reportInquiryDetail) {
        return ReportInquiryDetailRepository.cancelReportInquiryDetail(reportInquiryDetail)
    }
}

export default new ReportInquiryDetailsService()
