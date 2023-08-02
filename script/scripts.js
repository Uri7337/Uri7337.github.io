function calculateTimeDifference() {
      const startTimeInput = document.getElementById("start-time").value;
      const [startHour, startMinute] = startTimeInput.split(":").map(Number);

      // Get today's date and 16:20 as end time
      const today = new Date();
      const endHour = 16;
      const endMinute = 20;

      // Create Date objects for start time and end time
      const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMinute);
      const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, endMinute);

      // Calculate the time difference in milliseconds
      const timeDifferenceInMs = endTime - startTime;

      // Convert time difference to minutes
      const timeDifferenceInMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
      const hours = Math.floor(timeDifferenceInMinutes / 60);
      const minutes = timeDifferenceInMinutes % 60;

      const resultElement = document.getElementById("result");
      resultElement.textContent = `Time difference: ${hours} hours and ${minutes} minutes or ${timeDifferenceInMinutes} minutes. `;
    }
