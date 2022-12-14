'use strict'



// updatedAt Timestamp function
const updateTimestamp = (note) => {
    const newTimestamp = moment().valueOf();
    note.updatedAt = newTimestamp;
}

// Generate the last edited message
const generateLastEdited = (note) => `Last edited ${moment(note.updatedAt).fromNow()}`;

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

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
    noteEl.classList.add('list-item__title');
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

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        console.log('sorting alphabetically')
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        })
    }
}


const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
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


// // Sort notes refactor
// function sortNotes(notes, sortBy) {
//     switch (sortBy) {
//         case 'byEdited':
//             return notes.sort((a, b) => {
//                 let result = a.updatedAt > b.updatedAt ? -1 : -2;
//                 return result === -1 ? result : Number(a.updatedAt < b.updatedAt);
//             })
//         case 'byCreated':
//             return notes.sort((a, b) => {
//                 let result = a.createdAt > b.createdAt ? -1 : -2;
//                 return result === -1 ? result : Number(a.createdAt < b.createdAt);
//             })
//         case 'alphabetical':
//             return notes.sort((a, b) => {
//                 let result = a.title.toLowerCase() < b.title.toLowerCase() ? -1 : -2;
//                 return result === -1 ? result : Number(a.title.toLowerCase() > b.title.toLowerCase());
//             })
//         default:
//             return notes;
//     }
// }

// 'use strict'

// // Read existing notes from localStorage
// const getSavedNotes = () => {
//     const notesJSON = localStorage.getItem('notes');

// try {
//     return notesJSON ? JSON.parse(notesJSON) : [];
//     } catch (e) {
//         return []
//     }
// };

// // remove a note from the list
// const removeNote = (id) => {
//     const noteIndex = notes.findIndex((note) => note.id === id);
//     if (noteIndex >= 0) {
//         notes.splice(noteIndex, 1);
//     }
// }

// // generate the DOM structure for a note
// const generateNoteDOM = (note) => {
//     const noteEl = document.createElement('div');
//     const textEl = document.createElement('a');
//     const button = document.createElement('button');
    
//     // Setup the remove note button
//     button.textContent = 'x';
//     noteEl.appendChild(button);
//     button.addEventListener('click',() => {
//         removeNote(note.id)
//         saveNotes(notes);
//         renderNotes(notes, filters);
//     })
    
//     // Setup the note title text
//     if (note.title.length > 0) {
//         textEl.textContent = note.title;
//     } else {
//         textEl.textContent = 'Unnamed note';
//     };
//     textEl.setAttribute('href', `/edit.html#${note.id}`);
//     noteEl.appendChild(textEl);


//     return noteEl;
// };

// // Sort your notes by one of three ways
// const sortNotes = (notes, sortBy) => {
//     if (sortBy === 'byEdited') {
//         return notes.sort((a, b) => {
//             if (a.updatedAt > b.updatedAt) {
//                 return -1;
//             } else if (a.updatedAt < b.updatedAt) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else if (sortBy === 'byCreated') {
//         return notes.sort((a, b) => {
//             if (a.createdAt > b.createdAt) {
//                 return -1;
//             } else if (a.createdAt < b.createdAt) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else if (sortBy === 'alphabetical') {
//         return notes.sort((a, b) => {
//             if (a.title.toLowerCase() < b.title.toLowerCase()) {
//                 return -1;
//             } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else {
//         return notes;
//     }
// }

// // render application notes
// const renderNotes = (notes, filters) => {
//     notes = sortNotes(notes, filters.sortBy);
//     const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    
//     document.querySelector('#notes').innerHTML = '';

//     filteredNotes.forEach((note) => {
//         const noteEl = generateNoteDOM(note);
//         document.querySelector('#notes').appendChild(noteEl);
//     });
// };

// // Save notes to localStorage
// const saveNotes = (notes) => {
//     localStorage.setItem('notes', JSON.stringify(notes));
// };

// // Returns the current timestamp in milliseconds since the Unix Epoch
// const generateTimestamp = () => moment().valueOf();

// // Generate last edited message
// const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;