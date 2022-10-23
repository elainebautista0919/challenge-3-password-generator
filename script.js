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
  if (!confirmCharacter && !confirmNumber && !confirmUpperCase && !confirmLowerCase) {
    choices = alert("Please choose a password criteria.");
  }

  // Else if for 4 positive
  else if (confirmCharacter && confirmNumber && confirmUpperCase && confirmLowerCase) {

    choices = character.concat(number, alphabet, alphabet2);
}

  // Else if for 3 positive
  else if (confirmCharacter && confirmNumber && confirmUpperCase) {

    choices = character.concat(number, alphabet2);
}
else if (confirmCharacter && confirmNumber && confirmLowerCase) {

  choices = character.concat(number, alphabet);
}
else if (confirmNumber && confirmUpperCase && confirmLowerCase) {

  choices = number.concat(alphabet, alphabet2);
}
else if (confirmCharacter && confirmUpperCase && confirmLowerCase) {

  choices = character.concat(alphabet, alphabet2);
}

  // Else if for 2 positive
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
} 
else if (confirmCharacter && confirmLowerCase) {
    choices = character.concat(alphabet);
} 
else if (confirmCharacter && confirmUpperCase) {
    choices = character.concat(alphabet2);
}
else if (confirmLowerCase && confirmNumber) {
    choices = alphabet.concat(number);
} 
else if (confirmLowerCase && confirmUpperCase) {
    choices = alphabet.concat(alphabet2);
} 
else if (confirmNumber && confirmUpperCase) {
    choices = number.concat(alphabet2);
}

  //Else if for 1 positive
  else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowerCase) {
    choices = alphabet;
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
