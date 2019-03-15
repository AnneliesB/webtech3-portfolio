class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("👹");
        this.initialize();

    }

    initialize() {
        this.getMyLocation();
        //console.log(navigator);
    }

    getMyLocation() {
        console.log("Getting location 🏠");
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);

        }, err => {
            console.log(err);
        });
        // browser heeft een eigenschap geolocation die functie aanspreekt
    }

    getWeather(lat, lng) {
        // AJAX CALL / XHR
        // https://api.darksky.net/forecast/a0d7e30c611f0dc709e266404cf156db/37.8267,-122.4233?units=si

        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let temp = document.createElement("h1");
                temp.innerHTML = json.currently.summary;
                document.querySelector("body").appendChild(temp);
            });
    }
}

class Yoga {
    constructor(){
        this.initialize();
    }

    initialize(){
        
    }
}

let app = new Weather('a0d7e30c611f0dc709e266404cf156db');
// nu hebben we een soort plugin geschreven waarbij andere gebruikers het programma ook kunnen gebruiken