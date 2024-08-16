// array - used to store more variables in a single variables


//array creation
// var vehicle=[]; //declaration

var vehicle =["car","bus","bus","bike","plane",200000,567000] ;//initilization

//1 . To fetch an item from an array
console.log(vehicle[1]);


//2.to find the length of an array
console.log(vehicle.length);

//3 Fetch every element of the array
console.log(vehicle);
for(i=0;i<vehicle.length;i++){
    console.log(vehicle[i]);
}

//4.To insert a new element an array.
console.log(vehicle.push("auto"));
console.log(vehicle);

//5.To get index position of values stored in an array

for(i in vehicle){
    console.log(i);
}



var arr=[10,24,5,43,50,17,2];
//Check whether the element(2) is present or not

var element=2;

flag=0;

for(let i of arr){
    if(i==element){
        flag=1;
        break;
    }
}

console.log(flag==1?"Number is Found":"Number is not found");