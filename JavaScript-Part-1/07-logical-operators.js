
// Logical operators
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Eligible to drive");
} else {
    console.log("Not eligible to drive");
}

let isStudent = false;
if (age < 18 || isStudent) {
    console.log("Discount available");
} else {
    console.log("No discount");
}
