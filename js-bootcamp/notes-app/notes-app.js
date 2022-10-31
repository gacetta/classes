const notes = [{
    title: `my next trip`,
    body: `I would like to go to New Zealand`
}, {
    title: `Habits to work on`,
    body: `Learn to code`
}, {
    title: `Office modification`,
    body: `Get a new lamp`
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const newNote = document.createElement('p');
        newNote.textContent = note.title;
        document.querySelector('#notes').appendChild(newNote);
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    e.target.textContent = "you done clicked me";
})

document.querySelector('#remove-all').addEventListener('click', (e) => {
    document.querySelectorAll('.note').forEach((note) => {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})



// 'use strict'

// let notes = getSavedNotes();

// const filters = {
//     searchText: '',
//     sortBy: 'byEdited'
// };

// renderNotes(notes, filters);

// document.querySelector('#create-note').addEventListener('click', (e) => {
//     e.target.textContent = 'you done did it.  you pressed the Button.';
//     const id = uuidv4();
//     notes.push({
//         id: id,
//         title: '',
//         body: '',
//         createdAt: generateTimestamp(),
//         updatedAt: generateTimestamp()
//     });
//     saveNotes(notes);
//     location.assign(`edit.html#${id}`);
// })

// document.querySelector('#search-text').addEventListener('input', (e) => {
//     filters.searchText = e.target.value;
//     renderNotes(notes, filters);
// })

// document.querySelector('#filter-by').addEventListener('change', (e) => {
//     filters.sortBy = e.target.value;
//     renderNotes(notes, filters);
// })

// window.addEventListener('storage', (e) => {
//     if (e.key === 'notes') {
//         notes = JSON.parse(e.newValue);
//         renderNotes(notes, filters);
//     }
// })

// // 1. createdAt and updatedAt to the new notes (store timestamp)
// // 2. Update updatedAt when someone edits a title or body
// // 3. Delete all old notes before testing