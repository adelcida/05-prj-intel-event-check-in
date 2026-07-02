// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

let greetingTimer;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Increment count
  count++;
  console.log("Total check-ins", count);

  // Update progress bar
  const progressBar = document.getElementById("progressBar");
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  progressBar.style.width = percentage;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Update attendance tracker
  const attendanceCounter = document.getElementById("attendeeCount");
  attendanceCounter.textContent = parseInt(attendanceCounter.textContent) + 1;

  // Show welcome message
  const message = `Welcome, ${name} from ${teamName}!!!!`;
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;
  greeting.style.display = "block";

  clearTimeout(greetingTimer);
  greetingTimer = setTimeout(() => {
    greeting.style.display = "none";
  }, 8000);
  console.log(message);

  form.reset();
});
