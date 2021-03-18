import QuestionRepository from '@/repository/question-repository'
import { Question } from "@/models/model-index";

class QuestionService {
    async getQuestions() {
        const questions = await QuestionRepository.getQuestions()
        const questionsData = questions.data

        const temp = questionsData.map(e => {
            return new Question(e.id, e.category, e.question, e.answer)
        })

        return temp
    }

    async getFAQ() {
        const FAQ = await QuestionRepository.getFAQ()
        const FAQData = FAQ.data

        const temp = FAQData.map(e => {
            return e
        })

        return temp
    }

    async getFilteredQuestions(filter) {
        const filteredQuestions = await QuestionRepository.getFilteredQuestions(filter)

        return filteredQuestions
    }

    async getCategorizedQuestions(category) {
        const categorizedQuestions = await QuestionRepository.getCategorizedQuestions(category)

        return categorizedQuestions
    }
}

export default new QuestionService
