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

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");
  
get.addEventListener("click", function () {
      ps = generatePassword();
      document.getElementById("password").placeholder = ps;
});

// Function for password generation
function generatePassword() {

  // Password length, number, special character, uppercase and lowercase confirmation
enter = parseInt(prompt("How many characters would you like for your password? Please choose between 8 to 128 characters."));

if (!enter) {
  alert ("Please enter a value.");
} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Please enter a value between 8 to 128 characters."));
} else {
  confirmNumber = confirm("Will it contain number/s?");
  confirmCharacter = confirm("Will it contain special character/s?");
  confirmUpperCase = confirm("Will it contain uppercase letter/s?");
  confirmLowerCase = confirm("Will it contain lower case letter/s?")
};

  // Else if for 4 negative
  if (!confirmNumber && !confirmCharacter && !confirmUpperCase && !confirmLowerCase) {
    choices = alert("Please choose a password criteria.");
  }
}






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
