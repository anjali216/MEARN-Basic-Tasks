

//Generate new array with values are subtracted from the total sum of the values
//input : var arr= [4,5,6]; (sum=15)
//output: var arr= [11,10,9]

var arr = [4,5,6];
var sum =15;
for(i in arr){// i=0, i=1,i=2
    console.log(i);
    arr[i]=sum-arr[i];
}
    
console.log(arr);

 //To hold an expenses , and 
 var expenses = [12000,20000,34000,10000,28000,15000,50000];

//Find total expense
var total = 0;
for(let i of expenses){
    total+=i;
}
console.log("Total expenses:" + total);


//Find maximum expense

var maxExp=0;
for(let i of expenses){
    if(maxExp<i){
        maxExp=i;
    }
}
console.log("Maximum expenses:" +maxExp);


//Find minimum expense

minExp= expenses[0];
for (let amount of expenses){
    if(amount<=minExp){
        minExp=amount;
    }
}

console.log("Minimum expense" +minExp);
