async function getAdvice() {
  let randomNum = Math.floor(Math.random() * 100); // Generate a random number
  let response = await fetch(`https://api.adviceslip.com/advice/${randomNum}`); // Add the random number as a query parameter
  let data = await response.json();
  let adviceNumber = data.slip.id;
  let adviceText = data.slip.advice;
  document.getElementById("advice-number").innerHTML = `ADVICE #${adviceNumber}`;
  document.getElementById("advice").innerHTML = `&ldquo;${adviceText}&rdquo;`;
}


window.onload = function() {
  getAdvice();
}