class Weather{
    constructor(){
        console.log("👹");
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
        //console.log(navigator);
    }

    getMyLocation(){
        console.log("Getting location 🏠");
        navigator.geolocation.getCurrentPosition(position=>{
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            

        }, err =>{
            console.log(err);
        });
        // browser heeft een eigenschap geolocation die functie aanspreekt
    }

}

let app = new Weather();