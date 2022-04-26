var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
var upperCase = [
  "A",
  "B",
  "C",
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
var numberChar = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]
var specialChar = [
  '!',
  '@',
  '#',
  '$',
  '&',
  '.',
  '*',
  '?',
  '^',
  '%'
]
var yes = Boolean(true)
var no = Boolean(false)

function getPasswordOptions() {
  var length = parseInt(
    prompt= ('How Many Character Would You Like Your Password To Have?')

  /*variable that checks for a number -- if/else -- Number.isNAN(length)*/

/* variable that checks IF length is greater than 8 and smaller than 128 */


  )

  var options = window.prompt('')
}

function generatePassword(){
  var Lower = window.prompt('Lower Case Characters?');
  if (yes > 0){
    
    var index = Math.floor(Math.random() * lowerCase.length);
    var Lower = lowerCase[index]; 
    password.textContent = index.lowerCase;
  
  } 
  
  console.log(Lower)

  var Upper = window.prompt('Upper Case Characters?');
  if  (yes > 0){
    
    var index = Math.floor(Math.random() * upperCase.length);
    var Upper = upperCase[index]; 
 
  }
  console.log(Upper)

  var numb = window.prompt('Number Characters?');
  if (yes > 0){
    var index = Math.floor(Math.random() * numberChar.length);
    var numb = numberChar[index]; 
    } 
  
  console.log(numb)

  var rand = window.prompt('Special Characters?');
  if (yes > 0){
    var index = Math.floor(Math.random() * specialChar.length);
    var rand = specialChar[index]; 
    } 
      
    

  console.log(rand)
  /* if hasLowerCase === false && hasUperCase === false && hasNubmer === false && hasCharacters === false {then alert "need to add valid requests"} */

/* store each input in to an object -- haslowercase: hasLowerCase */

/* randomize each object */

  
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
