import UserKeyData from '../core/UserKeyData'

export default class UserKeyDataMapper {
    static convertToKeyData(json) {
        return UserKeyData({
            id: json.id,
            calories: json.keyData.calorieCount,
            protein: json.keyData.proteinCount,
            carb: json.keyData.carbohydrateCount,
            lipid: json.keyData.lipidCount,
        })
    }
}
