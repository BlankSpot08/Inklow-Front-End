import axios from 'axios'

// const API_URL = ''

class AuthService {
    login(user) {
        return axios.post('login',
            { username: user.username, password: user.password})
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    register(user) {
        return axios.post('register', user)
    }
}

export default new AuthService();