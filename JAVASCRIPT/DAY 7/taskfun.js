//Write a program to find the area of a triangle using function


// function triangleArea(base, height) {
//     return 0.5 * base * height;
//   }
  
//   // Example usage:
//   let base = 5;
//   let height = 6;
//   let area = triangleArea(base, height);
  
//   console.log(`The area of the triangle is: ${area}`);

 // Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

//  function isPrime(number) {
//     // Check if number is less than or equal to 1
//     if (number <= 1) {
//         return false;
//     }

//     // Check for numbers 2 and 3
//     if (number <= 3) {
//         return true;
//     }

//     // Check for multiples of 2 and 3
//     if (number % 2 === 0 || number % 3 === 0) {
//         return false;
//     }

//     // Check for prime numbers greater than 3
//     for (let i = 5; i * i <= number; i += 6) {
//         if (number % i === 0 || number % (i + 2) === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// // Example usage:
// let num = 23;
// if (isPrime(num)) {
//     console.log(`${num} is a prime number.`);
// } else {
//     console.log(`${num} is not a prime number.`);
// }


//Write a JavaScript function that checks whether a passed string is palindrome or not?

// function to reverse the string
// function reverse(str) {
//     // variable holds reverse string 
//     let rev_str = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev_str += str[i];
//     }
//     // return reverse string 
//     return rev_str;
// }

//  function checking string is palindrome or not 
// function is_palindrome(str) {
//     reverse_str = reverse(str);
//     //  condition checking if reverse str is 
//     // same as string it is palindrome
//     // else not a palindrome
//     if (reverse_str === str) {
//         console.log("passed string is palindrome ");
//     }
//     else {
//         console.log("passed string is not palindrome")
//     }
// }
// let test = "hellolleh";
// is_palindrome(test);



//Create an arrow function that squares a given number.

//const square = (number) => number * number;

// Example usage:
//let num = 6;
//console.log(`The square of ${num} is ${square(num)}`);


//6.Write a recursive function in JavaScript to calculate the nth Fibonacci number. The Fibonacci sequence is defined as follows: the first two numbers are 0 and 1, 
//and each subsequent number is the sum of the two preceding ones.


//  function fibonacci(n) { 
//      if (n <= 1) { 
//          return n; 
//      } 
//      return fibonacci(n - 1) + fibonacci(n - 2); 
//  } 
  
// // // Printing n fibonacci sequence 
//  n = 10
  
//  for (let i = 0; i < n; i++) { 
//      console.log(fibonacci(i)); 
//  };




//Write an anonymous function that takes two numbers as arguments and returns their product.


// const product = (num1, num2) => num1 * num2;

// console.log(product(5, 3)); 
// console.log(product(-4, 7)); 
// console.log(product(0, 10)); 


//11.Create a Function to Convert Celsius to Fahrenheit using arrow function.

// const f=(c) => fareheint= c*(9/5)+32
// console.log(f(5));

//12.Create a Function to print Greeting Message using arrow function.

const hello=() =>"hello";
console.log(hello());



