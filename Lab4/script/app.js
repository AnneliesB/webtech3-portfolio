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
            console.log(lat, lng);
            this.getWeather(lat, lng, this.API_KEY);

        }, err => {
            console.log(err);
        });
        // browser heeft een eigenschap geolocation die functie aanspreekt
    }

    getWeather(lat, lng, API_KEY) {
        // AJAX CALL / XHR
        // https://api.darksky.net/forecast/a0d7e30c611f0dc709e266404cf156db/37.8267,-122.4233?units=si
        let roundedTemp = this;


        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        let now = new Date();
        let t = now.getTime();

        let oldtime = localStorage.getItem('yoga-time');
        if (oldtime) {
            // we have data
            let intOldTime = parseInt(oldtime);

            if ((intOldTime + DATATIMEOUT) < t) {
                // de tijd nu is groter dan de opgeslagen tijd + de timeout
                localStorage.setItem('yoga-time', t);

                function fetchDemo() {
                    try{
                        return fetch(url)
                        .then(response => {
                            return response.json();
                        })
                        .then(json => {
                            let temp = document.createElement("h1");
                            roundedTemp = Math.round(json.currently.temperature);
                            console.log(json.currently.temperature);
                                // roundedTemp = 49;
                                // test responsiveness naar temperatuur verandering door de let roundedTemp hardcoded te wijzigen
                                temp.innerHTML = `It is currently ${roundedTemp} °C. Time to relax!`;
                                document.querySelector(".temperatuur").appendChild(temp);
                                localStorage.setItem('current-temperature', JSON.stringify(roundedTemp));
                                return roundedTemp;
                            });
                    } catch(e){
                        console.log(e);
                    }
                }
                
                try{
                    console.log(fetchDemo());
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
                                    let temp1 = document.createElement("div");
                                    let temp2 = document.createElement("div");
                                    result = result - 1;
                                    if (result < 0 || result > 47) {
                                        result = Math.floor(Math.random() * 49);
                                            // if temperature is below 0 or above 47 show a random pose
                                        }
                                        let img = json[result].img_url;
                                        let poseName = json[result].english_name;
                                        console.log(json);
                                        temp1.innerHTML = `<img src=${img} width="100px">`;
                                        temp2.innerHTML = `${poseName}`;
                                        /* temp.innerHTML=`<img src=`; */
                                        // array nummer invullen op basis van de temperatuur
                                        document.querySelector(".yogaImg").appendChild(temp1);
                                        document.querySelector(".yogaName").appendChild(temp2);
                                        localStorage.setItem('yoga-image', JSON.stringify(img));
                                        localStorage.setItem('yoga-name', JSON.stringify(poseName));
                                    });
                            }
                        }
                        let yogaApp = new Yoga();


                    });
                } catch(e){
                    console.log(e);
                }
                
                console.log("localStorage updated");
            } else {
                // load local storage info
                console.log("localStorage is up to date");
                let tempT = document.createElement("h1");
                let storageTemperature = JSON.parse(localStorage.getItem('current-temperature'));
                tempT.innerHTML = `It is currently ${storageTemperature} °C. Time to relax!`;
                document.querySelector(".temperatuur").appendChild(tempT);

                let tempY1 = document.createElement("div");
                let tempY2 = document.createElement("div");
                let storageImage = JSON.parse(localStorage.getItem('yoga-image'));
                let storagePose = JSON.parse(localStorage.getItem('yoga-name'));
                tempY1.innerHTML = `<img src=${storageImage} width="100px">`;
                tempY2.innerHTML = `${storagePose}`;
                document.querySelector(".yogaImg").appendChild(tempY1);
                document.querySelector(".yogaName").appendChild(tempY2);
            }

        } else {
            // no data stored yet
            localStorage.setItem('yoga-time', t);

            function fetchDemo() {
                let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}?units=si`;
                return fetch(url, {
                    method: 'get'
                }).then(response => {
                    return response.json();
                }).then(json => {
                    let temp = document.createElement("h1");
                    console.log(json);
                    roundedTemp = Math.round(json.currently.temperature);
                        // roundedTemp = 49;
                        // test responsiveness naar temperatuur verandering door de let roundedTemp hardcoded te wijzigen
                        temp.innerHTML = `It is currently ${roundedTemp} °C. Time to relax!`;
                        document.querySelector(".temperatuur").appendChild(temp);
                        localStorage.setItem('current-temperature', JSON.stringify(roundedTemp));
                        return roundedTemp;
                    }).catch(err => {
                        console.log("Weather: " + err);
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
                            fetch(url, {
                                method: 'get'
                            }).then(response => {
                                return response.json();
                            }).then(json => {
                                let temp1 = document.createElement("div");
                                let temp2 = document.createElement("div");
                                result = result - 1;
                                if (result < 0 || result > 47) {
                                    result = Math.floor(Math.random() * 49);
                                        // if temperature is below 0 or above 47 show a random pose
                                    }
                                    let img = json[result].img_url;
                                    let poseName = json[result].english_name;
                                    console.log(json);
                                    temp1.innerHTML = `<img src=${img} width="100px">`;
                                    temp2.innerHTML = `${poseName}`;
                                    //temp.innerHTML=`<img src=`; 
                                    // array nummer invullen op basis van de temperatuur
                                    document.querySelector(".yogaImg").appendChild(temp1);
                                    document.querySelector(".yogaName").appendChild(temp2);
                                    localStorage.setItem('yoga-image', JSON.stringify(img));
                                    localStorage.setItem('yoga-name', JSON.stringify(poseName));
                                }).catch(err => {
                                    console.log("Weather: " + err);
                                });
                            }
                        }
                        let yogaApp = new Yoga();


                    });

                console.log("localStorage created");
            }

        }


    }

    let weatherApp = new Weather('a0d7e30c611f0dc709e266404cf156db');
// nu hebben we een soort plugin geschreven waarbij andere gebruikers het programma ook kunnen gebruiken
const DATATIMEOUT = 60000 * 60;