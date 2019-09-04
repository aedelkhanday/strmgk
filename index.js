module.exports = {
  trimSpaces: function(string) {
    if (typeof string !== "string")
      throw new TypeError("Please provide a string!");
    return string.replace(/\s/g, "");
  },
  isSubstringPresent: function(string, subString) {
    if (string.indexOf(subString) > -1) return true;
    else return false;
  }
};
