import axios from 'axios'

class QuestionRepository {
    getQuestions() {
        return axios.get('api/question/getAll')
    }

    getFAQ() {
        return axios.get('api/question/getFAQ')
    }

    getFilteredQuestions(filter) {
        return axios.post('api/question/getAll/filteredBy', null, { params: {
            filter
            } })
    }

    getCategorizedQuestions(category) {
        return axios.post('api/question/getAll/categorizedBy', null, {
            params: {
                category
            }
        })
    }
}

export default new QuestionRepository();
