"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var i = 0;

var Note = function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var _this = this;

      var newNote = document.createElement('div');
      newNote.innerHTML = "<p>" + title + "</p><a href=\"#\" class=\"card-remove\">Remove</a>";
      newNote.classList.add("card");
      // HINT🤩 

      var myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          var a = document.getElementsByTagName("a");
          // voert functie remove uit om de note te animeren en van scherm te verwijderen
          // bind bind de functie aan de note dat op dat moment geselecteerd is
          // zo wordt de functie enkel op dat element uitgevoerd
          a[i].addEventListener('click', _this.remove.bind(newNote));
          // aparte functie om nota na het verwijderen van scherm te verwijderen uit localStorage + titel huidige note meegeven
          a[i].addEventListener('click', _this.deleteNoteFromStorage.bind(title));
          // teller gaat omhoog om over de indexen te loopen
          i++;
        }, 1000);
      });

      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").appendChild(this.element);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      var data = JSON.parse(localStorage.getItem('items'));

      if (data != null) {
        data.push(this.title);
        localStorage.setItem('items', JSON.stringify(data));
      } else {
        data = [];
        data.push(this.title);
        localStorage.setItem('items', JSON.stringify(data));
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      var selectedNote = this;
      // animatie klassen meegeven, card classe inclusief anders wordt deze classe verwijderd
      selectedNote.setAttribute("class", "card animated slideOutLeft");
      setTimeout(function () {
        // lege plaats van de nota laten verdwijnen zodat andere notas kunnen aansluiten
        selectedNote.style.display = "none";
      }, 500);
    }
  }, {
    key: "deleteNoteFromStorage",
    value: function deleteNoteFromStorage(title) {
      // storage ophalen
      var data = JSON.parse(localStorage.getItem('items'));
      // zoeken welke note geklikt is dmv index en meegegeven titel
      var clicked = data.indexOf(this);
      // op basis van de index het geselecteerde element uit de array van data verwijderen
      // de index is steeds een cijfer minder dan de echte positie omdat arrays vanaf 0 beginnen tellen
      // om dus bv het tweede element [een = 0, twee = 1] te kunnen verwijderen vinden we de array index van dat tweede element
      // de array index zal 1 zijn
      // de splice zal het element dat op de index 1 + 1 plaats staat verwijderen
      data.splice(clicked, 1);
      // de localStorage word geupdate na het verwijderen van het geklikte element
      localStorage.setItem('items', JSON.stringify(data));
    }
  }]);

  return Note;
}();

var App = function () {
  function App() {
    var _this2 = this;

    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.input = document.querySelector("#txtAddNote");
    // pressing the enter key should also work

    this.input.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        _this2.createNote();
      }
    });

    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      var data = JSON.parse(localStorage.getItem('items'));
      if (data != null) {
        if (data.length > 0) {
          data.forEach(function (item) {
            var note = new Note(item);
            note.add();
          });
        }
      }
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      // this function should create a new note by using the Note() class
      var noteTitle = document.querySelector("#txtAddNote").value;
      var newnote = new Note(noteTitle);

      //titel van de note ga je moeten halen uit het invulveld dat je hebt in de site

      // HINT🤩
      newnote.add();
      newnote.saveToStorage();
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form 
      document.querySelector("#txtAddNote").value = "";
    }
  }]);

  return App;
}();

var app = new App();