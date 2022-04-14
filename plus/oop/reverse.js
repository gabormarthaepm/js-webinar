/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

function reverse(o) {

    if (typeof o === "object") {
        let newO = {};
        for (const [value, key] of Object.entries(o)) {
            newO[key] = value;
        }
        return newO;
    }
    throw Error;
}

module.exports = reverse;
