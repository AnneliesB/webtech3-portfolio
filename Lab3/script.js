let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div');
    this.title = title;

    newNote.innerHTML = `<p>${this.title}</p><a href="#" class="card-remove">Remove</a>`;
    newNote.classList.add("card");
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    console.log(this.element);
    document.querySelector(".notes").appendChild(this.element);

  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    itemsArray.push(this.title);
    console.log(itemsArray + " hier");
    localStorage.setItem('items', JSON.stringify(itemsArray));
  }

  remove() {
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
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
    if (data.length > 0) {
      data.forEach(item => {
        let note  = new Note(item);
        console.log(item + " item");
        note.add();
      });
    }
  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    let noteTitle = document.querySelector("#txtAddNote").value;
    let newnote = new Note(noteTitle);

    console.log(noteTitle);
    //titel van de note ga je moeten halen uit het invulveld dat je hebt in de site
    console.log("klik");
    // HINT🤩
    newnote.add();
    newnote.saveToStorage();
    // this.reset();
  }

  reset() {
    // this function should reset the form 
  }

}

let app = new App();