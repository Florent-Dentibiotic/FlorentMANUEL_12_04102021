import UserKeyData from '../core/UserKeyData'

export default class UserKeyDataMapper {
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
