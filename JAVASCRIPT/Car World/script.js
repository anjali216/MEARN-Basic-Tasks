
function Store(){
    const cardetail={
        BRAND : brand.value,
        PRICE:price.value ,
        KEY:key.value
    }
    if(cardetail.BRAND=="" || cardetail.PRICE=="" || cardetail.KEY==""){
        alert("Fill the fields")
    }
    else{
    if( cardetail.KEY in localStorage){
        alert("Car detail exists")
    }
    else{
        localStorage.setItem(cardetail.KEY ,JSON.stringify(cardetail) )
        alert("Detail added Suceesfully")
    }}
}

function retrieve(){
    if(key1.value==""){
        alert("Enter the Key")
    }
  let   Keys = key1.value
    if(Keys in localStorage){ 
    let Details =   JSON.parse(localStorage.getItem(Keys))
      
     p1.innerHTML=`Brand: ${Details.BRAND} <br>
       Price: ${Details.PRICE} .
     ` 
    }
    else{
        p1.innerHTML="User not Found"
    }
}
 function DeleteKey(){ 
    let key= Key2.value
    if(key in localStorage){
    localStorage.removeItem("key")
    p2.innerHTML="Records deleted"
    }
    else{
        p2.innerHTML="Key not found"
    }
 }


function DeleteItems(){
    localStorage.clear()
    alert("Details deleted")
}
