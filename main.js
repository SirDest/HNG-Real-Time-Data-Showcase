const timeContainer = document.querySelector('[data-testid="currentUTCTime"]');
const dayContainer = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const gitButton = document.querySelector('[data-testid="githubURL"]');
const gitUrl = "https://github.com/SirDest/HNG-Real-Time-Data-Showcase";

// Below is to get the current time
const getCurrentDateTime = () => {
  const now = new Date();

  const time =
    now.getUTCHours().toString().padStart(2, "0") +
    ":" +
    now.getUTCMinutes().toString().padStart(2, "0");
  return `${time} UTC`;
};

// This is to get the current day of the week
const getCurrentDay = () => {
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  return `${dayOfWeek}`;
};

//  function to run the date, time and day
const updateData = () => {
  timeContainer.textContent = getCurrentDateTime();
  dayContainer.textContent = getCurrentDay();
};

// Update data every 1 seconds
setInterval(updateData, 1000);

// Initial data update
updateData();

const gitLink = () => {
  window.open(gitLink);
};
gitButton.addEventListener(onclick, gitLink);
