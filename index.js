/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(e){
	let split_greet = e.split(":")
	let hour = split_greet[0]
	if (hour < 12) {
		console.log("Good Morning")
		return "Good Morning"
	} else if (hour > 12 && hour < 17) {
		console.log("Good Afternoon")
		return "Good Afternoon"
	} else {
		console.log("Good Evening")
		return "Good Evening"
	}
}

function displayMessage(greet){
	document.getElementById("greeting").innerText = greet
}