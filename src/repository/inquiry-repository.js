import axios from 'axios'

class SupportRepository {
    getInquiryByName(name) {
        return axios.post('api/support/inquiry/get', null, { params: {
                name
            } })
    }
}

export default new SupportRepository();

