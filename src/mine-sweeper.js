const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  let arrResult = [];

  for (let i = 0; i < m.length; i++) {
    let arr = [];

    for (let e = 0; e < m[i].length; e++) {
      let numb = 0;

      if (i === 0 || (i !== 0 && i !== m.length - 1)) {
        numb = (m[i + 1][e - 1]) ? numb += 1 : numb += 0;
        numb = (m[i + 1][e]) ? numb += 1 : numb += 0;
        numb = (m[i + 1][e + 1]) ? numb += 1 : numb += 0;
      }

      if (i === m.length - 1 || (i !== 0 && i !== m.length - 1)) {
        numb = (m[i - 1][e + 1]) ? numb += 1 : numb += 0;
        numb = (m[i - 1][e]) ? numb += 1 : numb += 0;
        numb = (m[i - 1][e - 1]) ? numb += 1 : numb += 0;
      }

      numb = (m[i][e - 1]) ? numb += 1 : numb += 0;
      numb = (m[i][e + 1]) ? numb += 1 : numb += 0;

      arr.push(numb)
    }

    arrResult.push(arr)
  }

  return arrResult
}

module.exports = {
  minesweeper
};
