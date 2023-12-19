// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordOptions() {

// We need to ask the user how many characters they want on their password
var passLength = parseInt (prompt("Enter the number of characters - At least 8 characters but no more than 128. Please use digits"));

//now we are going to validate password length
/*I am having issues with this validation. If user introduces a number, it is validating that it is at least 8 and no bigger
than 128, however, it is not validating the fact that it needs to be a number*/

if (typeof passLength !== "number" || passLength < 8 || passLength > 128) 
{
  alert ("Please note the lenght of the password must be between 8 and 128 characters and you need to type digits");
  return; 
}


//Once the length of the password meets the criteria above, we need to ask the user what type of characters they want.
  var lowerCase = confirm ("Do you want Lowercase characters in your password? (e.g: a,b,c...)");
  var upperCase = confirm ("Do you want Uppercase characters in your password? (e.g: A,B,C...)");
  var numeric = confirm ("Do you want Numeric characters in your password? (e.g: 1,2,3...)");
  var special = confirm ("Do you want Special characters in your password? (e.g: @,%,+...)");
   
//We need the user to at least select one type of characters. If they do not select any of the four previous options, we need to let them know 
  if (!lowerCase && !upperCase && !numeric && !special ) 
  {
    alert ("You need to choose at least one character type (Lowercase, Uppercase, Numeric and/or Special)");
    return;
  }

// We need to know the user selection for their chosen option for characters    
    return {
      length: passLength,
      lower: lowerCase,
      upper: upperCase,
      numeric: numeric,
      special: special

    };
  }




// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
/*Please note, although this function will take into account user preferences for the password, it is not warranted that
it will contain a character of each type as these are randomly selected from the aggregation of the classes*/
function generatePassword() {
  var userOptions = getPasswordOptions();
  
  var selectedCharacters = [];
  if (userOptions.lower) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }
  if (userOptions.upper) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }
  if (userOptions.numeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }
  if (userOptions.special) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  var generatedPassword = '';
  for (var i = 0; i < userOptions.length; i++) {
    var randomCharacters = getRandom(selectedCharacters);
    generatedPassword += randomCharacters;
  }

  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);