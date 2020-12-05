
// Guess The Number Game
// DONE: Get user value from the input and save it to the variable numberGuess
// DONE: Generate a random number 1 to 100 and save it to variable correctNumber
// DONE: Console whether the guess is too high, too low or is correct inside playGame() function
// DONE: Create a function called displayResult to move the logic for if the guess
// DONE: Complete the showYouWon, showNumeberAbove, showNumberBelow
// DONE: Use the showYouWon... functons within displayResult to display the correct
// DONE: Save the Guess history in a variable called guess
// DONE: Display the guess history using displayHistory() function
// DONE: Use the initGame() function to restart the game


// Variable to store the list of guesses
let guesses = [];
// Variable for store the correct random number
let correctNumber =  getRandomNumber();


window.onload = () =>{
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    
}

/**
 * functionality for playing the whole game
 */

 function playGame(){
     const numberGuess = document.getElementById("number-guess").value;
     console.log(correctNumber)
     displayResult(numberGuess);
     saveGuessHistory(numberGuess);
     displayHistory();
 }

 /**
  * Return a random number between 1 and 100
  * Hint: Use Math.random
  */
 function getRandomNumber(){
     // *CODE GOES BELOW HERE *
     let randomNumber = Math.random();
     let wholeNumber = Math.floor(randomNumber * 100) + 1;
     return wholeNumber;
 }
/**
 * Show the result for if the guess is too high, too low or is correct
 * HINT: Use conditional statements
 */
function displayResult(numberGuess){
    if(numberGuess > correctNumber){
        showNumeberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else if(numberGuess == correctNumber) {
        showYouWon();
    }
}
 
 function getDialog(dialogType, text){
     let dialog;
     switch(dialogType){
         case "warning":
             dialog = "<div class='alert alert-warning' role='alert'>";
             break;
         case "won":
             dialog = "<div class= 'alert alert-success' role= 'alert'>";
             break;
        
     }
     dialog += text;
     dialog += "</div>"
     return dialog
 }

 function showYouWon(){
     const text = "Awesome job, you got it!"
     /**
      * Retrieve the dialog using the getDialog() function
      * and save it to variable called dialog
      * HINT: Use the 'won' and text parameters
      */
     let dialog = getDialog('won', text);
     document.getElementById("result").innerHTML= dialog;
 }
 function showNumeberAbove(){
     const text = "Your guess is too High!"
     /**
      * Retrieve the dialog using the getDialog() function
      * and save it to variable called dialog
      * HINT: Use the 'warinig' and text parameters
      */
     let dialog = getDialog('warning', text);
     document.getElementById("result").innerHTML= dialog;
 }
 function showNumberBelow(){
    const text = "Your guess ia too Low!"
      /**
      * Retrieve the dialog using the getDialog() function
      * and save it to variable called dialog
      * HINT: Use the 'warinig' and text parameters
      */
     let dialog = getDialog('warning', text);
     document.getElementById("result").innerHTML= dialog;
 }
 /**
  * Save guess history
  * HINT: Search Google "append to array in javascript"
  * HINT: Use the guesses variable
  */
 function saveGuessHistory(guess) {
/**CODE GOES BELOW HERE */
guesses.push(guess)
console.log(guesses);
 }
 /**
  * Diaplay guess history to the user
  * HTML TO USE:
  * <ul class='list-group'>
  * <li class='list-group-item'>Your guessed {number}</li>
  * </ul>
  * HINT: Use while loop and string concatentation to create a list
  */
 function displayHistory() {
     let index = guesses.length - 1; //TODO
     console.log(guesses.length);
     console.log(index);
     let list = "<ul class='list-group'>";
     while(index >= 0){
         list += "<li class='list-group-item'>" + "Your guessed " + guesses[index] + "</li>";
         index-=1;
         console.log(index);
     }
     list += '</ul>';
     document.getElementById("history").innerHTML = list;
 }
 function initGame(){
    // *CODE GOES BELOW HERE *
    // Reset the correctNumber
    // Reset the result display
    // Reset the guesses array
    // Reset the guess history display
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML="";
    guesses = [];
    displayHistory();
 }