// Assignment Code
var generateBtn = document.querySelector("#generate");



// function created to generate the password for var password in writePassword
function generatePassword() {

  var customChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var passwordLength = Math.floor(Math.random() * 121) + 8; // Random length between 8 and 128 characters
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * customChars.length);
    password += customChars.charAt(randomIndex);
  }

  return password;
}




// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
