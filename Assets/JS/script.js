
// Declaring what can be contained in the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";

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

function generatePassword() {

  //shows a prompt that asks if the user wants special characters
  var containsSpecial = confirm("Should this password contain special characters?")

  //shows a prompt that asks if they want numbers
  var containsNumbers = confirm("Should this password contain special characters?")

  //shows a prompt asking if they would like uppercase letters 
  var containsUpper = confirm("Should this password contain uppercase letters?")

  //shows a prompt asking if they would like lowercase letters
  var containsLower = confirm("Should this password contain lowercase letters?")

  //this next bit is me making variables for boolean values of all the above variables(since I don't know how else to insert them into 'if' statements)

  var specialTrue = containsSpecial === true; 
  var specialFalse = containsSpecial === false;
  var numbersTrue = containsNumbers === true;
  var numbersFalse = containsNumbers === false;
  var upperTrue = containsUpper === true;
  var upperFalse = containsUpper === false;
  var lowerTrue = containsLower === true;
  var lowerFalse = containsLower === false;

  //an 'if' statement to make sure the user actually picks at least one option

  if (specialFalse && numbersFalse && upperFalse && lowerFalse) {
    alert("You must select at least one option");
    return;
  } else {
    var passwordLength = prompt("Please enter a length from 8 to 128 for your password");
  }

  //We need an if statement to make sure they actually put a number in
  if (isNaN(passwordLength)) {
    alert("Please make sure the value you have entered is a number");
    passwordLength = prompt("Please enter a length from 8 to 128 for your password");
  }
  
  //Next we check if the user has chosen a number between 8 - 128

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number from 8 to 128")
    passwordLength = prompt("Please enter a length from 8 to 128 for your password")
  } 
  
  else {   /* I would have preffered to make this next bit a function, 
          but that broke it due to how the starting code is laid out*/  
   
      //These next if statements basaically control that characters are allowed

    if (specialTrue && numbersTrue && upperTrue && lowerTrue) {
      //allowed makes a list of all characters available to be used
      var allowed = special + numbers + uppercase + lowercase;
      //We set password to be blank to stop any issues from ocurring
      password = '';
      /*This for loop will select a random character from the available ones and add 
      them all to 'password' until the length selected by the user is reached */
      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    } 

    if (specialFalse && numbersTrue && upperTrue && lowerTrue) {
      var allowed = numbers + uppercase + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersFalse && upperTrue && lowerTrue) {
      var allowed = uppercase + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersFalse && upperFalse && lowerTrue) {
      var allowed = lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersFalse && upperTrue && lowerTrue) {
      var allowed = special + uppercase + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersTrue && upperFalse && lowerTrue) {
      var allowed = special + numbers + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersTrue && upperTrue && lowerFalse) {
      var allowed = special + numbers + uppercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersTrue && upperFalse && lowerFalse) {
      var allowed = special + numbers;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersFalse && upperFalse && lowerTrue) {
      var allowed = special + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersFalse && upperTrue && lowerFalse) {
      var allowed = special + uppercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialTrue && numbersFalse && upperFalse && lowerFalse) {
      var allowed = special;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersTrue && upperTrue && lowerFalse) {
      var allowed = numbers + uppercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersTrue && upperFalse && lowerTrue) {
      var allowed = numbers + lowercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersTrue && upperFalse && lowerFalse) {
      var allowed = numbers;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }

    if (specialFalse && numbersFalse && upperTrue && lowerFalse) {
      var allowed = uppercase;
      password = '';

      for (var i = 0; i < passwordLength; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
      }

      return password;
    }
  }

}

