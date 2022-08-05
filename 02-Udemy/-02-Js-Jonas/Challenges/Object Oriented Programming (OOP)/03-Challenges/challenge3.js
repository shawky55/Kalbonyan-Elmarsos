const CAR3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
CAR3.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
CAR3.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  CAR3.call(this, make, speed);
  this.charge = charge;
};
// Link the prototypes
EV.prototype = Object.create(CAR3.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make}  going  ${this.speed} km/h, with charge of ${this.charge}`
  );
};
const tesla = new EV('BMW', 100, 33);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
