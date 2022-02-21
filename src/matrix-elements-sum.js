const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  let sum = 0;

  for (let i = 0; i < m[0].length; i++) {

    for (let e = 0; e < m.length; e++) {
      if (m[e][i] !== 0) sum += m[e][i];
      if (m[e][i] === 0) break;
    }

  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
