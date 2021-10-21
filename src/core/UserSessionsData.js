export default class UserSessionsData {
    /**
     * User Sessions
     *
     * @param { number } id
     * @param { array } sessions
     */
    constructor(id, sessions) {
        this.userId = id
        this.sessions = sessions
    }
}
