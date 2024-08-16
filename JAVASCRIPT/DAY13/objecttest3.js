const countries = [
    { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
    { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
    { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
    { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
    { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
 ];
  
  // 1. Print the names of all countries.
  //console.log(countries.map(item=>item.name));

  // 2. Find the country with the largest population.
//    sortdescending=countries.sort((a,b)=>b.population -a.population);
//    highestpopulatedCountry = sortdescending[0].name;
//    console.log(highestpopulatedCountry);


// 3. Find the total population of all countries.
//   total=countries.reduce((sum,item)=>sum+item.population,0);
//   console.log(total);


// 4. Find all countries in a specific continent (e.g., Asia).

// console.log(countries.filter(item=>item.continent==='Asia'));
// countries.filter(item=>item.continent==='Asia').forEach(country=>console.log(country.name));

 
// 5. Print the names of capitals with more than one city.
//countries.filter(country=> country.capital.includes(',')).forEach(country=> console.log(country.capital));

    
// 6. Sort countries based on population (descending order).
// sortdescending1 = countries.sort((a,b)=>b.population-a.population);
// console.log(sortdescending1);


// 7. Find the country with the smallest population.
//console.log(countries.reduce((d1,d2)=>d1.population<d2.population?d1:d2).name);


// 8. Find the country with the longest name.
// longest=countries.reduce((longest,item)=>item.name.length>longest.name.length ? item:longest)
// console.log(longest);


// 9. Find the country with the shortest name.
//shortest=countries.reduce((shortest,item)=>item.name.length<shortest.name.length ? item:shortest)
//console.log(shortest);

// 10. Find the average population of all countries.

total=countries.reduce((sum,item)=>sum+item.population,0)
console.log('Total Population',total);
average=total/5;
console.log('Average of the total Population', average);