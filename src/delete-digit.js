const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let copyN = String(n);
  let result = 0;

  for (let i = 0; i < copyN.length; i++) {
    copyN = copyN.split('');
    copyN.splice(i, 1)

    if (+copyN.join('') > result) {
      result = +copyN.join('');
    }

    copyN = String(n)
  }

  return result
}

module.exports = {
  deleteDigit
};
