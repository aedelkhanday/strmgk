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
   * This method toggles case of a string. All lower case letters are converted to
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
    return retVal
      .join()
      .toString()
      .replace(/,/g, "");
  },

  /**
   * This method reverses a given string.
   * Example: For input string "hello", the method returns "olleh".
   * @param {*} string The input string to be reversed.
   * @returns {*} The reversed string.
   */
  reverseString: function(string) {
    return string
      .split("")
      .reverse()
      .join()
      .replace(/,/g, "");
  },
  /**
   * This method takes a string as an argument(possibly with special characters) and returns
   * a valid english string with no spoecial characters or numbers
   * @param {*} string String with special characters
   * @returns{*} A string with only english alphabets [a-z][A-Z]
   */
  removeSpecialChars4mString: function(string) {
    var retval = string.replace(/[@!#\-$%^\\&*()_+~.,\/`=<>";:0-9]/gi, function(
      x
    ) {
      return x.replace(x, "");
    });
    return retval;
  }
};
