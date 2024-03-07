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
        noteElement.draggable = true; // Make the note draggable

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

        // Add event listeners for drag and drop
        noteElement.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', index);
        });

        noteElement.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        noteElement.addEventListener('drop', function(event) {
            event.preventDefault();
            var draggedIndex = event.dataTransfer.getData('text/plain');
            if (draggedIndex !== '' && draggedIndex !== index) {
                var temp = notes[index];
                notes[index] = notes[draggedIndex];
                notes[draggedIndex] = temp;
                renderNotes();
            }
        });
    });
}
