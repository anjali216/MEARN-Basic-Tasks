//TASK 2 : 

accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:6000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary', mode:'gpay'
            },
            {
                to:1001,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:7000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1000,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    }
]



//1 total number of accounts
//const  totalaccount = accounts.length;
//console.log(accounts.length);

//2 print account number whose account type is savings
//console.log(accounts.filter(acc=>acc.ac_type==='savings').map(account =>account.acno));

//3  print the balance of account number 1000
//balanceacc=accounts.find(acc=>acc.acno==1000)
//console.log(balanceacc.balance);


//4 print all gpay transactions
//const gpayTransactions = accounts.flatMap(account=>account.transaction).filter(txn=>txn.mode==='gpay');
//console.log('Gpay Transactions:', gpayTransactions);



//5 print all transactions whose amount > 5000
//const highValueTransactions = accounts.flatMap(account => account.transaction).filter(a => a.amount > 5000);
//console.log('Transactions with amount > 5000:', highValueTransactions);



//6 print all credit transactions of account 1002
//const creditTransactions1002 = accounts.flatMap(account => account.transaction).filter(a => a.to === 1002);
//console.log('Credit Transactions of account 1002:', creditTransactions1002);


//7 print all debit transactions of account 1002
// const account1002 = accounts.find(account => account.acno ===1002);
// const debitTransactions1002 = account1002.transaction;
// console.log('Debit Transactions of account 1002:', debitTransactions1002);


//8 print the highest balance account details
//console.log(accounts.reduce((a,b)=> a.balance > b.balance? a: b ));


//9 print transaction history of 1002

// const account1002 = accounts.find(account => account.acno === 1002);
// if (account1002) {
//     console.log(`Transaction history of account ${account1002.acno}:`);
//     account1002.transaction.forEach(transaction => {
//         console.log(`  To: ${transaction.to}, Amount: ${transaction.amount}, Message: ${transaction.msg}, Mode: ${transaction.mode}`);
//     });
// } else {
//     console.log('Account with acno 1002 not found.');
// }


//10 print transaction history of account 1003
acc1003=accounts.find(acc=> acc.acno ===1003);
console.log(acc1003.transaction);