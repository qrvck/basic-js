const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(options.separator === undefined) options.separator = '+';
  if(options.additionSeparator === undefined) options.additionSeparator = '|';
  
  let string;
    
  let arr = new Array(options.repeatTimes).fill();
  arr = arr.map( ()=> options.separator + str );


  if(options.addition !== undefined) {
    let add = new Array(options.additionRepeatTimes).fill();
    add = add.map( () => String(options.addition) );
    add = add.join(options.additionSeparator)
    
    string = arr.map( (item) => item + add )
                .join('')
                .replace(options.separator, '')
  } else {
    string = arr.join('').replace(options.separator, '')
  }
  
  
  return string
}

module.exports = {
  repeater
};
