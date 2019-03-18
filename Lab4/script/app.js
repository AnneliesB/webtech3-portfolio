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
        let roundedTemp = this;


        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;

        function fetchDemo() {
            return fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    let temp = document.createElement("h1");
                    roundedTemp = Math.round(json.currently.temperature);
                    roundedTemp = 49;
                    // test responsiveness naar temperatuur verandering door de let roundedTemp hardcoded te wijzigen
                    temp.innerHTML = roundedTemp;
                    document.querySelector(".temperatuur").appendChild(temp);
                    console.log(roundedTemp + " in de fetch");

                    return roundedTemp;
                });
        }

        fetchDemo().then(result => {
            console.log(result + "test");

            class Yoga {
                constructor() {
                    this.initialize();
                }

                initialize() {
                    this.getYogaPose();
                }

                getYogaPose() {
                    let url = `https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json`;
                    fetch(url)
                        .then(response => {
                            return response.json();
                        })
                        .then(json => {
                            let temp = document.createElement("div");
                            result = result - 1;
                            if (result < 0 || result > 47) {
                                result = Math.floor(Math.random() * 49);
                                // if temperature is below 0 show a random pose
                            }
                            let img = json[result].img_url;
                            let poseName = json[result].english_name;
                            console.log(json);
                            temp.innerHTML = `${poseName}<img src=${img} width="100px">`;
                            /* temp.innerHTML=`<img src=`; */
                            // array nummer invullen op basis van de temperatuur
                            document.querySelector(".yoga").appendChild(temp);

                        });
                }
            }
            let yogaApp = new Yoga();


        });
        /* fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let temp = document.createElement("h1");
                roundedTemp = Math.round(json.currently.temperature);
                temp.innerHTML = roundedTemp;
                document.querySelector(".temperatuur").appendChild(temp);  
                console.log(roundedTemp + " in de fetch");
                return roundedTemp;
            });
            console.log(this.roundedTemp + " uit de fetch in getWeather") */
    }
}





let weatherApp = new Weather('a0d7e30c611f0dc709e266404cf156db');
// nu hebben we een soort plugin geschreven waarbij andere gebruikers het programma ook kunnen gebruiken