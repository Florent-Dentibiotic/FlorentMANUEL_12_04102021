import UserSessionsData from '../core/UserSessionsData'

export default class UserSessionMapper {
    static convertToSession(json) {
        return new UserSessionsData(json.userId, json.sessions)
    }
}
