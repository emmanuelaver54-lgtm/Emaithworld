const promisesList = document.getElementById("promisesList");
const promiseInput = document.getElementById("promiseInput");
const writerToggle = document.getElementById("writerToggle");

let promises = JSON.parse(localStorage.getItem("emaithPromises")) || [];

// Default writer
let currentWriter = "Emmy";

function displayPromises() {
  promisesList.innerHTML = "";
  const now = new Date();

  // Show newest first
  promises.slice().reverse().forEach((promise, reverseIndex) => {
    const div = document.createElement("div");
    div.className = "promise";

    // Background color per writer
    div.style.background = promise.writer === "Emmy" ? "#ffe6f0" : "#ffd6d6";

    // Heart icon
    const heart = "💖";

    // Check if promise is older than 30 days
    const promiseDate = new Date(promise.date);
    const daysDiff = Math.floor((now - promiseDate) / (1000*60*60*24));
    const canDelete = daysDiff < 30;

    div.innerHTML = `
      <p>${heart} ${promise.text}</p>
      <small>— ${promise.writer} | ${promise.date}</small>
      ${canDelete ? `<button onclick="deletePromise(${promises.length - 1 - reverseIndex})">Delete</button>` : '<small style="color:#d94370;">Locked</small>'}
    `;

    promisesList.appendChild(div);
  });

  // Scroll to newest
  const container = document.querySelector(".promises-container");
  container.scrollTop = container.scrollHeight;
}

function savePromise() {
  if (promiseInput.value.trim() === "") return;

  const now = new Date();
  const dateString = now.toLocaleString();

  const promiseObj = {
    text: promiseInput.value,
    writer: currentWriter,
    date: dateString
  };

  promises.push(promiseObj);
  localStorage.setItem("emaithPromises", JSON.stringify(promises));
  promiseInput.value = "";
  displayPromises();
}

function deletePromise(index) {
  promises.splice(index, 1);
  localStorage.setItem("emaithPromises", JSON.stringify(promises));
  displayPromises();
}

function toggleWriter() {
  currentWriter = currentWriter === "Emmy" ? "Faith" : "Emmy";
  document.getElementById("currentWriter").textContent = currentWriter;
}

// Initialize
displayPromises();
