// forEach
let numbersForEach = [5, 10, 15];
numbersForEach.forEach(el => console.log(el * 3));


//  map
let numbersMap = [1, 4, 9];
let squaredNumbers = numbersMap.map(el => el * el);
console.log(squaredNumbers);


//  filter
let numbersFilter = [7, 12, 18, 5, 22];
let filteredNumbers = numbersFilter.filter(el => el > 10);
console.log(filteredNumbers);


//  reduce
let numbersReduce = [2, 3, 4];
let productReduce = numbersReduce.reduce((acc, el) => acc * el, 1);
console.log(productReduce);


// every
let numbersEvery = [5, -2, 7];
let allPositive = numbersEvery.every(el => el > 0);
console.log(allPositive);


// some
let numbersSome = [3, 8, 12, 15];
let divisibleByFive = numbersSome.some(el => el % 5 === 0);
console.log(divisibleByFive);




