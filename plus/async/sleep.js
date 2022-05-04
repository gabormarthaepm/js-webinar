/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

let sleep = function (sec) {
    const a = new Promise(function (resolve, reject) {
        if (typeof sec === 'number') {
            setTimeout(resolve, sec <= 10 ? sec * 1000 : 10000);
        } else {
            reject();
        }
    });
    return a;
}

module.exports = sleep;
