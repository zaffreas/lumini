// Difficulty & Time selection
document.querySelectorAll("[data-difficulty]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-difficulty]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("difficulty").value = btn.dataset.difficulty;
  });
});

document.querySelectorAll("[data-time]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("time").value = btn.dataset.time;
  });
});

// Select all topics
const selectAll = document.getElementById("selectAll");
const topicCheckboxes = document.querySelectorAll(".topics-grid input");

selectAll.addEventListener("change", () => {
  topicCheckboxes.forEach(cb => cb.checked = selectAll.checked);
});

// Submit
document.getElementById("practiceForm").addEventListener("submit", e => {
  e.preventDefault();

  const topics = [...topicCheckboxes]
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const data = {
    pastQuestion: e.target.pastQuestion.value,
    difficulty: e.target.difficulty.value,
    time: e.target.time.value,
    topics
  };

  console.log("Practice Session Data:", data);
  alert("Practice session configured successfully!");
});
// Populate years from 1970 - 2024
const yearList = document.getElementById("yearOptions");

for (let year = 2024; year >= 1970; year--) {
  const option = document.createElement("option");
  option.value = year;
  yearList.appendChild(option);
}
