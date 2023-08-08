const getComputerChoice = function () {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

function playRound() {
  const playerSelection = prompt(
    `Type "rock", "paper", or "scissors"`
  ).toLowerCase();
  const compChoice = getComputerChoice();
  console.log(`Player chose: ${playerSelection}`);
  console.log(`Computer chose: ${compChoice}`);

  let result = "";

  if (playerSelection === compChoice) {
    result = "It's a draw!";
  } else if (
    (playerSelection === "rock" && compChoice === "scissors") ||
    (playerSelection === "paper" && compChoice === "rock") ||
    (playerSelection === "scissors" && compChoice === "paper")
  ) {
    result = "Player wins!";
  } else {
    result = "Computer wins!";
  }

  console.log(result);

  return result;
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const result = playRound();
    if (result === "Player wins!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
    console.log(
      `Player score: ${playerScore}, Computer score: ${computerScore}`
    );
  }
}

game();
