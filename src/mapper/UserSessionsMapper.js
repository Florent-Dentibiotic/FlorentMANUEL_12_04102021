import UserSessionsData from '../core/UserSessionsData'

export default class UserSessionMapper {
    /**
     * Convert received Json to new UserSessions type
     *
     * @param { object } json
     * @returns { new UserSessionsData }
     */
    static convertToSession(json) {
        return new UserSessionsData(json.userId, json.sessions)
    }
}
