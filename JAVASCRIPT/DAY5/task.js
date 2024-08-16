// Write a program to find GCD/HCF of 2 numbers HCF (highest common factor)

// HCF(12,36)=12;

// 12={1,12,2,6,3,4}

// 36={1,36,2,18,3,12,4,9,6}

let hcf,n1=12,n2=36
for(i=1;i<=n1&& i<=n2; i++)
    {
        if(n1%i==0 &&n2%i==0){
            hcf=i;
        }
    }
 console.log("The HCF of the given number is",hcf);


// Write a program to print the pattern using nested looping
//     1
//     22
//     333
//     4444
// 

// function printPattern(rows) {
//      for (let i = 1; i <= rows; i++) {
//          let pattern = "";
//          for (let j = 1; j <= i; j++) {
//              pattern += i;
//          }
//          console.log(pattern);
//      }
// }

//  const rows = 4;
//  printPattern(rows);


/*Write a program to print the pattern using nested looping
    1
    2 3
    4 5 6
    7 8 9 10
*/

// const rows = 4;
//  let num = 1;

//  for (let i = 1; i <= rows; i++) {
//      let line = "";
//      for (let j = 1; j <= i; j++) {
//          line += num + " ";
//          num++;
//      }
//      console.log(line);
//  }



//Write a program to print the pattern using nested looping - full pyramid
                        
 //                              *
 //                            *    *
 //                         *    *     *
 //                      *    *     *     *
                       

// const rows = 4;

//  for (let i = 1; i <= rows; i++) {
//      let str = "";
//          for (let space = 1; space <= rows - i; space++) {
//        str += " ";
//      }
    
//  for (let j = 1; j <= i; j++) {
//          str += "* ";
//      }
//      console.log(str);
//  }




// Write a program to check a number armstrong or not
// input=153;
// output=1^3 + 5^3 + 3^3 = 1+125+27=153 */


// function isArmstrongNumber(number) {
//     const numString = number.toString();
//     const numLength = numString.length;
//     let sum = 0;

//     for (let digit of numString) {
//         sum += Math.pow(parseInt(digit), numLength);
//     }

//     return sum === number;
// }

// const input = 153;
// if (isArmstrongNumber(input)) {
//     console.log(input + " is an Armstrong number.");
// } else {
//     console.log(input + " is not an Armstrong number.");
// }


