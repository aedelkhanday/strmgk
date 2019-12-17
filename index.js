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
    if (typeof string !== "string" || typeof subString !== "string")
      throw new TypeError("Please provide a string!");
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
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    let retVal = [];
    let stringArray = string.split("");
    retVal = stringArray.map(char => {
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        return char.toUpperCase();
      else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        return char.toLowerCase();
      else return char;
    });
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
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    return string
      .split("")
      .reverse()
      .join("");
  },
  /**
   * This method takes a string as an argument(possibly with special characters) and returns
   * a valid english string with no spoecial characters or numbers
   * @param {*} string String with special characters
   * @returns{*} A string with only english alphabets [a-z][A-Z]
   */
  removeSpecialChars4mString: function(string) {
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    var retval = string.replace(/[@!#\-$%^\\&*()_+~.,\/`=<>";:0-9]/gi, function(
      x
    ) {
      return x.replace(x, "");
    });
    return retval;
  },

  /**
   * This method capitalizes a string. Means in a multi word sentence it makes the
   * first letter of the word in upper case. For input "hello world", it returns
   * "Hello World" as the output
   * @param {*} string
   */
  capitalize: function(string) {
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    return string
      .split(" ")
      .filter(word => word != "")
      .map(word => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  },
  /**
   * This method compares two strings regardless of the case. It equates "hello" and "HELLO"
   * as equal.
   * @param {*} string1
   * @param {*} string2
   */
  equalIgnoreCase(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string")
      throw new TypeError("Please provide a string!");
    return string1.toLowerCase() == string2.toLowerCase();
  },

  /**
   * This method convert camel case into regular case string
   * @param {Input string} inputString
   */
  camelCaseStringToRegularCaseString: function(inputString) {
    inputString = inputString.replace(/([A-Z])/g, " $1");
    let resultString =
      inputString.charAt(0).toUpperCase() + inputString.slice(1);
    return resultString;
  }
};
