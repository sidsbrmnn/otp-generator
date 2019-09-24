const digits = '0123456789';
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const genIndex = max => Math.floor(Math.random() * max);

module.exports = {
  /**
   * Generate a one time password
   * @param  {number} length Default: `10`
   * @param  {object} options
   * @param  {boolean} options.digits Default: `true`
   * @param  {boolean} options.alphabets Default: `true`
   * @param  {boolean} options.upperCase Default: `true`
   */

  generate: function(length, options) {
    length = length || 10;

    options = {
      digits: true,
      alphabets: true,
      upperCase: true,
      ...options
    };

    if (!options.alphabets) options.upperCase = false;

    const allowedChars =
      ((options.digits || '') && digits) +
      ((options.alphabets || '') && alphabets) +
      ((options.upperCase || '') && upperCase);

    let password = '';
    for (let index = 0; index < length; ++index) {
      password += allowedChars[genIndex(allowedChars.length - 1)];
    }

    return password;
  }
};
