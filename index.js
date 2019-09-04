/**
 * This module contains functions to act on strings.
 */
module.exports = {
  /**
   * This method trims the spaces in a string
   * @param {*} string Input String
   */
  trimSpaces: function(string) {
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    return string.replace(/\s/g, "");
  },

 /**
  * 
  * @param {*} string Input String.
  * @param {*} subString Substring to be searched for.
  */
  isSubstringPresent: function(string, subString) {
    if (string.indexOf(subString) > -1) return true;
    else return false;
  },

  /**
   * This method toggles case of a string. All lower case letters areconverted to 
   * upper case and vice versa
   * example: For tEsTStriNG as input, TeStsTRIng will be returned as output 
   * @param {*} string Input String.
   */
  toggleCase: function(string) {
    let retVal = [];
    let stringArray = string.split("");
    retVal = stringArray.map(char => {
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        return char.toUpperCase();
      else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        return char.toLowerCase();
      else return char;
    });
    console.log(retVal);
    return retVal.join().toString().replace(/,/g, "");
  }
};
