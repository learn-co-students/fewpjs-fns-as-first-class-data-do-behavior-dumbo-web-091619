/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  
  displayMessage(greet(timeString))
  
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let splitTime = time.split(":")
  let numberTime = parseInt(splitTime[0], 10)

  if (numberTime < 12) {
    return "Good Morning"
  }
  else if (numberTime < 18) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg
}
