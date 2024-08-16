










// expr='/23*76+97';
// console.log(eval(expr));
// console.log('Data Transmitted:' +eval(expr));

//try catch finally
expr='/23*76+97';
try{
    console.log('try block');
    console.log(eval(expr));//error
}
catch{
    console.log('catch block');
    console.log('error');
    expr='/23*76+97';
    console.log(eval(expr));//1845
    //runtime error solve
}
finally{
console.log('finally block');
console.log('always executed');
}
console.log('Data transmitted' +eval(expr));
