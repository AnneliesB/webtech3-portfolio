class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div');
    // a.addEventListener('click', this.remove.bind(newNote));
    newNote.innerHTML = `<p>${title}</p><a href="#" class="card-remove">Remove</a>`
    newNote.classList.add("card");

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
    let data = JSON.parse(localStorage.getItem('note'));
    if(data == null){
      data = [];
    } 
    data.push(this.title);
    localStorage.setItem('note', JSON.stringify(data));

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
    // pressing the enter key should also work
    this.btnAdd = document.querySelector('#btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.txtAdd = document.querySelector('#txtAddNote');
    this.txtAdd.addEventListener("keydown", e => {
      var key = e.keyCode;
      if (key === 13) {
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
    const notesArr = JSON.parse(localStorage.getItem('note'));
    if (notesArr != null) {
      if (notesArr.length > 0) {
        notesArr.forEach(item => {
          let note = new Note(item);
          note.add();
        });
      } 
    }
  }

  createNote(e) {
    // this function should create a new note by using the Note() class

    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
    let message = document.querySelector("#txtAddNote").value;
    let note = new Note(message);
    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset() {
    // this function should reset the form 
    document.querySelector("#txtAddNote").value = "";
  }

}
let app = new App();