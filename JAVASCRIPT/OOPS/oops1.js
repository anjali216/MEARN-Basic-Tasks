

//class -creation
//syntax: class class_name{
//properties 
//}

//create class employee

class employee{
   setEmployee(id,name,designation, salary){
        this.empid=id,
        this.empname=name,
        this.empdesignmation=designation,
        this.empsalary=salary
        console.log("employee details created");
    }
    printEmployee(){
        console.log(this.empid,this.empname,this.empdesignation,this.salary);
    }
}


emp1=new employee()
emp1.setEmployee(101,"Jay","Designer",1000)
emp1.employee()

emp2= new employee()
emp2.setEmployee(102,"John","Manager",3500)
emp2.employee()