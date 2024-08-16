


// // String
// let first_name ="John";
// let last_name = 'Doe';
// let middle_name =`Sara`;

// console.log(first_name, middle_name,last_name);
// console.log(typeof(first_name,middle_name,last_name));

// // With template literals(``) , It is possible to use both single as well as double quotes inside a string

//let sentence= "This is a "Car" " //-> error
// let sentence1 =`The name "is" John's \\`
// console.log(sentence1);
// let sent = "This is a \"Car\" "
// console.log(sent);

// Escape Sequence

// let text = "This is my "new" car "; //error

// let text1 = "This is my \"new \" car.";
// let text2 ="The character \\ is called blackslash.";
// let text3 ="The character \` is called backtick.";
// console.log(text1);
// console.log(text2);
// console.log(text3);

// let strings ="I love\n coding"
// console.log(strings);

// let sentence2 = `This is my \t new laptop`
// console.log(sentence2);

// let sentence3 = `This is my \v new laptop`
// console.log(sentence3);

//Type Casting

// const num=10;
// const str="9";
// console.log(str+num);
// console.log(Number(str)+num);

// const num1=40;
// const numToStr=num1.toString() //string "40"
// console.log(typeof numToStr); //string
// console.log(numToStr+9) //"40"+9 409

// //String Properties and methods

let sname ="Manu"
console.log(sname.length);  
console.log(sname.toUpperCase());
console.log(sname.toLowerCase())

let name1 ="Ann M"
let newname =name1.replace("M","Luca")
console.log(name1);
console.log(newname);

let s_name="Sagar"
let m_name="Alias"
let l_name="Jacky"

let full_name=s_name.concat('',m_name+l_name)
console.log(full_name);