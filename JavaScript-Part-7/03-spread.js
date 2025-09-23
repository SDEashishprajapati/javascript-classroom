let numbersArray = [10, 20, 30, 40];
let copyArray = [...numbersArray];
console.log(copyArray);

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
console.log(...arrA, ...arrB);

function multiply(a, b, c) {
    return a * b * c;
}
let numbersMultiply = [2, 4, 6];
console.log(multiply(...numbersMultiply));

let objOriginal = { a: 1, b: 2 };
let objNew = { ...objOriginal, b: 3, c: 4 };
console.log(objNew);
