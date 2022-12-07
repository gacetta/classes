import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views'

renderNotes();

// Event Listener for Create Note Button
document.querySelector('#create-note').addEventListener('click', () => {
    const id = createNote()
    location.assign(`/edit.html#${id}`);
})

// Event listener for sort-by dropdown
document.querySelector('#filtered-by').addEventListener('change', (e) => {
    setFilters({
      sortBy: e.target.value,
    })
    renderNotes();
})

// Event listener for filter notes input
document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value,
  })
    renderNotes();
})

// Event listener for storage update
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes();
    }
})