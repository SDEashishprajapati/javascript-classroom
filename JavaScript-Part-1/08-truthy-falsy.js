
// Truthy and Falsy values
let values = [0, 1, "", "hello", null, undefined, NaN, [], {}];

values.forEach(val => {
    if (val) {
        console.log(val, "is truthy");
    } else {
        console.log(val, "is falsy");
    }
});
