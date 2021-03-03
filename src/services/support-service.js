import axios from 'axios'

class SupportService {
    requestSupport(support) {
        return axios.post('', {support})
    }
}

export default new SupportService();
