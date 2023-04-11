const palindromes = function (string) {
const changedString = string.toLowerCase().replace(/[^a-z]/g,"");
return changedString.split("").reverse().join("")== changedString;
};

// Do not edit below this line
module.exports = palindromes;
