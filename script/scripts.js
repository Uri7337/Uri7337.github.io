function calculateEndTime() {
    const startTimeInput = document.getElementById("start-time");
    const endTimeInput = document.getElementById("end-time");

    // Get the current date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    // Get the selected start time
    const startTime = startTimeInput.value;

    // Set the end time to 16:20
    const endTime = "16:20";

    // Combine the date and time strings to create the final date-time values
    const startDateTime = `${year}-${month}-${day}T${startTime}`;
    const endDateTime = `${year}-${month}-${day}T${endTime}`;

    // Set the calculated end time in the input field
    endTimeInput.value = endTime;

    // Display the result
    console.log("Start Date-Time:", startDateTime);
    console.log("End Date-Time:", endDateTime);
}

// Add an event listener to the start time input to recalculate end time on change
document.getElementById("start-time").addEventListener("change", calculateEndTime);

// Initially calculate the end time with the default value of the start time input


