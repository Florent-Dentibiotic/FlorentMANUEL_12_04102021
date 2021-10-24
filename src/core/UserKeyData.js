export default class UserKeyData {
    /**
     * User Key Datas
     *
     * @param { number } id
     * @param { number } calories
     * @param { number } protein
     * @param { number } carb
     * @param { number } lipid
     */
    constructor(id, calories, protein, carb, lipid) {
        this.userId = id;
        this.calorieCount = calories;
        this.proteinCount = protein;
        this.carbohydrateCount = carb;
        this.lipidCount = lipid;
    }
}
