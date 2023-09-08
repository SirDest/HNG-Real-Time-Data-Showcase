const timeContainer = document.querySelector('[data-testid="currentUTCTime"]');
const dayContainer = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const username = document.querySelector('[data-testid="SlackUserName"]');

// Username
const getUsername = () => {
  return "Destined";
};

// Below is to get the current time in milliseconds
const getCurrentUTCTimeInMilliseconds = () => {
  return new Date().getTime();
};

const utcMilliseconds = getCurrentUTCTimeInMilliseconds();

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
  timeContainer.textContent = utcMilliseconds;
  dayContainer.textContent = getCurrentDay();
  username.textContent = getUsername();
};

// Update data every 1 seconds
setInterval(updateData, 1000);

// Initial data update
updateData();

console.log(utcMilliseconds);
