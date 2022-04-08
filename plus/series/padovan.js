/**
 * Your task is to calculate the nth value of the
 * Padovan sequence
 * https://en.wikipedia.org/wiki/Padovan_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

/*
function padovan(n) {
    let previous1 = 1;
    let previous2 = 1;
    let previous3 = 1;
    let current = 1;
    if (typeof n === "number") {
        if (n >= 0) {
            for (i = 3; i <= n; i++){
                current = previous2 + previous3;
                previous3 = previous2;
                previous2 = previous1;
                previous1 = current;
            }
            return current;
        } throw "Should be 0 or more.";
    } throw new TypeError("Not a number");
}
module.exports = padovan;
*/

function padovan(n) {
    if (typeof n === "number") {
        if (n >= 0) {
            if (n <= 2) {
                return 1;
            }   return padovan(n-2) + padovan(n-3);
        }   throw "Should be 0 or more.";
    }   throw new TypeError("Not a number");
} 
module.exports = padovan;