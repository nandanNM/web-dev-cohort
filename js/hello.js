function printChai() {
  console.log("Chai");
}
printChai();

const car = {
  brand: "Toyota",
  color: "red",
  start: function () {
    console.log("Engine started");
  },
};

const myCar = Object.create(car);
myCar.year = 2020;

console.log(myCar.brand); // Toyota
myCar.start(); // Engine started

const car = {
  brand: "Toyota",
  color: "red",
  start: function () {
    console.log("Engine started");
  },
};
const myCar = Object.create(car);
myCar.year = 2020;

console.log(myCar.toString()); // [object Object]
