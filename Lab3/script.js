let i = 0;
class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div');
    newNote.innerHTML = `<p>${title}</p><a href="#" class="card-remove">Remove</a>`;
    newNote.classList.add("card");
    // HINT🤩 
    //a.addEventListener('click', this.remove.bind(newNote));
   
    let myPromise = new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        let a = document.getElementsByTagName("a");
        // voert functie remove uit om de note te animeren en van scherm te verwijderen
        a[i].addEventListener('click', this.remove.bind(newNote));
        // aparte functie om nota na het verwijderen van scherm te verwijderen uit localStorage
        a[i].addEventListener('click', this.deleteNoteFromStorage.bind(title));
        i++;
        
      }, 1000);
  });

    return newNote;

  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow

    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let data = JSON.parse(localStorage.getItem('items'));

    /*if(data == null){
      data = [];
    }
    data.push(this.title);
    localStorage.setItem('items', JSON.stringify(data)); */


    if (data != null) {
      data.push(this.title);
      localStorage.setItem('items', JSON.stringify(data));
    } else {
      data = [];
      data.push(this.title);
      localStorage.setItem('items', JSON.stringify(data));
    }
  }

  remove() {
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
      let selectedNote = this;
      
      setTimeout( () =>{
        selectedNote.style.display = "none";
      }, 400);
  }

  deleteNoteFromStorage(title){
    // storage ophalen
    let data = JSON.parse(localStorage.getItem('items'));
    // zoeken welke note geklikt is dmv index en meegegeven titel
    let clicked = data.indexOf(this);
    // op basis van de index het geselecteerde element uit de array van data verwijderen
    // de index is steeds een cijfer minder dan de echte positie omdat arrays vanaf 0 beginnen tellen
    // om dus bv het tweede element [een = 0, twee = 1] te kunnen verwijderen vinden we de array index van dat tweede element
    // de array index zal 1 zijn
    // de splice zal het element dat op de index 1 + 1 plaats staat verwijderen
    data.splice(clicked, 1);
    // de localStorage word geupdate na het verwijderen van het geklikte element
    localStorage.setItem('items', JSON.stringify(data));
  }
  
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.input = document.querySelector("#txtAddNote");
    // pressing the enter key should also work

    this.input.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.createNote();
      }
    });

    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    const data = JSON.parse(localStorage.getItem('items'));
    if (data != null) {
      if (data.length > 0) {
        data.forEach(item => {
          let note = new Note(item);
          note.add();
        });
      }
    }
  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    let noteTitle = document.querySelector("#txtAddNote").value;
    let newnote = new Note(noteTitle);


    //titel van de note ga je moeten halen uit het invulveld dat je hebt in de site

    // HINT🤩
    newnote.add();
    newnote.saveToStorage();
    this.reset();
  }

  reset() {
    // this function should reset the form 
    document.querySelector("#txtAddNote").value = "";
  }

}

let app = new App();