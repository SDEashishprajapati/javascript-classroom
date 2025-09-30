// ===== Q1: Create Input and Button =====
let body = document.body;

let input = document.createElement("input");
input.type = "text";
input.setAttribute("placeholder", "username");

let btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.setAttribute("id", "btn");

body.append(input, btn);

// ===== Q2: Change Button Style =====
let button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";

// ===== Q3: Create H1 =====
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "underline";
body.append(h1);

// ===== Q4: Create P with Bold Text =====
let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(para);
