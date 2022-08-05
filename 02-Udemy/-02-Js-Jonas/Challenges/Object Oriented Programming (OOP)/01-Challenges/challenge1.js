const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
    Car.prototype.increase = function() {
        this.speed += 10;
        return this.speed;
    }
    Car.prototype.decrease = function() {
        if (this.speed == 0 || this.speed < 0) {
            console.log("car  already stopped");
            return 0;
        } else if (this.speed <= 5) {
            console.log("car now become slow and stooped");
            return 0;
        } else {
            this.speed -= 5;
            return this.speed;
        }

    }

}

let bmw = new Car("BMW", 500);
bmw.increase();
bmw.increase();
let merceds = new Car("merceds", -8);

console.log(merceds.decrease());