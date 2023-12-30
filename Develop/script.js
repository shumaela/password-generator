// Assignment Code
var generateBtn = document.querySelector("#generate");


// function to generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

  // checks to see if the password length is between the requested range of 8-128 characters long
  if (length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// write password to the password input 
function writePassword() {
  var passwordLength = prompt("Enter the password length (between 8 and 128 characters):")
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
