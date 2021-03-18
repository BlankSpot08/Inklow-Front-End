import axios from 'axios'

import { UserRepository } from "@/repository/repository-index";

class AuthenticationService {
    async user_authentication(user) {
        const authentication = await axios.post('api/user_authentication', user)

        if (authentication) {
            const token = authentication.data.jwt

            const user = (await UserRepository.getUser(token)).data

            if (token && user) {
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('user', JSON.stringify(user))

                return user
            }
        }

        return undefined
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    user_registration(user) {
        return axios.post('api/user_registration', user)
    }
}

export default new AuthenticationService();
