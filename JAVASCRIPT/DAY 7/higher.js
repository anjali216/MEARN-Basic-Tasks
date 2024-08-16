

// // A callback function the name of the function could be any name
// const callback =(n) =>{
//     return n **2;
// };

// // Function that takes another function as a callback.
// function cube(callback, n){
//     return callback(n) *n;
     
// }

//console.log(cube(callback,3));

function sayHello(){
    console.log("Hello");
}
setInterval(sayHello,1000)//it prints hello in every second, 1000ms is 1s//

function sayHello(){
    console.log('Hello')
}
setTimeout(sayHello, 2000)