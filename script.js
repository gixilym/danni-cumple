document.addEventListener("DOMContentLoaded", function () {
  function updateCountdown() {
    const currentDate = new Date();
    let nextBirthday = new Date(currentDate.getFullYear(), 3, 4);
    if (currentDate > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeRemaining = nextBirthday - currentDate,
      totalSeconds = Math.floor(timeRemaining / 1000),
      totalMinutes = Math.floor(totalSeconds / 60),
      totalHours = Math.floor(totalMinutes / 60),
      totalDays = Math.floor(totalHours / 24);
    let months = 0,
      days = totalDays,
      hours = totalHours % 24,
      minutes = totalMinutes % 60,
      seconds = totalSeconds % 60;
    let tempDate = new Date(currentDate);
    while (tempDate < nextBirthday) {
      tempDate.setMonth(tempDate.getMonth() + 1);
      if (tempDate <= nextBirthday) {
        months++;
        days -= new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          0
        ).getDate();
      } else {
        tempDate.setMonth(tempDate.getMonth() - 1);
        break;
      }
    }
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
