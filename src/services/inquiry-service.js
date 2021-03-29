import {InquiryRepository} from "@/repository/repository-index";

class InquiryService {
    getInquiryCategoriesByName(category) {
        return InquiryRepository.getInquiryCategoriesByName(category)
    }
}

export default new InquiryService()
