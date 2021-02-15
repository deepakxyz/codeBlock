// Selector
const noteInput = document.querySelector("#note-add-input");
const noteBtn = document.querySelector("#note-add-btn");
const noteList = document.querySelector(".note-list");


// Event listners
document.addEventListener('DOMContentLoaded',createNotes);
noteBtn.addEventListener('click', addNote);
noteList.addEventListener('click', deleteNote);


function addNote(e){
    e.preventDefault();
    saveLocalNotes(noteInput.value);
    // delete exisiting element.
    noteList.replaceChildren();
    createNotes();
}


// Save local
function saveLocalNotes(note){
    let notes;
    if(localStorage.getItem('notes') === null){
        notes = [];
    }else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Create notes from local storage
function createNotes(){
    
    notes = JSON.parse(localStorage.getItem('notes'));
    
    notes.forEach(function(note){
        if(note.startsWith('http')){
            let splitW = note.split(' ');
            let url = splitW[0];
            let wordNote_list = splitW.slice(1);
            let wordNote = wordNote_list.join(" ");
             
            // Create DIV
            const noteDiv = document.createElement('div');
            noteDiv.classList.add("note-element");

            // Create LI
            const newNote =document.createElement('li');
            newNote.classList.add('note-item');
            noteDiv.appendChild(newNote);

            // Create A
            const newA = document.createElement('a');
            newA.classList.add('note-a');
            newA.innerText =capitalizeFirstLetter(wordNote); 
            newA.href = url;
            newNote.appendChild(newA);

            // DELETE BUTTON
            const delButton = document.createElement('button');
            delButton.innerText ='x';
            delButton.classList.add('del-note');
            noteDiv.appendChild(delButton)

            // Append to List
            noteList.appendChild(noteDiv);

        } else {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add("note-element");

            // Create LI
            const newNote = document.createElement('li');
            newNote.innerText =capitalizeFirstLetter(note); 
            newNote.classList.add('note-item');
            noteDiv.appendChild(newNote);

            // DELETE BUTTON
            const delButton = document.createElement('button');
            delButton.innerText ='x';
            delButton.classList.add('del-note');
            noteDiv.appendChild(delButton);

            // APPEND TO LIST
            noteList.appendChild(noteDiv);

        }
        
        // Clear Note input Value
        noteInput.value = "";


    })
}

function deleteNote(e){
    const item = e.target;
    if(item.classList[0] === "del-note"){
        const note = item.parentElement;
        removeLocalNotes(note);
        note.remove();
    }
}

function removeLocalNotes(note){
    notes = JSON.parse(localStorage.getItem('notes'));
    const noteValue = note.children[0].innerText;
    notes.splice(notes.indexOf(noteValue),1);
    localStorage.setItem("notes",JSON.stringify(notes)); 
}




// ------------------------------------------------------------------
// UTIL FUNCTIONS

//capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
