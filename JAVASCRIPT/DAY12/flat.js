// a=[
//     [10,50],
//     [20,60],
//     [1,5],
//     [15,25],
//     [3,8],
//     [100,500]
// ]
// // // 1 print all numbers >10

// console.log(a);//nested array
// console.log(a.flat());//single array
// console.log(a.flat().filter(num=>num>10));

//You can pass a larger depth value to completely flatten deeply nested array
//[1,[2,[3,[4,[5]]]]] -> [1,2,3,4,5]

//deeplynestedArray => completely flattenedArray will be [1,2,3,4,5]
// const nestedArray =[1,[2,[3,[4,[5]]]]];

// console.log(nestedArray.flat(1));
// console.log(nestedArray.flat(2));
// console.log(nestedArray.flat(3));
// console.log(nestedArray.flat(Infinity));

//Can you provide an example of using the flat() method with ana array that contains empty slots?

const arrayWithEmptySlots =[1,,[2,3],,[4,[5,6]]];
// // // flattened array will be [1,2,3,4,[5,6]]
console.log(arrayWithEmptySlots.flat());

//The result is that the array is flattened one level deep, and the empty slots are removed.



