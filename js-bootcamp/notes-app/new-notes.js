
// Query and remove
// const p = document.querySelector('p');
// p.remove();

//Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.textContent = '******';
    // console.log(p.textContent);
    // p.remove();
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