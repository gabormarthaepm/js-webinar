/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

 function arraySorted(items, ignore) {

    let itemsArrayCorrected = items.map(item =>item.toString().toLowerCase().replace(/\s/g, ""));

    function removeAll(s, c) {
        while (s.includes(c)) {
            s = s.replace(c, "");
        }
        return s;
    }

    if (ignore) {
        let ignoredCharsArray = ignore.split("");
        ignoredCharsArray.forEach(onechar => 
            itemsArrayCorrected = itemsArrayCorrected.map(correctedItem => {
                return removeAll(correctedItem, onechar);
                }
            )
            );
    }

    let itemsArraySorted = [...itemsArrayCorrected].sort();

    for (let i = 0; i < itemsArraySorted.length; i++) {
        if (itemsArraySorted[i] != itemsArrayCorrected[i]) {
            return false;
        }
    }
    return true;
}
module.exports = arraySorted;