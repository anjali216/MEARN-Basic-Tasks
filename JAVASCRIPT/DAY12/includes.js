//includes() - It returns true if the item present in array 

// The includes() method searches the array for the specified element using strict equality (===). 
//If the element is found, the method returns true; otherwise, it returns false.

a=['max', 'mili', 'milan' ];

//Is mili present or not?
console.log(a.includes('mili'));//true

console.log(a.includes('Mili'));//case sensitive