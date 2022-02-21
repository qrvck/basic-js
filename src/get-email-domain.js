const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexOfDog = email.lastIndexOf('@')
  let str = email.slice(indexOfDog + 1)

  return str
}

module.exports = {
  getEmailDomain
};
