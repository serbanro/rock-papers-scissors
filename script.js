// declare selections and initial score
let computerSelection = "";
let userScore = 0;
let computerScore = 0;
    const SELECTIONS = [
        {
            name: `rock`,
            beats: `scissors`
        },
        {
            name: `scissors`,
            beats: `paper`
        },
        {
            name: `paper`,
            beats: `rock`
        }
    ];
const lastResults = document.querySelector(".last-result")
const humanScoreSpan = document.querySelector('[data-human-score]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const gameArea = document.querySelector('.game-area')
//get all selection buttons
    const selectionButtons = document.querySelectorAll("[data-selection]")

        selectionButtons.forEach((selectionButton) =>  {
            selectionButton.addEventListener("click", e => {
              const selectionName = selectionButton.dataset.selection;
             const selection = SELECTIONS.find(selection => selection.name === selectionName)  // assign element from SELECTION, where selection.name matches selectionName
               return makeSelection(selection)
            }

            )
        }
        )
        // function Game Mechanism . 
        function makeSelection(selection) {
            // console.log(selection)
            computerSelection = randomSelection()
            // console.log(computerSelection)
            let youWin = isWinner(selection, computerSelection)
            let computerWin = isWinner(computerSelection, selection)
            // console.log("User Win: " + youWin)
            // console.log("Computer win: " + computerWin)
            addSelectionResult(selection, youWin)
            addSelectionResult(computerSelection, computerWin)
            if (youWin) incrementScore(humanScoreSpan);
            if (computerWin) incrementScore(computerScoreSpan)
            
            declareWinner(humanScoreSpan)
            declareWinner(computerScoreSpan)
        
        }
        // function - makes gameArea invisible - Game Over screen appears
        function declareWinner (playerScore) { 
            if(playerScore.innerText == 5) {
            gameArea.classList.add("hidden")}
            }
        // function - increments score     
        function    incrementScore (scoreSpan) {    
            scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
        }

        // function - creates div elements for showing the game history
    function addSelectionResult (selection, winner) {
        const div = document.createElement('div');
        div.innerText = selection.name;
        div.classList.add("last-results");
        if (winner) div.classList.add("winner");
        lastResults.appendChild(div);
    }    
        // function to generate the comptuter's choice
    const randomSelection = function() {
        
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length) 
       
        return SELECTIONS[randomIndex]
    }

        // function to determine the winner of every round
    function isWinner (selection, opponentSelection) {
        return selection.beats === opponentSelection.name
    }
