import { store } from '@/store/index-store'

class RouterUtil {
    getUserLoggedIn() {
        return store.state.loginStatus
    }
}

export default new RouterUtil();
