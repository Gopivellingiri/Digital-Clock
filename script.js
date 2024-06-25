
/* setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayNight = "AM";
  if (hours > 12) {
    dayNight = "PM";
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes= '0' + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.textContent = `${hours}:${minutes}:${seconds} ${dayNight}`;
}); */

setInterval(() => {
    const time = document.querySelector("#time");
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // Determine AM or PM
    const dayNight = hours >= 12 ? "PM" : "AM";
  
    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
  
    // Pad hours, minutes, and seconds with leading zeros if necessary
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    // Update the time display
    time.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${dayNight}`;
  }, 1000);
  