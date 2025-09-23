
function greet(name = "Friend") {
    console.log("Hello " + name);
}

greet("Shristi Kashyap");
greet();

function power(a, b = 2) {
    return a ** b;
}
console.log(power(4, 2));

function calculate(a = 5, b = a + 5) {
    return a + b;
}
console.log(calculate(2));

function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));
