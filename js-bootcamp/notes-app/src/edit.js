import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleInput = document.querySelector('#note-title');
const dateEl = document.querySelector('#last-edited');
const bodyInput = document.querySelector('#note-body');
const removeButton = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

// Title input Event
titleInput.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

// Body input event
bodyInput.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

// Remove note event
removeButton.addEventListener('click', () => {
    removeNote(noteId);
    location.assign('/index.html');
})

// Data Sync Across Pages
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initializeEditPage();
  } 
})