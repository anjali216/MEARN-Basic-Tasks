//reduce() - function apply to all array elemnts and returns asingle value(It wil last value)

 a=[1,2,3,4,5,6,7,8,9,10];

// //find sum of elements
 console.log(a.reduce((n1,n2) =>n1+n2));

// //find highest elements                        
 console.log(a.reduce((n1,n2) =>n1>n2?n1:n2));

// //find lowest element
 console.log(a.reduce((n1,n2) => n1<n2?n1:n2));

//ReduceRight() - function apply to all array elements and returns a single value(It will first value)

// arr=[
//     [1,'chinnu',100],
//     [2,'minnu',200],                                                                                                                                                   
//     [3,'ponnu',100],
//     [4,'manu', 100]
//     [5,'anu',300]
// ]

//who got minimum value
console.log(arr.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));
console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));

