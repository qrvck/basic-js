const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let arr2 = [];
  let encodedStr = '';

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
      let lastItemOfArr2 = arr2[arr2.length - 1];

      if (typeof (lastItemOfArr2) === 'number') {
        arr2[arr2.length - 1]++
      } else {
        arr2.push(2)
      }
    } else {
      arr2.push(arr[i]);
    }
  }

  return arr2.join('')
}

module.exports = {
  encodeLine
};
