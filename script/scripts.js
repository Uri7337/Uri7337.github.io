function calculateTimeDifference() {
      const startDateInput = document.getElementById("start-date").value;
      const startTimeInput = document.getElementById("start-time").value;
      const [startHour, startMinute] = startTimeInput.split(":").map(Number);

      // Get today's date and 16:20 as end time
      const today = new Date();
      const endHour = 16;
      const endMinute = 20;

      // Create Date objects for start time and end time
      const startTime = new Date(startDateInput);
      startTime.setHours(startHour, startMinute);

      const endTime = new Date(startTime);
      if (startTime < today) {
        // If the start time is in the past, set the end time to today at 16:20
        endTime.setHours(endHour, endMinute);
        document.getElementById("end-date").value = today.toISOString().slice(0, 10);
      } else {
        // Otherwise, set the end time to the same date as the start time at 16:20
        endTime.setHours(endHour, endMinute);
        document.getElementById("end-date").value = startDateInput;
      }

      // Calculate the time difference in milliseconds
      const timeDifferenceInMs = endTime - startTime;

      // Convert time difference to minutes
      const timeDifferenceInMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
      const hours = Math.floor(timeDifferenceInMinutes / 60);
      const minutes = timeDifferenceInMinutes % 60;

      const resultElement = document.getElementById("result");
      resultElement.textContent = `Time difference: ${hours} hours and ${minutes} minutes or ${timeDifferenceInMinutes} minutes. `;
    }
