export default class UserPerformanceData {
    /**
     * User Performances
     *
     * @param { number } id
     * @param { array } perfs
     */
    constructor(id, perfs) {
        this.userId = id;
        this.perfs = perfs;
    }
}
