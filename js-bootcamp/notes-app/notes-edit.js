'use strict'

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const id = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === id);

if (!note) {
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = generateTimestamp();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = generateTimestamp();
    saveNotes(notes);
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find((note) => note.id === id);

        if (!note) {
            location.assign('/index.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
})