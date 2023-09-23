// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createpassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//


function writePassword() {
  let password = ""
  var passlength = 0;
  var lowercase = false;
  var uppercase = false;
  var numbs = false
  var specialchar = false



  while (passlength < 8 || passlength > 128) {
    passlength = parseInt(prompt("Enter desired password length between 8 and 128 characters"));
  }

  lowercase = confirm("include lower case?")
  uppercase = confirm("Include upper case?")
  numbs = confirm("include numbers?")
  specialchar = confirm("include special characters?")

  let addcharacters = ""

  if (lowercase) {
    addcharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    addcharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (numbs) {
    addcharacters += "123456789"
  }
  if (specialchar) {
    addcharacters += "!@#$%^&*()_+-=[]{}\\|;':\",./<>?"
  }
  for (let i = 0; i < passlength; i++) {
    let randomIndex = Math.floor(Math.random() * addcharacters.length);
    password += addcharacters[randomIndex];
  }
  document.getElementById("password").value = password;

}








