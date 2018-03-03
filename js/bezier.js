/**
 * Cubic bezier
 * @author geo.ariton
 */
class Bezier {
    /**
     * This function takes start and end vectors.
     * start has the v1 vector
     * end has the v2 vector
     * @param start
     * @param v1
     * @param v2
     * @param end
     */
    constructor(start, v1, v2, end) {
        this.start = start;
        this.v1 = v1;
        this.v2 = v2;
        this.end = end;
    }

    /**
     * Gets a single coordinate of a vector (x or y)
     * @param time
     * @param coordinate
     * @returns {number}
     */
    getQBCoordinate(time, coordinate) {
        let a = Math.pow(1 - time, 3) * this.start[coordinate];
        let b = 3 * time * Math.pow(1 - time, 2) * this.v1[coordinate];
        let c = 3 * Math.pow(time, 2) * (1 - time) * this.v2[coordinate];
        let d = Math.pow(time, 3) * this.end[coordinate];
        return a + b + c + d;
    }

    /**
     * This gets the vector output for the time - it should be 0 < time < 1
     * @param time
     * @returns {Array}
     */
    getVector(time) {
        let vector = [];
        vector[0] = this.getQBCoordinate(time, 0);
        vector[1] = this.getQBCoordinate(time, 1);
        return vector;
    }
}