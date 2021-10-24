export default class User {
    /**
     * User informations
     *
     * @param { number } id
     * @param { string } firstName
     * @param { string } lastName
     * @param { number } age
     * @param { number } score
     */
    constructor(id, firstName, lastName, age, score) {
        this.userId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = score;
    }
}
