function generatePassword(){
  var options = window.prompt('Lower Case Characters?');
  if (!options); 

  var options = window.prompt('Upper Case Characters?');
  if (!options); 

  var options = window.prompt('Number Characters?');
  if (!options);

  var options = window.prompt('Special Characters?');
  if (!options); 

  var options = window.prompt('Length');
  if(!options); {var options = Math.floor(Math.random() * options.length);
    return;
  }
  
 };



function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
};
function getRandomSymbol(){
  var symbols = ',./?=<>()*&^%$#@!~`';
  return symbols [Math.floor(Math.random() * symbols.length)]; 
};


 // write coder here, whatever value function
  // will be stored in here.
  // look up what += means!!!

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
