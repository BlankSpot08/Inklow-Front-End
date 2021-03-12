import axios from 'axios'

class QuestionRepository {
    getQuestions() {
        return axios.get('api/support/question/getAll')
    }

    getFAQ() {
        return axios.get('api/support/question/getFAQ')
    }

    getFilteredQuestions(filter) {
        return axios.post('api/support/question/getAll/filteredBy', null, { params: {
            filter
            } })
    }

    getCategorizedQuestions(category) {
        return axios.post('api/support/question/getAll/categorizedBy', null, {
            params: {
                category
            }
        })
    }
}

export default new QuestionRepository();
