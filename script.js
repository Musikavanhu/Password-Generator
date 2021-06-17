// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");



// Write password to the #password input
function writePassword() {
  var allCharacters = [];
  var resultsPassword = "";

  var Totlength = prompt("How many characters would you like your password to be?");
  if(Totlength <8 || Totlength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
}
else{
  if(confirm("Would you like your password to contain upper case letters?")){
Array.prototype.push.apply(allCharacters, abcUpperArr);
  }
  if(confirm("Would you like your password to contain lower case letters?")){
    Array.prototype.push.apply(allCharacters, abcLowerArr);
  }
  if (confirm("Would you like your password to contain numbers?")){
    Array.prototype.push.apply(allCharacters, numArr);
}
if(confirm("Would you like your password to contain symbols?")){
  Array.prototype.push.apply(allCharacters, symArr);
}
if(allCharacters.length===0){
  alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
}
else{
  for(var i=0; i<Totlength; i++){
    var random = Math.floor(Math.random()*allCharacters.length);
    resultsPassword += allCharacters[random];
}
}
}
document.getElementById("password").innerHTML = resultsPassword;


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
