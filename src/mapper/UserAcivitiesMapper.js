import UserActivitiesData from '../core/UserActivitiesData'

export default class UserActivitiesMapper {
    static convertToActivities(json) {
        return UserActivitiesData({ id: json.id, sessions: json.sessions })
    }
}
