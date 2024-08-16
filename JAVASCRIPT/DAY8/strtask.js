

//1.What will be output the following print statement in js 
//console.log("hari\"".length)


//3.	Extract the amount out of  the string
//"Please give Rs 10000"
	

// let str = "Please give Rs 10000";
// let amount = str.match(/\d+/); // amount[0] gives the first match found
// if (amount) {
//     console.log("Amount:", amount[0]); // amount[0] gives the first match found
// } else {
//     console.log("Amount not found");
// }

//4. Try to Change  4th character of a given string 
//"Where you able to do it?"

// Original string
// let originalString = "Where you able to do it?";

//Change 4th character to 'y'
// let modifiedString = originalString.substring(0,3) + 'y' + originalString.substring(4);

// console.log(modifiedString);

//7.Write a function to count the number of vowels and consonants in a given string.


// function countVowelsAndConsonants(str) {
//     // Convert the string to lowercase to handle case insensitivity
//     str = str.toLowerCase();

//     // Define vowels and consonants patterns
//     const vowels = 'aeiou';
//     const consonants = 'bcdfghjklmnpqrstvwxyz';

//     // Initialize counters
//     let vowelCount = 0;
//     let consonantCount = 0;

//     // Iterate through each character in the string
//     for (let char of str) {
//         // Check if the character is a vowel
//         if (vowels.includes(char)) {
        //     vowelCount++;
        // }
        // // Check if the character is a consonant
        // else if (consonants.includes(char)) {
        //     consonantCount++;
        // }
        // Ignore spaces, numbers, punctuation, etc.
    //}

    // Return an object with the counts
//     return {
//         vowels: vowelCount,
//         consonants: consonantCount
//     };
// }

// // Test cases
// console.log(countVowelsAndConsonants("Hello World"));  
// console.log(countVowelsAndConsonants("This is a test sentence."));  
// console.log(countVowelsAndConsonants("JavaScript is awesome!"));  
// console.log(countVowelsAndConsonants(""));  

//6.Write a function to check if two strings are anagrams of each other. Anagrams have the same characters but in a different order. For example, "listen" and "silent" are anagrams.

// function Anagrams(str1,str2){
//     if(str1.length !== str2. length){
//         return false;
//     }

// let sortedStr1 = str1.split('').sort().join('');
// let sortedStr2 = str2.split('').sort().join('');

// return sortedStr1 == sortedStr2;
// }

// let string1 = "listen";
// let string2 = "silent";

// if (Anagrams(string1,string2)){
//     console.log(`"${string1}" and "${string2}" are anagrams.`);
// }else{
//     console.log(`"${string1}" and "${string2}" are not anagrams.`);
// }


//10.	Implement a basic string compression without creating a separate function. Use loops and conditional statements to create the compressed string.


// let originalString = "aabcccccaaa";

// let compressedString = "";
// let currentChar = originalString[0];
// let charCount = 1;

// // Iterate through the string, starting from the second character
// for (let i = 1; i < originalString.length; i++) {
//     if (originalString[i] === currentChar) {
//         // If current character is same as previous, increment count
//         charCount++;
//     } else {
//         // Append currentChar and its count to compressedString
//         compressedString += currentChar + charCount;
//         // Reset currentChar and charCount for new character
//         currentChar = originalString[i];
//         charCount = 1;
//     }
// }

// // Append the last character and its count
// compressedString += currentChar + charCount;

// // Output the original and compressed strings
// console.log("Original string:", originalString);
// console.log("Compressed string:", compressedString);


//9.	Implement a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3.“

// function compressString(input) {
//     // Edge case: If input is empty, return empty string
//     if (input.length === 0) {
//         return "";
//     }

//     let compressedString = "";
//     let currentChar = input[0];
//     let charCount = 1;

    // Iterate through the string, starting from the second character
    // for (let i = 1; i < input.length; i++) {
    //     if (input[i] === currentChar) {
    //         // If current character is same as previous, increment count
    //         charCount++;
    //     } else {
    //         // Append currentChar and its count to compressedString
    //         compressedString += currentChar + charCount;
    //         // Update currentChar and reset charCount for new character
    //         currentChar = input[i];
    //         charCount = 1;
    //     }
   // }

//     // Append the last character and its count
//     compressedString += currentChar + charCount;

//     return compressedString;
// }

// Example usage:
// let originalString = "aabcccccaaa";
// let compressed = compressString(originalString);
// console.log(`Original string: ${originalString}`);
// console.log(`Compressed string: ${compressed}`);


//8.Write a function that capitalizes the first letter of each word in a sentence. For example, "hello world" should become "Hello World.“


function capitalizeWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Iterate through the words array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words array into a single string and return
    return words.join(" ");
}

// Example usage:
let sentence = "hello world";
let capitalizedSentence = capitalizeWords(sentence);
console.log(`Original sentence: ${sentence}`);
console.log(`Capitalized sentence: ${capitalizedSentence}`);
