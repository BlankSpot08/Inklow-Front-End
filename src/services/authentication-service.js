import axios from 'axios'

import { UserRepository } from "@/repository/repository-index";

class AuthenticationService {
    user_authentication(user) {
        return axios.post('api/user_authentication', user)
            .then(result => {
                if (result) {
                    const token = result.data.jwt

                    const user = UserRepository.getUser(token).then(result => {
                        return result.data
                    })

                    if (token && user) {
                        localStorage.setItem('token', JSON.stringify(token))

                        return user
                    }
                }

                return undefined
            })
        // if (authentication) {
        //     const token = authentication.data.jwt
        //
        //     const user = (UserRepository.getUser(token)).data
        //
        //     if (token && user) {
        //         localStorage.setItem('token', JSON.stringify(token))
        //
        //         return user
        //     }
        // }
        //
        // return undefined
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    user_registration(user) {
        return axios.post('api/user_registration', user)
            .then(result => {
                return result.data
            })
    }
}

export default new AuthenticationService();
