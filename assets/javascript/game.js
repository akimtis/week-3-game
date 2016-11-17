      // 1. computer pick choice of any letter
      // 2. user guesses a letter
      // 3. computer compares user guess 
      // 4. if user guesses correctly, user wins
      // 5. if user guesses incorrectly, user loses a turn
      // 6. user guesses a second letter
      // 7. repeat steps 4,5,and 6 until user wins or turns= 0

      // Ignore non alphabetical guesses Hint: Look up indexOf()
      // Check how many guesses a user has made Hint: We only need 
      // to do this when they guess wrong
      // When user wins or loses, add to the wins and losses variable
      // Display this information to the document whenever it changes


      var options = "abcdefghijklmnopqrstuvwxyz".split("");
      console.log(options);
      var wins = 0;
      var losses = 0;
      var guesses = [];
      var guessesLeft = 10;
      var display = document.querySelector("#display-results");
      /*console.log(display)*/

function displayResults(){
        var string = '<p>Your Guesses So Far:' + guesses + '<p>';
        string += '<p>Wins: ' + wins + '</p>';
        string += '<p>Losses: ' + losses + '</p>';
        string += '<p>Remaining Guesses: ' + guessesLeft + '</p>';
        
        display.innerHTML = string;
      }

      document.onkeyup = function(event) {
        var key = event.key;

        if (options.indexOf()> -1){
        return undefined;
        }

        var computerChoice = options[Math.floor(Math.random() * options.length)];
        console.log(computerChoice);
            if (key === computerChoice){
            console.log("Correct!");
            guesses = [];
            wins++;
            displayResults(guesses, guessesLeft, wins, losses);
            alert("You are psychic")

          }
          else {
            console.log("Not correct")
            guesses.push(key);
            console.log(guesses);
            guessesLeft--;
            losses++;
            displayResults(guesses, guessesLeft, wins, losses);
          }
        }
       

        //displayResults();
            
          
        
            