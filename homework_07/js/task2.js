var totalPrize = 0;
var currentPrize = 10;
var max = 5;
var min = 0;
var number = 0;
var rand = 0;
var attempts = 0;
var maxAttempts = 3;
var game = false;
var playGame= confirm("Do you want to play a game?");
if (playGame) {
    while (true) {
        game = false;
        attempts = 0;
        rand = Math.floor(Math.random() * (max - min + 1) + min);   
        while (attempts < maxAttempts) {
            number = (prompt("Please enter a number from " + min + " to " + max +
                "\nAttempts left: " + (attempts + 1) + "\nTotal prize: " + totalPrize +
                "$\nPossible prize on current attempt: " + currentPrize + "$" ));
                            
            if (!(number=="")) {
              if (number == rand) {
                  totalPrize += currentPrize;
                  var continiueGame = confirm("Do you want to continue a game?");
                  if (continiueGame) {
                      game = true;                       
                      currentPrize *= 3;                      
                      max *= 2;
                  }
                  break;
              }
            }
            attempts++;    
            currentPrize =parseInt( currentPrize / 2);            
        }
        if (!game) {
            console.log("Thank you for a game. Your prize is: " + totalPrize);
            var playAgain = confirm("Do you want to play again?");
            if(playAgain) {
                totalPrize = 0;
                currentPrize = 10;
                max = 5;  
            } else {
                break;
            } 
        }
    }
} else {
    console.log("You did not become a millionaire");
}