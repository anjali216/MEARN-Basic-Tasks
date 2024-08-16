// Nested array data for customers - details Id, name, place, email, amount
const customerData = [
    [3000, 'John Doe', 'New York', 'john.doe@email.com', 1000],
    [3001, 'Alice Smith', 'Los Angeles', 'alice.smith@email.com', 1200],
    [3002, 'Bob Johnson', 'Chicago', 'bob.johnson@email.com', 800],
    [3003, 'Emily Davis', 'San Francisco', 'emily.davis@email.com', 1500],
    [3004, 'David Lee', 'Houston', 'david.lee@email.com', 1100],
    [3005, 'Sophia Chen', 'Miami', 'sophia.chen@email.com', 900],
    [3006, 'Michael Wilson', 'Seattle', 'michael.wilson@email.com', 1300],
    [3007, 'Emma Brown', 'Dallas', 'emma.brown@email.com', 950],
    [3008, 'Daniel Miller', 'Boston', 'daniel.miller@email.com', 1050],
];


// Questions for the customer data
// 1. Print the names of all customers.
// 2. How many customers are there in the dataset?
// 3. Provide details for customers from the city "Chicago."
// 4. Display details for customers with a transaction amount greater than 1000.
// 5. Retrieve the details of the customer named "David Lee."
// 6. Sort customers in descending order based on their transaction amount.
// 7. Arrange customers in ascending order based on their customer ID.
// 8. How many customers have a transaction amount between 900 and 1100?
// 9. Provide details for customers who are not from New York.


// 1. Print the names of all customers.

for(i of customerData){
    names=i[1];
    console.log(names);
}

//2. How many customers are there in the dataset?
console.log(customerData.length);

// 3. Provide details for customers from the city "Chicago."
const customersFromChicago = customerData.filter(customer => customer[2] === 'Chicago');
console.log(customersFromChicago);


//4. Display details for customers with a transaction amount greater than 1000.

console.log("customerData transaction amount>1000")
for(let tran of customerData){
    if(tran[4]>1000){
        console.log(tran);
    }
}

//5. Retrieve the details of the customer named "David Lee."
console.log("Details of David Lee");
for(tran of customerData){
    if(tran[1]=='David Lee'){
        console.log(tran);
    }
}

//6.  Sort customers in descending order based on their transaction amount.
console.log("Descending order");
console.log(customerData.sort((tran1,tran2) => tran2[4]-tran1[4]));


// 7. Arrange customers in ascending order based on their customer ID.

console.log("customer ID");
console.log(customerData.sort((c1,c2)=>c1[0]-c2[0]));

// 8. How many customers have a transaction amount between 900 and 1100?
console.log("customer transaction")
for (i of customerData){
    if(i[4]>900 && i[4]<1100)
        {
            console.log(i);
        }
}

// 9. Provide details for customers who are not from New York.
for ( i of customerData){
    if(i[2]!='New York'){
        console.log(i);
    }
}


// 10. Print the average transaction amount for all customers.
sum=0;
for(i of customerData){
    sum+=i[4]
}
console.log(`Average of transactions : ${Math.floor(sum/customerData.length)}`);