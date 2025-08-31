// Splice in Arrays
let cars = ['audi', 'bmw', 'xuv', 'maruti'];
cars.splice(0, 1);
console.log(cars);
cars.splice(1, 2);
console.log(cars);
cars.splice(1, 0, 'toyota', 'honda');
console.log(cars);