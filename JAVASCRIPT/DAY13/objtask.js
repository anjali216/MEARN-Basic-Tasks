//Create a student object having properties as id,name,course,totalmark,year
var student = {
    id: 1,
    name: "John ",
    course: "Computer Science",
    totalmark: 85,
    year: 2024
};

//1 Print name of student object
//console.log(student.name);
//console.log(student["course"]);

//2 Check rank key is present in student object
//console.log("rank" in student);
//console.log("year" in student);

//3 add qualifed for higher education or not and update 
//student.HigherEducation=true;
//console.log(student);

//4 Mark incremented by 10 
//student.totalmark+=10;
//console.log(student);


//5 Print details of student object one by one
 for (key in student){
     console.log(`${key} :${student[key]}`);
 }