const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let x = 1;
    let newArr = [];
    let addElements = false;
    
    for(let i of arr) {
      if(Array.isArray(i)) {
        newArr.push(...i);
        addElements = true
      }
    }
    
    if(addElements) {
      x = x + this.calculateDepth(newArr)
    } 
    
    return x
  }
}

module.exports = {
  DepthCalculator
};
