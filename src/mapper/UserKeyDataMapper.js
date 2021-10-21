import UserKeyData from '../core/UserKeyData'

export default class UserKeyDataMapper {
    /**
     * Convert received Json to new UserKeyData type
     *
     * @param { object } json
     * @returns { new UserKeyData }
     */
    static convertToKeyData(json) {
        return new UserKeyData(
            json.id,
            json.keyData.calorieCount,
            json.keyData.proteinCount,
            json.keyData.carbohydrateCount,
            json.keyData.lipidCount
        )
    }
}
