// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  generatePassword();
});

  function generatePassword(){
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbers = ["0","1","2","3","4","5","6","7","8","9"];

  var specialChara = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

  var length = prompt("Hey my dude, how many characters do you want in your password? Choose between 8-128!");
  
  var options; 


 while(length < 8 || length > 128){
    alert("Hey not those ones! Choose some different ones");
    prompt("Choose between 8-128. It ain't that hard...");
    if (length >= 8 || length <= 128){
      break;
    }
  }
  
  if (length >= 8 || length <= 128){

    var lowerCaseInput = confirm("You want lowercase letters in your password?");
    if (lowerCaseInput){
      alert("Sweet!")
    }
    else{
      alert("For sure then...")
    }
    var upperCaseInput = confirm("You want uppercase letters in your password?");
    if (upperCaseInput){
      alert("Sweet!")
    }
    else{
      alert("Oh ok...")
    }
    var specialCharaInput = confirm("You want special characters in your password?");
    if (specialCharaInput){
      alert("Sweet!")
    }
    else{
      alert("For sure then...")
    }
    var numCharaInput = confirm("You want numbers in your password?");
    if (numCharaInput){
      alert("Sweet!")
    }
    else{
      alert("For sure then...")
    }
    
    if (lowerCaseInput === false && upperCaseInput === false && specialCharaInput === false && numCharaInput === false){
      alert("Hey! Whatta you some kinda wise guy??? You gotta pick at least one option!")
    }
  
    else if (lowerCaseInput){
      options = lowerCase
      
    }
    
    else if(upperCaseInput){
      options = upperCase
    }
    
    else if (numCharaInput){
      options = numbers
    }
    
    else if (specialCharaInput){
      options = specialChara
    }
    else if(lowerCaseInput && upperCaseInput){
        options = lowerCase.concat(upperCase);
    }
    else if (lowerCaseInput && specialCharaInput){
      options = lowerCase.concat(specialChara);
    }
    else if (lowerCaseInput && numCharaInput){
      options = lowerCase.concat(numbers);
    }
    else if (lowerCaseInput && upperCaseInput && numCharaInput){
      options = lowerCase.concat(upperCase, numbers);
    }
    
    else if (upperCaseInput && specialCharaInput){
      options = upperCase.concat(specialChara);
    }
    else if  (upperCaseInput && numCharaInput){
      options = upperCase.concat(numbers)
    }
    else if (upperCaseInput && specialCharaInput && numCharaInput){
      options = upperCase.concat(specialChara, numbers)
    }
    else if (specialCharaInput && numCharaInput){
      options = specialChara.concat(numbers);
    }
    else if(specialCharaInput && numCharaInput && lowerCaseInput){
      options = specialChara.concat(numbers, lowerCase);
    }

    else if (lowerCaseInput && upperCaseInput && numCharaInput && specialCharaInput){
      options = lowerCase.concat(upperCase, numbers, specialChara);
    }

    var password = []

      for(var i = 0; i < length; i++){
        var pickOptions= options[Math.floor(Math.random()*options.length)];
        password.push(pickOptions)
      }
    
  
    
    
    
  };
};
