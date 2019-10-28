/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const splitTime = time.split(":")
  const parsedTime =  parseFloat(splitTime[0]) + (parseFloat(splitTime[1]) / 100)
  if (parsedTime > 12.00 && parsedTime < 17.00){
    return   "Good Afternoon"
  } else if (parsedTime < 12.00){
    return  "Good Morning"
  } else  {
    return "Good Evening"
  }
  debugger
}
/* Write your implementation of displayMessage() */
function displayMessage(greetResult){
  document.getElementById("greeting").innerText = greetResult
}