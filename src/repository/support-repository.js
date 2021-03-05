import axios from 'axios'

class SupportRepository {
    getQuestions() {
        return axios.get('api/support/question/getAll');
    }
}

export default new SupportRepository();
