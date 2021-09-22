// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numValue = ["1","2","3","4","5","6","7","8","9","0"];
const specChar = ["!","@","#","$","%","^","&","*","(",")"];



function generatePassword() {
  const numChars = prompt('How many characters?');

  if (numChars < 8 || numChars > 128) {
    alert('Your password must be between 8 and 128 characters.');
    return 'Please try again.';
  }

  const isLowerCase = confirm('Lower case?');
  const isUpperCase = confirm('Upper case?');
  const isNum = confirm('Numbers?');
  const isSpec = confirm('Special?');

  if (!isLowerCase && !isUpperCase && !isNum && !isSpec) {
    alert('Please confirm at least one of these options.');
    return 'Please try again.';
  }

  var options = [];
  var password = [];
  var required = [];

  if (isLowerCase) {
    options = options.concat(lowerCase);
    required.push(getRandom(lowerCase));
  }
  if (isUpperCase) {
    options = options.concat(upperCase);
    required.push(getRandom(upperCase));
  }
  if (isNum) {
    options = options.concat(numValue);
    required.push(getRandom(numValue));
  }
  if (isSpec) {
    options = options.concat(specChar);
    required.push(getRandom(specChar));
  }

  for (var i = 0; i < numChars - required.length; i++) {
    password.push(getRandom(options));
  }

  for (var i = 0; i < required.length; i++) {
    const idx = Math.floor(Math.random() * password.length);
    password.splice(idx, 0, required[i]);
  }

  password = password.join('');
  
  return password;
}

function getRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);