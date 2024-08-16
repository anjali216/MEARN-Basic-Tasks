

//Datatypes

// //1 Strings example
//var names='Anjali'
//console.log(names);
//var empName="Krishnan"
//console.log(empName);
//var studName=`Sreekala`
//console.log(studName);
//String with concatenation
//console.log("One of my student name is" + studName);
//console.log("One of my student name is" , empName);
//console.log(`One of my student name is ${names}`);





// //2 Numbers example
//var n1= 3;//integer
//var n2 = 3.443; // floating point
//console.log(n1,n2);
//console.log(typeof(n2));

// //3 Boolean example

//const ab = true;  //(1)
//const bc = false; //(0)

//console.log(ab);   //true
//console.log(bc);  //false

// // 4 undefined example
//let names; //variable declaration
//console.log(names); //undefined

// //5 null example
//let lastName = null;
//console.log (lastName);

// object example

//const student = 
// {
//   //  id :123,
//     //name : 'Manu',
//     //lass :10 
// }

//console.log(student);
//console.log(student.name);


// //array example
//var students =["john", "sara", 2344, 6576,true,null]
//console.log(students);

/*function example

//function definition
//function functionName(parameter1,parameter2...){
  //  function body
}
*/

//function call
//functionName(parameter1, parameter2..)

function add(a,b){
    c=a+b
    console.log("Sum of two numbers" +c)
}

add(5,6)


function addition(a,b){
    c=a+b
    return c
}

console.log(addition(5,6));