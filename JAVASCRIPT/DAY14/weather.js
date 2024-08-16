weatherdata=[
    {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikkod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Palakkad',weather:36},
]

//array of objects

output={};
for(let data of  weatherdata){//data object //data {district:thri,weather:18}
    let distName =data["district"];//thrissur - thrissur
    let currentTemp=data["weather"];//28-29

    if(distName in output){ //t 28
        let oldtemp = output[distName]; //28 - output={t:28,p:36,k:28} 1st
        
        if(currentTemp>oldtemp){ //29>28
            output[distName]=currentTemp;//29
        }
    }
    else{
        output[distName]=currentTemp; //output{t-28 ,p -36, k-28}
    }
}

console.log(output);


// weatherData.map(place=> place.district in output?(output[place.district]>place.weather?null:output[place.district]=place.weather):output[place.district]=place.weather)
// console.log(output);


//2 array sort
console.log(Object.entries(output));

console.log(Object.entries(output).sort((n1,n2)=>n2[1]-n1[1]));