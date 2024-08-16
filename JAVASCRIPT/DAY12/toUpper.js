//convert and display text in capital letters

str="luminar";
console.log(str.toUpperCase());

// //1 convert to array - Array.from()

console.log(Array.from(str));

// // // //returns;

console.log((Array.from(str.localeCompare(char=>char.toUpperCase))));

Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char))