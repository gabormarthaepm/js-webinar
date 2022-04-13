/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

'use strict'

class Circle {
    constructor(r){
        this.r = r;

        if (r < 0) {
            throw Error;
        }
    }

    getArea(){
        return Math.pow(this.r, 2) * Math.PI;
    }

    getPerimeter() {
        return 2 * (Math.PI * this.r);
    }
}

module.exports = Circle;