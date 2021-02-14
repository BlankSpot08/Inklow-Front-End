import axios from 'axios'

class UserService {
    async getUser(token) {
        this.authHeader = {'Authorization': 'Bearer ' + token}

        return axios.post('api/user/get', null, {
            headers: this.authHeader
        })
    }
}

export default new UserService();