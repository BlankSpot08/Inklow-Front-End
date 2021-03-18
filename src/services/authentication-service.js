import axios from 'axios'

import { store } from '@/store/index-store'
import { router } from '@/router/router-index'

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

                await store.dispatch('updateLoginStatus', true)

                const route = router.currentRoute

                const redirect = route.query['redirect']

                if (!redirect) {
                    await router.push('/')
                }

                else {
                    await router.push(redirect)
                }
            }
        }
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
