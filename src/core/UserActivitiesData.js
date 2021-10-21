export default class UserActivitiesData {
    /**
     * User Activities Datas
     *
     * @param { number } id
     * @param { array } sessions
     */
    constructor(id, sessions) {
        this.userId = id
        this.userSessions = sessions
    }
}
