//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]


//1. Find which district having highest +ve case?
//2. Find which district having highest 1st dose vaccine?
//3. Find which district having lowest death rate?
//4. Sort the data with +ve case in desending order
//5. sort district with 1st dose vaccine
//6. print total number of curred cases
//7. print total curred cases in Edukki
//8. Is any district having more than 27000 +ve cases -

//1. Find which district having highest +ve case?
// highestCase = covid_data.sort((a,b)=> b[2]-a[2]);
// highestCaseDistrict=highestCase[0][1];
// console.log(highestCaseDistrict);


//2. Find which district having highest 1st dose vaccine?
// firstDose= covid_data.sort((a,b)=>b[5]-a[5]);
// firstDoseDistrict=firstDose[0][5];
// console.log(firstDoseDistrict);


//3. Find which district having lowest death rate?
// deathrate = covid_data.sort((a,b)=>a[3]-b[3]);
// console.log(deathrate);
// lowestDeathRate= deathrate[0][1];
// console.log(lowestDeathRate);


//4. Sort the data with +ve case in desending order
// highestCase = covid_data.sort((a,b)=>b[2]-a[2]);
// console.log(highestCase);


//5. sort district with 1st dose vaccine
// firstDoseSort=covid_data.sort((a,b)=>a[5]-b[5]);
// console.log(firstDoseSort);
// console.log(firstDoseSort.map(item=>item[1]));


//6. print total number of curred cases
//console.log(covid_data.reduce((sum,item)=>sum+item[4],0));


//7. print total curred cases in Edukki
// let IdukkiCase = covid_data.find(item=>item[1]==='Idukki');
// if (IdukkiCase) {
//     console.log(IdukkiCase[4]);
// }else{
//     console.log("District 'Idukki' is not found");
// }



//8. Is any district having more than 27000 +ve cases -

let cases =covid_data.some(item =>item[2]>27000)
if(cases){
    console.log("District with more than 27000 positive cases present.");
}else{
    console.log("no district has more than 27000 positive cases");
}