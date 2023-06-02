function calculateTime() {
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;

    var start = new Date("2020-01-01T" + startTime + ":00");
    var end = new Date("2020-01-01T" + endTime + ":00");

    var diff = end - start;

    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * 1000 * 60;
    var seconds = Math.floor(diff / 1000);

    var result = document.getElementById("result");
    result.textContent = "Time Difference: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";
}
