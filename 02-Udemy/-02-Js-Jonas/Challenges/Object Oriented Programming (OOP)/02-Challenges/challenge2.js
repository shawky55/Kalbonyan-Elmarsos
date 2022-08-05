class CAR2 {
    constructor(speed, make) {
        this.make = make;
        this.speedUS = speed;
    }
    set speedUS(make) {
        //get speed in mile/h now in "make"
        this.speedinKm = make * 1.6;
    }
    get speedUS() {
        console.log((this.speedinKm / 1.6), "m/h")
    }

    increase() {
        this.speedinKm += (10 * 1.6);
        return this.speedinKm;
    }
    decrease() {
        if (this.speedinKm == 0 || this.speedinKm < 0) {
            console.log("car  already stopped");
            return 0;
        } else if (this.speed <= 5) {
            console.log("car now become slow and stooped");
            return 0;
        } else {
            this.speedinKm -= (5 * 1.6);
            return this.speed;
        }

    }
}
//this take (Mile/make)
let jeep = new CAR2(100, "jeep");
// jeep.speedUS //how can setter and getters with same name
jeep.speedUS
    //increse car speed 10 miles not km
jeep.increase()
console.log(jeep.speedinKm)