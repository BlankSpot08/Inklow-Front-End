import axios from "axios";

class InquiryRepository {
    async getInquiryCategoriesByName(name) {
        const request = await axios.post('api/inquiry/get', null, { params: { name } });

        const initialCategory = [ { value: null, text: 'Choose a category' } ]

        const mainCategory = request.data.categories.map(e => {
            return { value: e.name, text: e.name }
        })

        return initialCategory.concat(mainCategory);
    }
}

export default new InquiryRepository();

