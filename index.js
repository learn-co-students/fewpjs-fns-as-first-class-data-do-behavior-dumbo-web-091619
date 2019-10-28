/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(time) {
  let number = time.split(":")
  const parsedHour = parseInt(number[0])
  if (parsedHour <12) {
    return "Good Morning"
  }
  else if (parsedHour >= 12 && parsedHour < 17) {
    return "Good Afternoon"
  }
  else if (parsedHour >= 17) { 
    return "Good Evening"
  }
}


function displayMessage(message="TEST") {
    document.getElementById('greeting').innerText = message;
}


console.log(greet("21:00"))
