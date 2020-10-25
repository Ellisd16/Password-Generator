// Assignment Code



// Add event listener to generate button


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Write password to the #password input


  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChara = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  
  var length = 0;
  var choices ;

  var lowerChoice = false;
  var upperChoice = false;
  var specialChoice = false;
  var numberChoice = false;
  
  generateBtn.addEventListener("click", function(){
    generatePassword();
  });

  // Beginning prompt to see how many characters the user wants in their password

  function generatePassword(){
 
  length = prompt("Hey my dude, how many characters do you want in your password? Choose between 8-128!");

 while(length < 8 || length > 128){
    alert("Hey not those ones! Choose some different ones");
    prompt("Choose between 8-128. It ain't that hard...");
    if (length >= 8 || length <= 128){
      console.log(length);
      break;
    }
  }
  // validating the choices
  
  if (length >= 8 || length <= 128){

     lowerChoice = confirm("You want lowercase letters in your password?");
    
    upperChoice = confirm("You want uppercase letters in your password?");
    
    specialChoice = confirm("You want special characters in your password?");
   
     numberChoice = confirm("You want numbers in your password?");

  
    if (lowerChoice === false && upperChoice === false && specialChoice === false && numberChoice === false){
      choices = alert("Hey! Whatta you some kinda wise guy??? You gotta pick at least one option!")
    }
  
    else if (specialChoice && numberChoice && upperChoice && lowerCase){
      
      choices = specialChara.concat(numbers, upperCase, lowerCase); 
    }
    //3 choices were selected by the user

    else if(specialChoice && numberChoice && upperChoice){
      choice = specialChara.concat(numbers, upperCase);
    }
    
    else if(specialChoice && numberChoice && lowerChoice){
      choice = specialChara.concat(numbers, lowerCase);
    }
    
    else if(specialChoice && lowerChoice && upperChoice){
      choice = specialChara.concat(lowerCase, upperCase);
    }
    else if(numberChoice && lowerChoice && upperChoice){
      choice = numbers.concat(lowerCase, upperCase)
    }
    // if 2 choices were selected by the user

    else if (specialChoice && numberChoice){
      choice = specialChara.concat(numbers);
    }
    else if (specialChoice && lowerChoice){
      choice = specialChara.concat(lowerCase);
    }
    else if (specialChoice && upperChoice){
      choice = specialChara.concat(upperCase);
    }
    
    else if (lowerChoice && numberChoice){
      choice = lowerCase.concat(numbers);
    }
    else if (lowerChoice && upperChoice){
      choice = lowerCase.concat(upperCase);
    }
    else if (numberChoice && upperChoice){
      choice = lowerCase.concat(upperCase);
    }
    // if 1 option is selected by the user
    
    else if (specialChoice){
      choice = specialChara;
    }
    else if(numberChoice){
      choice = numbers;
    }

    else if (lowerChoice){
      choice = lowerCase;
    }
    else if(upperCase){
      choice = upperCase;
    }
    
  };
  // inputing the data from the validations
    var results = [];

    for (var i = 0; i < length; i++){
     var selections = choices[Math.floor(Math.random()*choices.length)];
        results.push(selections);
    }
    console.log(results);
    
    alert("Here is your new password: " + results);
    
    return results.join("");

   
    

};




