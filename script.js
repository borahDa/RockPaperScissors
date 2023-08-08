const getComputerChoice = function () {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
console.log(getComputerChoice());
