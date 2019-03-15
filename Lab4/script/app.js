class Weather {
    constructor() {
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

    getWeather(){
        
    }

}

let app = new Weather();