/**
 * @author Sebastian Raff https://github.com/hobbyquaker
 * @license MIT
 */

/**
 * Takes a number and returns a rounded fixed digit string.
 * Returns an empty string if first parameter is NaN, (-)Infinity or not of type number.
 * If parameter trailing is set to true trailing zeros will be kept.
 *
 * @param {number} num the number
 * @param {number} [digits=3] digit count
 * @param {boolean} [trailing=false] keep trailing zeros
 * @returns {string}
 *
 */
function fsuxx(num, digits, trailing) {

    if (typeof num !== 'number' || isNaN(num) || num === Infinity || num === -Infinity) return '';

    digits = ((typeof digits === 'undefined') ? 3 : (parseInt(digits, 10) || 0));

    var f = Math.pow(10, digits);
    var res = (Math.round(num * f) / f).toFixed(digits);

    // remove trailing zeros and cast back to string
    if (!trailing) res = '' + (+res);

    return res;
}

module.exports = fsuxx;