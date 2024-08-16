//2.Create an array of numbers and add numbers to this array and Keep adding numbers to the array in the even number format

// let numbers = []; 

// function addEvenNumber() {
//     let lastNumber = numbers.length > 0 ? numbers[numbers.length - 1] : 0;
//     let nextEvenNumber = lastNumber + 2;
//     numbers.push(nextEvenNumber);
// }

// // Add initial even number to start the sequence
// numbers.push(2);

// // Loop to continuously add even numbers
// while (numbers.length < 10) { // Adjust the condition as needed
//     addEvenNumber();
// }

// console.log(numbers); // Output the array of even numbers


//3. filter the numbers divisible by 10 from a given array Eg: [10,25,67,45,70,36,50]

// let numbers = [10, 25, 67, 45, 70, 36, 50];

// // Filter numbers divisible by 10
// let divisibleBy10 = numbers.filter(function(num) {
//     return num % 10 === 0;
// });

// console.log(divisibleBy10); 


//4.Create an array of square of given number eg: [3,4,5,6,7] 

// let numbers = [3, 4, 5, 6, 7];

// let squares = numbers.map(function(num) {
//     return num * num; // Square of each number
// });

// console.log(squares); 


// 5. Write a function to remove all duplicate elements from an array

//  function Duplicates(arr) {
//    let Array = []; 

//      for (let i = 0; i < arr.length; i++) {
//          if (Array.indexOf(arr[i]) === -1) {
//              Array.push(arr[i]); 
//          }
//      }
//      return uniqueArray;
//  }

// // // Example usage:
//  const numbers = [1, 2, 2, 3, 4, 4, 5];
// const unique= Duplicates(numbers);
//   console.log(unique);



//6. Write a function to reverse an array in-place (without creating a new array).

// function reverseArray(array) {
//     let start = 0;
//     let end = array.length - 1;
//     while (start < end) {
//       const temp = array[start];
//       array[start] = array[end];
//       array[end] = temp;
//       start++;
//       end--;
//     }
//   }
  
//   // Example usage:
//   const array = [1, 2, 3, 4, 5];
//   reverseArray(array);
//   console.log(array); 

  //7. Write a function to find the intersection of two arrays

  // program to perform intersection between two arrays

// function performIntersection(arr1, arr2) {

//   const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

//   return intersectionResult;

// }

// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];

// const result = performIntersection(array1, array2);
// console.log(result);


// 8. Write a function to remove all falsy values (e.g., null, undefined, 0, false) from an array.

// function removeFalsyValues(array) {
//   return array.filter(Boolean);
// }

// // Example usage:
// const array = [1, 2, null, undefined, 0, false, 3, 4];
// const filteredArray = removeFalsyValues(array);

// console.log(filteredArray);


//9.	Write a function to shuffle the elements of an array randomly.

// function shuffleArray(array) {
//   // Create a copy of the original array
//   let shuffledArray = array.slice();
  
//   // Fisher-Yates shuffle algorithm
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
  
//   return shuffledArray;
// }

// // Example usage:
// const myArray = [1, 2, 3, 4, 5];
// const shuffled = shuffleArray(myArray);
// console.log(shuffled);


//10.	Write a function to find the difference between two arrays (elements in one array but not in the other).

 function arrayDifference(arr1, arr2) {
   // Create a Set from arr2 for faster lookup
   const set2 = new Set(arr2);
  
   // Use filter to return elements from arr1 that are not in arr2
   const difference = arr1.filter(element => !set2.has(element));
  
   return difference;
 }

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [2, 4, 6];
// const diff = arrayDifference(array1, array2);
// console.log(diff); 
