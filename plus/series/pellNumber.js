/**
 * Your task is to calculate the nth value of the
 * Pell numbers sequence
 * https://en.wikipedia.org/wiki/Pell_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

/*
 function pellNumber(n) {
    let current = 2;
    let previous = 1;
    let currentMod;
    
    if (typeof n === "number") {
        if (n >= 0) {
            if (n <= 2) {
                return n;
            } else {
                for (let i = 3; i <= n; i++) {
                    currentMod = 2 * current + previous;
                    previous = current;
                    current = currentMod; 
                }   
                return currentMod;
            }
        } throw "Should be 0 or more.";
    } throw new TypeError("Not a number");
}
module.exports = pellNumber;
*/

function pellNumber(n) {
    if (typeof n === "number") {
        if (n >= 0) {
            if (n <= 2) {
                return n;
            } return 2 * pellNumber(n - 1) + pellNumber(n - 2);
        } throw "Should be 0 or more.";
    } throw new TypeError("Not a number");
}
module.exports = pellNumber;