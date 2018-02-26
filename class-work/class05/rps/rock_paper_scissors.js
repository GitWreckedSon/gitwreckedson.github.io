// this app relies on the 'prompt' node module
var prompt = require('prompt');

// initializes game; prompts user for rock, paper, or scissors input
function init () {
	prompt.get('choice', function (err, result) {
		var choice = result.choice;

		// error handling - will run prompt again if user does not enter rock, paper, or scissors
		if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
			return init();
		}
		// from des - try using Math.random to choose 1, 2, or 3 (rock, paper, or scissor)

		console.log('The user selected: ' + choice + '!')

		// triggers game
		startGame(choice)
	});
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
	var cpuChoice = generateCPUChoice();
	var winner = compare(userChoice, cpuChoice);
	
// debugging from des	
//	console.log('user choice ' + userChoice);
//	console.log('cpu choice ' + cpuChoice);
	
	console.log(winner + ' is the winner!');
}

// do i really need to comment what this does
function generateCPUChoice () {
	choiceArray = ['rock', 'paper', 'scissors']
	cpuChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]
		return cpuChoice;
}

// sometimes there is a draw, doofus. nobodoy wins. just the way communists like it.
function compare(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    return 'nobody';
  } else if (userChoice === 'rock' && cpuChoice === 'paper') {
      return 'cpu';
  } else if (userChoice === 'rock' && cpuChoice === 'scissors') {
      return 'user';
  } else if (userChoice === 'paper' && cpuChoice === 'rock') {
      return 'user';
  } else if (userChoice === 'paper' && cpuChoice === 'scissors') {
      return 'cpu';
  } else if (userChoice === 'scissors' && cpuChoice === 'paper') {
      return 'user';
  } else if (userChoice === 'scissors' && cpuChoice === 'rock') {
      return 'cpu';
  }  
}



