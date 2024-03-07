// Define an array to store notes
let notes = [];

// Function to add a new note
function addNote() {
    let noteTitleInput = document.getElementById('noteTitleInput');
    let noteInput = document.getElementById('noteInput');
    let noteText = noteInput.value.trim();
    let colorSelector = document.getElementById('colorSelector');
    let noteColor = colorSelector.value;
    let noteDateInput = document.getElementById('noteDateInput');
    let noteDate = noteDateInput.value;

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

// Function to render all notes
function renderNotes() {
    let notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; 

    // Loop through each note in the notes array
    notes.forEach(function(note, index) {
        // Create a note element
        let noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.backgroundColor = note.color;

        // Create note header
        let noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';

        // Title input field
        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = note.title || ''; // Set title value if it exists
        titleInput.placeholder = 'Enter title...';
        titleInput.addEventListener('change', function() {
            note.title = titleInput.value; // Update note object with the new title
        });
        noteHeader.appendChild(titleInput);

        // Countdown display
        let countdown = document.createElement('div');
        countdown.className = 'countdown';
        let countdownDate = new Date(note.date).getTime();
        let now = new Date().getTime();
        let distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.textContent = 'Days left: ' + days;
        noteHeader.appendChild(countdown);

        // Note options
        let noteOptions = document.createElement('div');
        noteOptions.className = 'note-options';

        // Delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.style.backgroundColor = note.color; // Set background color
        deleteButton.style.color = '#000'; // Set text color to black
        deleteButton.onclick = function() { deleteNote(index); };
        noteOptions.appendChild(deleteButton);

        noteHeader.appendChild(noteOptions);

        // Create text area for the note text
        let textArea = document.createElement('textarea');
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
