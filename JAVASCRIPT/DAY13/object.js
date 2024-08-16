


// // Object creation - var object_name={key:value};
// //Object


//Create an employee object having properties as id,,name,designation,salary,experience

var employee ={
   id: 1,
   name : "John",
   designation: "Developer",
   salary:35000,
   experience :4
}

// // //Display the employee object
console.log(employee);
// // Fetch particular value from an object
//object_name["key"] or object_name.key
// //Print employee name
console.log(employee["name"]);
// // //Print employee salary
console.log(employee.salary);


// // To check whether a particular key is present in theemployee object
 // // // in operator o/p - boolean value is returned
// // To check experience in the employee object

console.log("experience" in employee);//true
console.log("gender" in employee);



// //Add or insert new key/value pairs to object
// // // object-name["key"]=value

employee["gender"]='male';//string
console.log(employee);

// // // // Add isVaccinated or not
employee.isVaccinated=true;
console.log(employee);

// // //add vaccine
employee.vaccine='covishield';
console.log(employee);


// // // // Update
employee.vaccine='covaxin';
console.log(employee);

