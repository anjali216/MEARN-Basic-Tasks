class student{
  // instance initaialization  - constructor() - Default method (no need to create new function)
  //first execute this methods then user defined methods execute 

  setStudent(rollno,name,mark,total) {
    this.studrollno=rollno;
    this.studname=name;
    this.studmark=mark;
    this.studtotal=total;
    console.log("student details created");
   }

   printDetails(){
    console.log(this.studrollno,this.studname,this.mark,this.studtotal);
   }
}     

s1=new Student()
s1.setStudent(101,"Jay","50",425);
s1.printDetails();


s2=new Student()
s2.setStudent(101,"Jaison","40",450);
s2.printDetails();