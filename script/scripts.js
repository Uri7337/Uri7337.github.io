function calculateTime() {
    var startDate = new Date();
    var startTime = document.getElementById("start-time").value;
    var endDate = document.getElementById("end-date").value;
    var endTime = document.getElementById("end-time").value;

    var startDateTime = new Date(startDate.toDateString() + " " + startTime);
    var endDateTime = new Date(endDate + " " + endTime);

    var diff = endDateTime - startDateTime;

    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * 1000 * 60;
    var seconds = Math.floor(diff / 1000);

    var result = document.getElementById("result");
    result.textContent = "Time Difference: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";
}
