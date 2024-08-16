//[id,name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. Display all products name
//console.log(products.map((item)=>item[1]));

//2. Display list of products under 50rs 
//console.log(products.filter(item=>item[2]<50));


//3. Print details of 'oreo' product
//console.log(products.filter((item)=>item[1]=="oreo"));

//4. Display most coslty product details
//DescendingSort =products.sort((a,b)=>b[2]-a[2]);
//costlyProduct=DescendingSort[0];
//console.log(costlyProduct);

//5. Display out of stock product details
//OutofStock=products.filter((item)=>item[3]==0)
//console.log(OutofStock);


//6. Display print details of 4th product 
//fourthitems=products.filter((item)=>item[0]==4)
//console.log(fourthitems);

//7. sort products details based on product availability stock by desending
//AvailableProducts= products.sort((a,b)=>b[3]-a[3]);
//console.log(AvailableProducts);

//8. Display products having maximum availabile stock
// AvailableProducts= products.sort((a,b)=>b[3]-a[3]);
// MaxAvailableStock=AvailableProducts[0]
// console.log(MaxAvailableStock);


//9. Display products having minimum availabile stock
//AvailableProducts= products.sort((a,b)=>b[3]-a[3]);
//MinAvailableStock=AvailableProducts[6]
//console.log(MinAvailableStock);



//10. Sort the products based on rate by ascending order

PriceAscending = products.sort((a,b)=>a[2]-b[2]);
console.log(PriceAscending);