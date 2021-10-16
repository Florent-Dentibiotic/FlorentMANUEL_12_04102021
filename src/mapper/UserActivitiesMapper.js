import UserActivitiesData from '../core/UserActivitiesData'

export default class UserActivitiesMapper {
    static convertToActivities(json) {
        return new UserActivitiesData(json.userId, json.sessions)
    }
}
