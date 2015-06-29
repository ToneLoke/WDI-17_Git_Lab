//This is not a quiz

//Write JavaScript to do something

/* your code start here */

var firstTask = 'git pull';

function getInput() {
    console.log("What's the first thing students should do in class before anything?");
    return prompt();
}

switch(getInput()) {
	case "git pull":
		reply = "Correct! You got 100% on the quiz!";
		break;
	default:
		reply = "Nope! You need to study more.";
		break;
}

console.log(reply);

/* your code ends here */

