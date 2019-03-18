class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("👹");
        this.initialize();

    }

    initialize() {
        //this.getMyLocation();
        //console.log(navigator);
        let timmy = setInterval(this.getMyLocation(), 1000);
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
        let roundedTemp = this;
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;

        function fetchDemo() {
            return fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    let t = json.currently.time;
                    let currTemp = json.currently.temperature;
                    let temp = document.createElement("h1");
                    roundedTemp = Math.round(currTemp);
                    // roundedTemp = 49;
                    // test responsiveness naar temperatuur verandering door de let roundedTemp hardcoded te wijzigen
                    temp.innerHTML = roundedTemp;
                    document.querySelector(".temperatuur").appendChild(temp);

                    let oldTime = localStorage.getItem('weather-time');
                    if (oldTime) {
                        // we have data
                        let intOldTime = parseInt(oldTime);

                        if (oldTime + DATATIMEOUT < t) {
                            localStorage.setItem('weather-time', t);
                            let currTemps = JSON.stringify(currTemp);
                            localStorage.setItem('current-temperature', currTemps);
                            console.log("list updated");
                        } else {
                            // no update required
                            console.log("list is up to date");
                        }
                    } else {
                        localStorage.setItem('weather-time', t);
                        let currTemps = JSON.stringify(currTemp);
                        localStorage.setItem('current-temperature', currTemps);
                        console.log("list created");
                    }


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
                            let now = new Date();
                            let t = now.getTime();
                            console.log(t + "tajm");
                            let temp = document.createElement("div");
                            result = result - 1;
                            if (result < 0 || result > 47) {
                                result = Math.floor(Math.random() * 49);
                                // if temperature is below 0 or above 47 show a random pose
                            }

                            let img = json[result].img_url;
                            let poseName = json[result].english_name;
                            console.log(json);
                            temp.innerHTML = `${poseName}<img src=${img} width="100px">`;
                            /* temp.innerHTML=`<img src=`; */
                            // array nummer invullen op basis van de temperatuur
                            document.querySelector(".yoga").appendChild(temp);

                            let oldTime = localStorage.getItem('yoga-time');
                            if (oldTime) {
                                if (oldTime + DATATIMEOUT < t) {
                                    localStorage.setItem('yoga-time', t);
                                    let imgs = JSON.stringify(img);
                                    let poseNames = JSON.stringify(poseName);
                                    localStorage.setItem('yoga-image', imgs);
                                    localStorage.setItem('yoga-posename', poseNames);
                                    console.log("Yoga list updated");
                                } else {
                                    console.log("Yoga list is up to date");
                                }
                            } else {
                                localStorage.setItem('yoga-time', t);
                                let imgs = JSON.stringify(img);
                                let poseNames = JSON.stringify(poseName);
                                localStorage.setItem('yoga-image', imgs);
                                localStorage.setItem('yoga-posename', poseNames);
                                console.log("Yoga list created");
                            }

                        });
                }
            }
            let yogaApp = new Yoga();


        });
    }
}





let weatherApp = new Weather('a0d7e30c611f0dc709e266404cf156db');
// nu hebben we een soort plugin geschreven waarbij andere gebruikers het programma ook kunnen gebruiken
const DATATIMEOUT = 60;