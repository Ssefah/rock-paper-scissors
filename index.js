const getComputerChoice = () => {
    //Generate a random number between 0 to 2
    const randomNumber = Math.floor(Math.random() * 3)
    
    let choice;
    switch (randomNumber) {
        case 0:
    choice =  'Rock'       
            break;
    
        case 1:
    choice =  'Paper'       
    break;
    case 2:
        choice =  'Scissors'       
        break;
    }
    return choice
}

const singleRoundPlay = (playerSelection, computerSelection) =>{
    
    const capitalize = (str) =>{
        str = str.toLowerCase();
        const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr;
    } 
    // Leveliing the plane
    playerSelection = capitalize(playerSelection);

    //check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    // check for a player wins 
    if (playerSelection === 'Scissors'  && computerSelection === 'Paper') {
        return 'You Win! Scissors cuts Paper'
    }
    else if (playerSelection === 'Paper'  && computerSelection === 'Rock') {
        return 'You Win! Paper covers Rock'
    }
    else if (playerSelection === 'Rock'  && computerSelection === 'Scissors') {
        return 'You Win! Rock Blunts Scissors '
    }
    
    // check for a computer wins 
    if (computerSelection === 'Scissors'  && playerSelection === 'Paper') {
        return 'Computer Wins! Scissors cuts Paper'
    }
    else if (computerSelection === 'Paper'  && playerSelection === 'Rock') {
        return 'Computer Wins! Paper covers Rock'
    }
    else if (computerSelection === 'Rock'  && playerSelection === 'Scissors') {
        return 'Computer Wins! Rock Blunts Scissors '
    }

    // if the code reaches here there is an error 
    return "Invalid selection, Please choose Rock, Paper Or Scissors "
}

const game = () =>{
    let playerScore = 0
    let computerScore = 0
    
    for (let round = 0; round < 5; round++) {
        //player selection
     const playerSelection = prompt("Enter your Choice:")
     
    //  computerSelection
    const computerSelection = getComputerChoice()

    //Results
     const results = singleRoundPlay(playerSelection, computerSelection)
    
     //Score Update
    if (results.includes("You Win")) {
        playerScore++;
        
    } else if (results.includes("Computer Wins")){
        computerScore++;
    }
    console.log(results)
}
    //Overall Winner
    let overallWinner;
    if (playerScore > computerScore) {
        overallWinner = 'Player'}
    else if (computerScore > playerScore) {
            overallWinner = 'Computer'
        }
     else {
        overallWinner = 'Tie'
    }
    //Winner

    console.log(`\nOverall Winner: ${overallWinner}`)
   
}

//call the game fuction at last
game();