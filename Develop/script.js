// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate a random password
function generatePassword() {
  // Prompts for password criteria
  let includeLowercase = confirm("Do you want to include lowercase letters?");
  let includeUppercase = confirm("Do you want to include uppercase letters?");
  let includeNumeric = confirm("Do you want to include numbers?");
  let includeSpecial = confirm("Do you want to include special characters?");
  
  // Validating if at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one character type.");
    return;
  }

  // Define the character set based on user input
  let charset = "";
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    charset += "0123456789";
  }
  if (includeSpecial) {
    charset += "!@#$%^&*()-_=+";
  }

  // Prompting for password length
  let passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // Checking if the entered password length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Write password to the password input 
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










