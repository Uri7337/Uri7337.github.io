document.addEventListener("DOMContentLoaded", function () {
  // Funkce pro výpočet dnů do 7. dne příštího měsíce
  function calculateDaysToNextSeventh() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Nastavíme datum na 7. den příštího měsíce
    let nextMonth = currentMonth;
    if(currentDay > 7){
      nextMonth++;
    }
    let nextYear = currentYear;

    // Pokud je prosinec, přejdeme na leden dalšího roku
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }

    // Datum 7. dne příštího měsíce
    const nextSeventhDate = new Date(nextYear, nextMonth, 7);

    // Výpočet rozdílu v dnech
    const differenceInTime = nextSeventhDate - today;
    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24)
    );

    // Zkontrolujte, zda existuje element s ID "result-days-left"
    const resultElement = document.getElementById("result-days-left");
    if (resultElement) {
      // Výsledek zobrazíme
      const msg = differenceInDays + " days.";
      resultElement.innerText = msg;
    } else {
      console.error('Element with ID "result-days-left" not found.');
    }
  }

  // Spustíme výpočet při načtení stránky
  calculateDaysToNextSeventh();
});

function calculateTimeDifference() {
  const startTimeInput = document.getElementById("start-time").value;
  const [startHour, startMinute] = startTimeInput.split(":").map(Number);

  const endTimeInput = document.getElementById("end-time").value;
  const [endHour, endMinute] = endTimeInput.split(":").map(Number);

  // Get today's date
  const today = new Date();

  // Create Date objects for start time and end time
  const startTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    startHour,
    startMinute
  );
  const endTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    endHour,
    endMinute
  );

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
  const result2Element = document.getElementById("result2");
  resultElement.textContent = `${hours} hours and ${minutes} minutes`;
  result2Element.textContent = `${timeDifferenceInMinutes} minutes`;
}

// Get the input field
let input = document.getElementsByClassName("timeinput");

// Execute a function when the user presses a key on the keyboard
input[0].addEventListener("keypress", confirmEnter(event));
input[1].addEventListener("keypress", confirmEnter(event));

function confirmEnter(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.document.getElementsByClassName("ghlikebutton")[0].click();
  }
}
