// Define an array to store notes
var notes = [];

function addNote() {
    var noteTitleInput = document.getElementById('noteTitleInput');
    var noteInput = document.getElementById('noteInput');
    var noteText = noteInput.value.trim();
    var colorSelector = document.getElementById('colorSelector');
    var noteColor = colorSelector.value;
    var noteDateInput = document.getElementById('noteDateInput');
    var noteDate = noteDateInput.value;

    if (noteText !== '') {
        notes.push({
            title: noteTitleInput.value.trim(),
            text: noteText,
            color: noteColor,
            date: noteDate // Store the selected date in the note object
        });
        renderNotes();
        noteTitleInput.value = '';
        noteInput.value = '';
        noteDateInput.value = ''; // Clear the date input field
    } else {
        alert('Please enter a note!');
    }
}

function renderNotes() {
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';

    notes.forEach(function(note) {
        var noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.backgroundColor = note.color;

        var noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';

        var titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = note.title || '';
        titleInput.placeholder = 'Enter title...';
        titleInput.addEventListener('change', function() {
            note.title = titleInput.value;
        });
        noteHeader.appendChild(titleInput);

        var noteOptions = document.createElement('div

// Function to delete a note
function deleteNote(index) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes.splice(index, 1); // Remove the note from the array
        renderNotes(); // Update the UI after deleting
    }
}

// Initial rendering of notes
renderNotes();
