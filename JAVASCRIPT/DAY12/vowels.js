//print all vowels in the string

//str="hai hellO";//variable

vowels=['a','e','i','o','u','A','E','I','O','U'];//array

console.log(Array.from(str));

Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));

//find the vowels in an array usimg array methods

//const strings = ["Hello","how","are","you"];//output :[2,1,2,2]

const strings= ["Hello","how","are","you"];
const vowelCounts=strings.map(str => Array.from(str).filter(char =>'aeiouAEIOU'.includes(char)).length);
console.log("Number of vowels in each string:",vowelCounts);



















