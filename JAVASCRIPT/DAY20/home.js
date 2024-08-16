


function addEmployee(){
    const employee={
        id: empid.value,//id:123
        name: empname.value,
        address: empaddr.value,
        designation : empdesg.value,
        exp: empexp.value,
        salary:empsal.value
    }
    if(employee.id==""||employee.name==""||employee.address==""||employee.designation==""||employee.salary==""){
        alert("Please fill the following fields")
    }else{
  if(employee.id in localStorage){
    alert("employee already exists")
  }
  else{
    localStorage.setItem(employee.id,JSON.stringify(employee))
    alert("Employee added successfully")
  }
}
}


function search(){
    key=emp.value//123
    if(key in localStorage){
        alert("Employee is found")
     employee=JSON.parsew(localStorage.getItem(key))
     result.innerHTML=`
     <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Employee Details</h5>
    <p class="card-text">
    id:${employee.id}
    name:${employee.name}
    id:${employee.id}
    </p>
    
  </div>
</div>
     
     `
    }else{
        alert("Employee not found")
    }
}
