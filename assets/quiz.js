// Assignment code here
 
 
function generatePassword(){
 
  var length = (Number(prompt("Enter length of the password between 8 and 128.")));
 
 
  var charL = prompt("Would you like to add lowercase letters?");
  var charU = prompt("Would you like to add uppercase letters?");
  var charN = prompt("Would you like to add numeric numbers?");
  var charS = prompt("Would you like to add special letters?");
 
  //evaluate character type
 

  var charSet = "";
 
  if( charL.toLowerCase() === "yes" ) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  } if( charU.toLowerCase() === "yes") {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } if( charN.toLowerCase() === "yes") {
    charSet += "0123456789";
  } if( charS.toLowerCase() === "yes" ) {
    charSet += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
 
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
