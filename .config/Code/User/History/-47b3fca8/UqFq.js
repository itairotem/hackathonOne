// Define an array to store notes
var notes = [];

// Function to add a new note
function addNote() {
    var noteTitleInput = document.getElementById('noteTitleInput'); // Get note title input element
    var noteInput = document.getElementById('noteInput');
    var noteText = noteInput.value.trim();
    var colorSelector = document.getElementById('colorSelector');
    var noteColor = colorSelector.value;

    if (noteText !== '') {
        // Push the new note into the notes array
        notes.push({
            title: noteTitleInput.value.trim(), // Store note title
            text: noteText,
            color: noteColor
        });
        renderNotes(); // Update the UI to reflect the changes
        noteTitleInput.value = ''; // Clear the title input field
        noteInput.value = ''; // Clear the note input field
    } else {
        alert('Please enter a note!');
    }
}

// Function to render all notes
function renderNotes() {
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; // Clear the container before rendering

    // Loop through each note in the notes array
    notes.forEach(function(note, index) {
        // Create a note element
        var noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.backgroundColor = note.color;

        // Create note header
        var noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';

        // Title input field
        var titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = note.title || ''; // Set title value if it exists
        titleInput.placeholder = 'Enter title...';
        titleInput.addEventListener('change', function() {
            note.title = titleInput.value; // Update note object with the new title
        });
        noteHeader.appendChild(titleInput);

        // Note options
        var noteOptions = document.createElement('div');
        noteOptions.className = 'note-options';

        // Delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.style.backgroundColor = note.color; // Set background color
        deleteButton.style.color = '#000'; // Set text color to black
        deleteButton.onclick = function() { deleteNote(index); };
        noteOptions.appendChild(deleteButton);

        noteHeader.appendChild(noteOptions);

        // Create text area for the note text
        var textArea = document.createElement('textarea');
        textArea.value = note.text;
        textArea.readOnly = true; // Set readOnly attribute initially
        textArea.style.width = '100%'; // Set width to 100% to prevent resizing horizontally
        textArea.style.height = '100px'; // Set fixed height
        textArea.style.resize = 'none'; // Disable resizing
        textArea.addEventListener('click', function() {
            textArea.readOnly = false;
        });
        // Append elements to the note container
        noteElement.appendChild(noteHeader);
        noteElement.appendChild(textArea);

        // Append note container to the notes container
        notesContainer.appendChild(noteElement);
    });
}

// Function to delete a note
function deleteNote(index) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes.splice(index, 1); // Remove the note from the array
        renderNotes(); // Update the UI after deleting
    }
}

// Initial rendering of notes
renderNotes();
