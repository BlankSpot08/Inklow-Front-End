import axios from 'axios'

// const API_URL = ''

class AuthService {
    user_authentication(user) {
        return axios.post('api/user_authentication',
            { username: user.username, password: user.password})
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    user_registration(user) {
        return axios.post('api/user_registration', user)
    }
}

export default new AuthService();
