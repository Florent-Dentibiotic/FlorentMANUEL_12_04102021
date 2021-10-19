import User from '../core/User'

export default class UserMapper {
    static convertToUser(json) {
        if (json) {
            return new User(
                json.id,
                json.userInfos.firstName,
                json.userInfos.lastName,
                json.userInfos.age,
                json.todayScore
            )
        }
    }
}
