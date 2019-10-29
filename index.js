/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(inputString){
  let timeString = '';
  if (inputString.length === 4){
    timeString = '0' + inputString
  } else {
    timeString = inputString
  }

  if (timeString < '12:00') {
    return "Good Morning";
  } else if (timeString >= '12:00' && timeString < '18:00') {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}


function displayMessage(inputString) {
  let greetingDisplay = document.getElementById("greeting");
  greetingDisplay.innerText = inputString;
}
