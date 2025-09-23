function multiplyAllNumbers(...numsRest) {
    return numsRest.reduce((acc, el) => acc * el, 1);
}
console.log(multiplyAllNumbers(2, 5, 4, 10));

function greetPeople(firstName, ...otherNames) {
    console.log("Hello " + firstName);
    console.log("Other names: ", otherNames);
}
greetPeople("Ashish", "Rohan", "Priya");

let numbersDestructure = [10, 20, 30, 40, 50];
let [firstNum, secondNum, ...restNums] = numbersDestructure;
console.log(restNums);
