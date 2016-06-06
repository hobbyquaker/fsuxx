/**
 * @author Sebastian Raff https://github.com/hobbyquaker
 * @license MIT
 */

/**
 * Takes a number and returns a rounded fixed digit string.
 * Returns an empty string if first parameter is (-)Infinity or parseFloat results in NaN.
 * If parameter trailing is set to true trailing zeros will be kept.
 *
 * @param {number} num the number
 * @param {number} [digits=3] digit count
 * @param {boolean} [trailing=false] keep trailing zeros
 * @param {boolean} [comma=false] use comma as decimal separator
 * @returns {string}
 *
 */
function fsuxx(num, digits, trailing, comma) {
    num = parseFloat(num);
    if (isNaN(num) || num === Infinity || num === -Infinity) return '';

    digits = ((typeof digits === 'undefined') ? 3 : (parseInt(digits, 10) || 0));

    var f = Math.pow(10, digits);
    var res = (Math.round(num * f) / f).toFixed(digits);

    // remove trailing zeros and cast back to string
    if (!trailing) res = '' + (+res);

    if (comma) res = res.replace('.', ',');

    return res;
}

module.exports = fsuxx;