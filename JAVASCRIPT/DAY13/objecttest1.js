//print count of each item in the given array
a=[10,10,20,20,30,30,40,40,50,50,50,60]
//output {10:2,20:2,30:2,40:2,50:3,60:1}

output={};
a.map(num=>num in output? output[num]+=1 : output[num]=1);
console.log(output);
