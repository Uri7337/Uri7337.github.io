// scripts.js
function calculateTimeDifference() {
  const startTimeInput = document.getElementById("start-time").value;
  const [startHour, startMinute] = startTimeInput.split(":").map(Number);

  const endTimeInput = document.getElementById("end-time").value;
  const [endHour, endMinute] = endTimeInput.split(":").map(Number);

  // Get today's date
  const today = new Date();

  // Create Date objects for start time and end time
  const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMinute);
  const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, endMinute);

  // Check if the end time is before the start time, then add one day to the end time
  if (endTime < startTime) {
    endTime.setDate(endTime.getDate() + 1);
  }

  // Calculate the time difference in milliseconds
  const timeDifferenceInMs = endTime - startTime;

  // Convert time difference 
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
  const hours = Math.floor(timeDifferenceInMinutes / 60);
  const minutes = timeDifferenceInMinutes % 60;
  
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Time difference: ${timeDifferenceInMinutes} minutes or ${hours} hours and ${minutes} minutes`;
}


// Get the input field
let input = document.getElementsByClassName("timeinput");

// Execute a function when the user presses a key on the keyboard
input[0].addEventListener("keypress", confirmEnter(event)); 
input[1].addEventListener("keypress", confirmEnter(event));

function confirmEnter(event){
    if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.document.getElementsByClassName("ghlikebutton")[0].click();
  }
}
