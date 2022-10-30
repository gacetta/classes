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

console.log(`a` < `A`)

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toUpperCase() === noteTitle.toUpperCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'hAB'))

// const note = findNote(notes, 'ofFICEd moDIFication')
// console.log(note)

sortNotes(notes)
console.log(notes)