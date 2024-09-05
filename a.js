//  Reverse an Array
// const arr = [1, 2, 3, 4, 5];

// let a = []

// for (let i=arr.length-1; i>=0; i--) {
//     a.push(arr[i]);
// };

// console.log(a)




//  Array Rotation: Rotate an array to the left by a given number of steps.





//  Remove Duplicates: Write a function that removes duplicates from an array.

// const arr = [1, 2, 3, 4, 5];

// const removeDublicates = () => {
//     let a = arr[0];

//     for (let i=0; i<arr.length; i++) {

//     }
// }






// remove dublicates in array

// // first method 
// const arr = [1, 23, 3, 4, 5, 5, 6, 6, 8, 2, 3, 23, 1, 1, 1, 7, 4, 8];

// const newArr = [...new Set(arr)];

// console.log(newArr);





// // second method
// const arr = [1, 23, 3, 4, 5, 5, 6, 6, 8, 2, 3, 23, 1, 1, 1, 7, 4, 8];


// const a = arr.filter((ele, index) => arr.indexOf(ele) === index);

// console.log(a)



// // reverse a string 

// let str = "bhilai";

// const reverseStr = str.split('').reverse().join('');

// console.log(reverseStr);



// const arr = ["a", "b", "c", "d", "e", "f", "g"];

// const newArr = arr.splice(0, 2, "t", "h");
// console.log(newArr);


// let ms = Date.now();

// console.log(ms);


// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();




// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();



//   Write a function sumArray that takes an array of numbers as an argument and returns the sum of all the numbers.

// function SumOfArrayElements (arr) {
//     const sum = arr.reduce((acc, index) => acc + index, 0);
//     return sum;
// };

// const arr = [1, 2, 3, 4, 5];
// const a = SumOfArrayElements(arr);
// console.log(a);





// Write a function isPalindrome that checks if a given string is a palindrome (reads the same forwards and backwards).


// function isPalindrome (str) {
//     const backwardsStr = str.split("").reverse().join("");

//     return str === backwardsStr
//     // return backwardsStr;
// }

// const abc = "anurag";

// isPalindrome(abc);


// 5*4*3*2*1



//    Create a function factorial that calculates the factorial of a given positive integer n

// function factorial (n) {
//     if (n==0 && n==1 && n < 0) {
//         return 1
//     } else {
//         console.log(n * factorial(n-1));
//     };
// };


// factorial(5);





//   Write a function findMax that takes an array of numbers as input and returns the largest number in the array.


// function findMax (arr) {
//     console.log(Math.max(...arr)) 
// };



// function findMax(arr) {
//     let max = arr[0];

//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }


//     console.log(max)
// }

// const array = [34, 53, 212, 23, 3, 85];

// findMax(array);







//   Create a function fibonacci that returns the nth number in the Fibonacci sequence.


// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// let a = fibonacci(10);
// console.log(a);

// n = 10    
// 9 + 8 + 8 + 7 + 7 + 6 + 6 + 5 + 5 + 4 + 4 + 3 + 3 + 2 + 2 + 1







// Create a function countVowels that counts the number of vowels (a, e, i, o, u) in a given string.

// function countVowels (str) {
//     const vowel = "aeiou";
//     let count = 0;

//     for (let x of str) {
//         if (vowel.includes(x)) {
//             count++;
//         }
//     }

//     // return count
//     console.log(count)
// };

// const str = "arieopgertyreooancedreoto";

// countVowels(str);




//  Write a function capitalizeWords that takes a string as input and returns the string with the first letter of each word capitalized.

// function capitalizeWords (str) {
//     const capital = str.toUpperCase();
//     console.log(capital)
// };


// const str = "anurag"
// capitalizeWords(str);





//  Create a function mergeArrays that merges two sorted arrays into one sorted array.

// function mergeArrays (arr1, arr2) {
//     const newArr = [...arr1, ...arr2];
//     console.log(newArr)
// };

// const arr1 = [1, 5, 4];
// const arr2 = [0, 7, 2];

// mergeArrays(arr1, arr2);









//  Write a function removeDuplicates that removes duplicate values from an array and returns the new array with unique values.


// let arr = new Array();
// console.log(arr);


// arr.push(2)
// console.log("Hi", arr);


// const arr = [1, 2, 3, 4, 5];

// arr.forEach((e) => console.log("forEach", e));

// let a = arr.forEach(e => e);
// console.log("forEach", a)

// arr.map((e) => console.log("map", e));






// const fruits = ['apple', 'banana', 'orange', 'mango'];

// // Remove orange
// let a = fruits.splice(2, 1);
// console.log(a);


// let b = fruits.slice(2, 1);
// console.log(b);






// const fruits = ['banana', 'apple', 'orange', 'mango'];

// fruits.sort();

// console.log(fruits); 



// const numbers = [1, 2, [3, 4], [5, [6, [2, 3, 4, [6, 4, 8, 2, [0, 1]]], 7]]];

// const flattenedNumbers = numbers.flat(5);

// console.log(flattenedNumbers);





// check if number is prime or not
// function isPrime (num) {
//     if (num<=1) return false;

//     for (let i=2; i<=Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }

//     return true;
// };


// console.log(isPrime(7));



// const data = [
//     {
//         id: 1,
//         name: "aaa"
//     },
//     {
//         id: 2,
//         name: "sss"
//     },
//     {
//         id: 3,
//         name: "ddd"
//     },
//     {
//         id: 4,
//         name: "fff"
//     }
// ];


// console.log(data[1].name)



// const error = new Error("hello");

// console.log(error);










/// max and min in array

// function findMinMax(arr) {
//     arr.sort((a, b) => a - b);
//     return { min: arr[0], max: arr[arr.length - 1] };
// }

// const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
// const { min, max } = findMinMax(arr);
// console.log(`min-${min} max-${max}`); // Output: min-1 max-423





function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const { min, max } = findMinMax(arr);
console.log(`min-${min} max-${max}`);