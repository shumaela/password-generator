// Assignment Code
var generateBtn = document.querySelector("#generate");


// function to generate a random password
function generatePassword(length) {
  //  defines the character set
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

  // checks to see if the password length is between the requested range of 8-128 characters long
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // generates the password with random letters and numbers
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// write password to the password input 
function writePassword() {
  var password = prompt("Enter the desired password:");


  // check if the length is within the specified range
  if (password.length >= 8 && password.length <= 128) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Please enter a valid password length between 8 and 128 characters.");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
