// Calculate Area with Overloaded Function

// Write a function called calculateArea(...args) that calculates the area of different shapes based on the number of arguments provided. 
//The function should support three shapes: circle, rectangle, and triangle. 
//The number of arguments passed will determine the shape and its corresponding area calculation. Use the provided code as a reference.

// Specifications:

// For one argument, assume it's the radius of a circle and return the area of the circle using the formula: area = π * radius * radius.

// For two arguments, assume they are the length and width of a rectangle and return the area of the rectangle using the formula: area = length * width.

// For three arguments, assume they are the side lengths of a triangle, and return the area of the triangle using Heron's formula: area = √(s * (s - a) * (s - b) * (s - c)), where s is the semi-perimeter and a, b, and c are the side lengths of the triangle.

// If any other number of arguments is provided, throw an error with the message "Invalid number of arguments."


// console.log(calculateArea(5)); // Output: 78.53981633974483 (Area of a circle)
// console.log(calculateArea(4, 6)); // Output: 24 (Area of a rectangle)
// console.log(calculateArea(3, 4, 5)); // Output: 6 (Area of a triangle)
// console.log(calculateArea(2, 4, 6, 8)); // Error: Invalid number of arguments.

function calculateArea(...args){
  if (args.length===1){
      const radius= args[0]
      return Math.PI*radius*radius
  } else if (args.length===2){
      const length=args[0]
      const width=args[1]
      return length*width
  }else if(args.length===3){
      const a=  args[0]
      const b= args[1]
      const c= args[2]
      const s = (a+b+c)/2
      return Math.sqrt(s * (s - a) * (s - b) * (s - c))

  }else{
      console.log('invalid arguments');
  }
}
console.log(calculateArea(5));
console.log(calculateArea(5,7));
console.log(calculateArea(6,7,8));



//Usage examples
//console.log(calculateArea(5)); // Output: 78.53981633974483 (Area of a circle)
//console.log(calculateArea(4, 6)); // Output: 24 (Area of a rectangle)
//console.log(calculateArea(3, 4, 5)); // Output: 6 (Area of a triangle)
//console.log(calculateArea(2, 4, 6, 8)); // Error: Invalid number of arguments.
