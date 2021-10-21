import UserPerformanceData from '../core/UserPerformanceData'

export default class UserPerformanceMapper {
    /**
     * Convert received Json to new UserPerformance type
     *
     * @param { object } json
     * @returns { new UserPerformanceData }
     */
    static convertToUserPerf(json) {
        return new UserPerformanceData(json.userId, {
            cardio: json.data[0].value,
            energy: json.data[1].value,
            endurance: json.data[2].value,
            strength: json.data[3].value,
            speed: json.data[4].value,
            intensity: json.data[5].value,
        })
    }
}
