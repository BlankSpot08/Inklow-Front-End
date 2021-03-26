import UserRepository from '@/repository/user-repository'

class UserService {
    getUser(token) {
        return UserRepository.getUser(token)
            .then(result => {
                return result.data
        })
    }
}

export default new UserService();
