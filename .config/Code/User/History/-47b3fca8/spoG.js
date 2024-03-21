let notes = [];

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
            date: noteDate 
        });
        renderNotes();
        noteTitleInput.value = '';
        noteInput.value = '';
        noteDateInput.value = '';
    } else {
        alert('Please enter a note!');
    }
}

function renderNotes() {
    let notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; 

    notes.forEach(function(note, index) {

        let noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.style.backgroundColor = note.color;

        let noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';

        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = note.title || '';
        titleInput.placeholder = 'Enter title...';
        titleInput.addEventListener('change', function() {
            note.title = titleInput.value; 
        });
        noteHeader.appendChild(titleInput);

        let countdown = document.createElement('div');
        countdown.className = 'countdown';
        let countdownDate = new Date(note.date).getTime();
        let now = new Date().getTime();
        let distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.textContent = 'Days left: ' + days;
        noteHeader.appendChild(countdown);

        let noteOptions = document.createElement('div');
        noteOptions.className = 'note-options';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.style.backgroundColor = note.color; 
        deleteButton.style.color = '#000'; 
        deleteButton.onclick = function() { deleteNote(index); };
        noteOptions.appendChild(deleteButton);

        noteHeader.appendChild(noteOptions);

        let textArea = document.createElement('textarea');
        textArea.value = note.text;
        textArea.readOnly = true;
        textArea.style.width = '100%';
        textArea.style.height = '100px';
        textArea.style.resize = 'none'; 
        textArea.addEventListener('click', function() {
            textArea.readOnly = false;
        });

        noteElement.appendChild(noteHeader);
        noteElement.appendChild(textArea);

        notesContainer.appendChild(noteElement);
    });
}


function deleteNote(index) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes.splice(index, 1);
        renderNotes(); 
    }
}

// Function to add a subject
function addSubject() {
    var subjectInput = document.getElementById('subjectInput');
    var subjectName = subjectInput.value.trim();

    if (subjectName !== '') {
        // Check if the subject already exists
        if (!subjects.includes(subjectName)) {
            subjects.push(subjectName);
            renderSubjects();
        } else {
            alert('Subject already exists!');
        }
        subjectInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a subject!');
    }
}

// Function to render subjects in the sidebar
function renderSubjects() {
    var subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = ''; // Clear the list before rendering

    subjects.forEach(function(subject) {
        var listItem = document.createElement('li');
        listItem.textContent = subject;
        listItem.onclick = function() {
            // Add a note to the selected subject
            addNoteToSubject(subject);
        };
        subjectList.appendChild(listItem);
    });
}

// Function to add a note to a specific subject
function addNoteToSubject(subject) {
    // You can implement this function based on your requirements.
    // For example, you could open a modal to add a note to the selected subject.
    // Or you could dynamically update the UI to allow adding notes to the selected subject directly in the sidebar.
}

// Initial rendering of subjects
renderSubjects();

renderNotes();
