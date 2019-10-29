/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(inputStr){
  const hour = parseInt(inputStr, 10)
  if (hour > 24) return "Time value must be between 0 and 24"
  if (hour < 0) return "Time value must be between 0 and 24"
  if (hour < 12) return "Good Morning"
  if (hour < 17) return "Good Afternoon"
  return "Good Evening"
}

/*console.log("Invalid Time. Make sure it is between 0 and 24")


/* Write your implementation of displayMessage() */

function displayMessage(valueIn){
  document.getElementById("greeting").innerText = valueIn;
}