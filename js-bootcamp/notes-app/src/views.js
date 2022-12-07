import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure for a note
const generateNote = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p');

  // Setup the note title text
  if (note.title.length > 0) {
      textEl.textContent = note.title;
  } else {
      textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add('list-item__title');
  noteEl.append(textEl);
  
  // setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.classList.add('list-item');
  
  //setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  noteEl.classList.add('list-item__subtitle');
  noteEl.append(statusEl)

  return noteEl;
}

// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes');
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  
  notesEl.innerHTML = '';
  
  if (filteredNotes.length > 0) {
      filteredNotes.forEach((note) => {
          const newNote = generateNote(note)
          notesEl.appendChild(newNote);
      })
  } else {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'No notes to show';
      emptyMessage.classList.add('empty-message');
      notesEl.append(emptyMessage);
  }
}

const initializeEditPage = (noteId) => {
  const titleInput = document.querySelector('#note-title');
  const dateEl = document.querySelector('#last-edited');
  const bodyInput = document.querySelector('#note-body');
  const notes = getNotes();
  const note = notes.find((note) => note.id === noteId);

  if (!note) {
      location.assign('/index.html')
  }

  titleInput.value = note.title;
  bodyInput.value = note.body;
  dateEl.textContent = generateLastEdited(note);
}

// Generate the last edited message
const generateLastEdited = (note) => `Last edited ${moment(note.updatedAt).fromNow()}`;

export { generateNote, renderNotes, generateLastEdited, initializeEditPage }