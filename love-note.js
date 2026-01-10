// EMAITHWORLD Love Notes — Fresh Script

// Function to display notes
function displayNotes() {
  const notesContainer = document.getElementById("notesContainer");
  if (!notesContainer) return;

  notesContainer.innerHTML = ""; // clear previous notes

  let notes = JSON.parse(localStorage.getItem("emaithNotes")) || [];
  const now = new Date().getTime();

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.style.border = "1px solid #ddd";
    noteDiv.style.borderRadius = "10px";
    noteDiv.style.padding = "10px";
    noteDiv.style.marginBottom = "10px";
    noteDiv.style.background = "#fff";

    // Note text with author
    const noteText = document.createElement("p");
    noteText.textContent = `${note.author}: ${note.text}`;
    noteDiv.appendChild(noteText);

    // Note date
    const noteDate = new Date(note.date);
    const dateSpan = document.createElement("span");
    dateSpan.textContent = noteDate.toLocaleDateString();
    dateSpan.style.fontSize = "12px";
    dateSpan.style.color = "#888";
    noteDiv.appendChild(dateSpan);

    // Only allow deletion if less than 30 days old
    const diffDays = Math.floor((now - note.date) / (1000 * 60 * 60 * 24));
    if (diffDays < 30) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "10px";
      delBtn.style.padding = "3px 7px";
      delBtn.style.borderRadius = "5px";
      delBtn.style.border = "none";
      delBtn.style.cursor = "pointer";
      delBtn.style.background = "#e75480";
      delBtn.style.color = "#fff";
      delBtn.onclick = () => deleteNote(index);
      noteDiv.appendChild(delBtn);
    }

    notesContainer.appendChild(noteDiv);
  });
}

// Function to add a new note
function addNote(text, author) {
  if (!text || !author) return;

  let notes = JSON.parse(localStorage.getItem("emaithNotes")) || [];
  const newNote = {
    text: text,
    author: author,
    date: new Date().getTime() // timestamp
  };

  notes.push(newNote);
  localStorage.setItem("emaithNotes", JSON.stringify(notes));
  displayNotes();
}

// Function to delete a note
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("emaithNotes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("emaithNotes", JSON.stringify(notes));
  displayNotes();
}

// Initialize notes and form on page load
document.addEventListener("DOMContentLoaded", () => {
  displayNotes();

  const form = document.getElementById("noteForm");
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();

    const textInput = document.getElementById("noteText");
    const authorInput = document.getElementById("noteAuthor");

    if (!textInput.value || !authorInput.value) return;

    addNote(textInput.value, authorInput.value);
    textInput.value = ""; // clear after saving
  };
});
