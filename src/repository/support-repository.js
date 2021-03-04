import axios from 'axios'

class SupportRepository {
    async getQuestions() {
        return axios.get('api/support/question/getAll');
    }
}

export default new SupportRepository();
