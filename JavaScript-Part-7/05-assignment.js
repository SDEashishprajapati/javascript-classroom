
let numbersAssignment = [1, 2, 3, 4, 5];
let squaredNumbersAssignment = numbersAssignment.map(el => el * el);
let sumSquares = squaredNumbersAssignment.reduce((acc, el) => acc + el, 0);
let averageSquares = sumSquares / numbersAssignment.length;
console.log(averageSquares);

let numbersAdd5 = [2, 3, 4, 5];
let addedNumbers = numbersAdd5.map(el => el + 5);
console.log(addedNumbers);
