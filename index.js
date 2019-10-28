/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let timeNumber = parseInt(timeString)
  if (timeNumber < 12) {
    return "Good Morning"
  } else if(timeNumber > 12 && timeNumber < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = `${string}`
}
