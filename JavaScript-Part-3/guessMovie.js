// Guess favorite movie
let movie = "Mai Tera Hero";
let guess = prompt("Enter your fav Movie guess");

while (guess != movie) {
    console.log("Wrong guess");
    guess = prompt("Try Again! Enter your fav Movie guess");
}
console.log("Right guess..");
