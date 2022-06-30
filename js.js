//find max and min number from given array
var arr=[1,2,3,4,5];
///solution 1
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

//solution2 ..using for loop
// let max=arr[0];
// let min=arr[0];
// for(let i=1; i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     else if(arr[i]<min){
// min=arr[i];
//     }
// }
// console.log(min)
// console.log(max);



//Reverse the array

//solution 1..using reverse method
// let newArr=arr.reverse();
// console.log(newArr);

//solution2...using for loop
// for(var i=arr.length;i>=0;i--){
//     console.log(arr[i]);
// }


//***Sort given array */

// var num=[1,5,9,6,7,-9,38,21];
// Sort an array of numbers 
// let numbers = [5, 13, 1, 44, 32, 15, 500]

// // Lowest to highest
// let lowestToHighest = numbers.sort((a, b) => a - b);
// //Output: [1,5,13,15,32,44,500]
// console.log(lowestToHighest);
// //Highest to lowest
// let highestToLowest = numbers.sort((a, b) => b-a);
// //Output: [500,44,32,15,13,5,1]
// console.log(highestToLowest)

// ******Reverse string*******
// 1....using reverse method 
//var name="janabai";
// var newarr=name.split('').reverse().join('');
// console.log(newarr)

//2...***conditional ternory operator */

// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello"));


//***3..decrementing for loop */
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello'));


