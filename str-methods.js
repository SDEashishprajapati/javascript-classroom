let str = " Apna College "
let str2 = str.trim().toLowerCase()
console.log(str2);

let str3 = "javaScript"
console.log(str3.slice(4,7));
let str4 = "This is a bad day."
let str5 = str4.replace("bad","good");
console.log(str5);
let str6 = "Hi "
let str7 = str6.repeat(5);
console.log(str7);
let str8 = " Hello World "
console.log(str8.indexOf("o"));
console.log(str8.trim().toUpperCase().slice(0,5));

let fruits = ["mango", "apple", "banana","orange","papaya"];
fruits.push("grapes");
fruits.unshift("pinapple");
console.log(fruits);
fruits.pop();
console.log(fruits);

let cars = ["audi","bmw","maruti"];
cars.push("toyota");
cars.shift();
cars.unshift("honda");
console.log(cars);

let num1 = [1,2,3];
let num2 = [4,5,6];
let finalNum = num1.concat(num2);
console.log(finalNum);
console.log(finalNum.reverse());
  let nums = [10,20,30,40,50];
 console.log(nums.slice(1,4));
console.log( nums.splice(1,2));
console.log(nums);
let lang = ["C", "C++", "java"];
lang.splice(1,2,"JS","Python");
console.log(lang);

let numbers = [50,2,9,18,1];
 let num =numbers.sort((a,b) => b-a);
console.log(num);
console.log(fruits.sort());



