// Send GET request to Advice Slip API
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // Extract slip object
    const slip = data.slip;

    // Extract advice and ID from slip object
    const advice = slip.advice;
    const number = slip.id;

    // Replace div content with new consts.
    var adviceNumber = document.getElementById("advice-number");
    var adviceDiv = document.getElementById("advice");
    adviceNumber.innerHTML = `ADVICE #${number}`;
    adviceDiv.innerHTML = `&ldquo;${advice}&rdquo;`;

    // Log advice and its number to console
    console.log(`Advice #${number}: ${advice}`);
  })
  .catch(error => console.error(error));
