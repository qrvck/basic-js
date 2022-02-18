const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.mode = mode
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let encr = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let ii = 0;  // 6

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        encr = encr + message[i];
      } else {
        let indexOfMessage = this.alphabet.indexOf(message[i]);
        let indexOfKey = this.alphabet.indexOf(key[ii % key.length])
        encr = encr + this.alphabet[(indexOfMessage + indexOfKey) % 26];
        ii++;
      }
    }
    if (this.mode === false) return encr.split('').reverse().join('')
    return encr
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let decr = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let ii = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        decr = decr + encryptedMessage[i];
      } else {
        let indexOfEncryptedMessage = this.alphabet.indexOf(encryptedMessage[i]);
        let indexOfKey = this.alphabet.indexOf(key[ii % key.length]);

        let indexOfDecr = (indexOfEncryptedMessage - indexOfKey >= 0) ? indexOfEncryptedMessage - indexOfKey % 26 : 26 + (indexOfEncryptedMessage - indexOfKey);
        decr = decr + this.alphabet[indexOfDecr];
        ii++
      }
    }
    if (this.mode === false) return decr.split('').reverse().join('')
    return decr
  }

}

module.exports = {
  VigenereCipheringMachine
};
