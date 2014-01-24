/**
 * Expose `count`
 */

module.exports = count;

/**
 * Count words in a string with an
 * optional character offset `from`
 * and limit `to`
 *
 * @param {String} str
 * @param {Number} from (optional)
 * @param {Number} to (optional)
 * @return {Number}
 */

function count(str, from, to){
  str = (from && to != undefined) ? str.slice(from, to) : str;
  str = (from) ? str.slice(from) : str;
  str = (to != undefined) ? str.slice(0, to) : str;
  str = str.replace(/^\s*|\s*$/g, '');
  if (!str) return 0;
  return str.split(/\s+/).length;
}
