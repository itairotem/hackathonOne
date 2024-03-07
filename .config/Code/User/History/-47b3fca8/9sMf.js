// Function to render all notes
function renderNotes() {
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; // Clear the container before rendering

    // Loop through each note in the notes array
    notes.forEach(function(note, index) {
        // Create a note element
        var noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.setAttribute('draggable', true); // Set draggable attribute
        noteElement.style.backgroundColor = note.color;

        // Create note header
        var noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';

        // Note number
        var noteNumber = document.createElement('span');
        noteNumber.textContent = index + 1;
        noteHeader.appendChild(noteNumber);

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
        textArea.rows = Math.ceil(note.text.length / 30); // Approximate rows based on text length
        textArea.cols = 30; // Set the number of columns
        textArea.style.resize = 'none'; // Disable resizing
        textArea.addEventListener('click', function() {
            textArea.readOnly = false;
        });

        // Append elements to the note container
        noteElement.appendChild(noteHeader);
        noteElement.appendChild(textArea);

        // Append note container to the notes container
        notesContainer.appendChild(noteElement);

        // Add event listeners for drag-and-drop functionality
        noteElement.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', index);
        });

        noteElement.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        noteElement.addEventListener('drop', function(event) {
            event.preventDefault();
            var fromIndex = event.dataTransfer.getData('text/plain');
            var toIndex = index;
            // Reorder the notes array
            var movedNote = notes.splice(fromIndex, 1)[0];
            notes.splice(toIndex, 0, movedNote);
            renderNotes(); // Update the UI after reordering
        });
    });
}
