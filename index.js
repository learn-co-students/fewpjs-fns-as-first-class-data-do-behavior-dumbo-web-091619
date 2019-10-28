/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let str = time.split('')[0]
  if(time.length === 5){
  str += time.split('')[1]
  }
  console.log(str)
  if(str < 12){
    return `Good Morning`
  }
  else if (str < 17) {
    return `Good Afternoon`
  }
  else {
    return `Good Evening`
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  document.getElementById("greeting").innerText = greet;
};
