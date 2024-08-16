// // //  Sorting of an Array

// var arr=[44,170,56,100,34,150,23,11,12,1]
// console.log(arr.sort());

// console.log(arr.sort((a,b)=>a-b));
// console.log((a,b)=>(b-a));


var vehicle =["Bus","car","Bike","Cycle"];

console.log(vehicle.sort());
console.log(vehicle.reverse());
console.log(vehicle.sort((a,b)=>a.localeCompare(b)));
console.log(vehicle.sort((a,b)=>b.localeCompare(a)));

