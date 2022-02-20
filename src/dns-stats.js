const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let arrDomains = [];
  let DNSStats = {};

  for (let i = 0; i < domains.length; i++) {
    arrDomains.push(domains[i].split('.'));
    arrDomains[i].reverse()
  }

  for (let i = 0; i < arrDomains.length; i++) {

    for (let x = 0; x < arrDomains[i].length; x++) {
      let property = '.' + arrDomains[i].slice(0, x + 1).join('.');

      if (DNSStats[property] === undefined) {
        DNSStats[property] = 1;
      } else {
        DNSStats[property]++;
      }
    }

  }

  return DNSStats
}

module.exports = {
  getDNSStats
};
