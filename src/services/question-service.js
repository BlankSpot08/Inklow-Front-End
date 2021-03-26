import { QuestionRepository } from '@/repository/repository-index'
import { Question } from "@/models/model-index";

class QuestionService {
    getQuestions() {
        const questions = QuestionRepository.getQuestions()

        const temp = questions.then(result => {
            const data = result.data.map(e => {
                return new Question(e.id, e.category, e.question, e.answer)
            })

            return data
        })

        return temp
    }

    getFAQ() {
        return QuestionRepository.getFAQ()
            .then(result => {
                return result.data
            })
    }

    getFilteredQuestions(filter) {
        return QuestionRepository.getFilteredQuestions(filter)
            .then(result => {
                return result.data
            })
    }

    getCategorizedQuestions(category) {
        return QuestionRepository.getCategorizedQuestions(category)
            .then(result => {
                return result.data
            })
    }
}

export default new QuestionService
