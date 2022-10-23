// Assignment code here
// User input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Password variable values
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase conversion
space = [];

var toUpper = function (x) {
  return x.toUpperCase();

alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");
  
get.addEventListener("click", function () {
      ps = generatePassword();
      document.getElementById("password").placeholder = ps;
});
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
