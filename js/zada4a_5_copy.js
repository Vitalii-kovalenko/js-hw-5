class Car {
  // Write code under this line

 constructor(obj){
        this.maxSpeed = obj.maxSpeed;
         this.speed = 0;
          this._price = obj.price;
          this.isOn = false;
          this.distance = 0;
 
 }
 getSpecs(Car){
  return (`maxSpeed: ${Car.maxSpeed}, speed: ${Car.speed}, isOn: ${Car.isOn}, distance: ${Car.distance}, price: ${Car._price} `);
  }
 get price() {
   return this._price;
 }
 set price(value) {
   this._price = value;
 }
 turnOn() {
    this.isOn = true;
 }
 turnOff() {
       this.isOn = false;
        this.speed = 0;
 }
 accelerate(value) {
 if (this.maxSpeed >= (this.speed + value)){
   this.speed += value;
 }else{
     this.speed = this.maxSpeed;
 }
 }
 decelerate(value) {
    if (0 < (this.speed - value)){
       this.speed -= value;
      }else{
        this.speed = 0;
      }
 }
 drive(hours) {
   if (this.isOn) {
            this.distance =this.distance + this.speed * hours;
        }
 }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
