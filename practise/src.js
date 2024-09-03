// function findMaxDifferencePair(heights) {
//     let maxDiff = -Infinity;
//     let resultPair = [];

//     // Iterate through all possible pairs
//     for (let i = 0; i < heights.length; i++) {
//         for (let j = i + 1; j < heights.length; j++) {
//             let diff = heights[i] - heights[j];
//             if (diff > maxDiff) {
//                 maxDiff = diff;
//                 resultPair = [heights[i], heights[j]];
//             }
//         }
//     }

//     return resultPair;
// }

// // Example usage:
// let heights = [160, 130, 970, 10, 690, 100];
// let result = findMaxDifferencePair(heights);
// console.log(result); // Output: [160, 100]





// const arr = [160, 130, 970, 10, 690, 100];


// const secondLargestNumber = () => {

//     let a = [];

//     for (let i=0; i<arr.length; i++) {
//         let b = a.push(arr[i]);
//         console.log(b);
//     }
// }

// secondLargestNumber();



// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
//     console.log(number);
// });


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(number => number);

// console.log(doubledNumbers);



// const numbers = [1, 2, 3, 4];
// const found = numbers.find(number => number > 5);
// console.log(found); // 3




// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };


// // let age = person["age"];
// let age = person[2];

// console.log(age)

// console.log(person.age)



// Original Array
// let courses = ["HTML", "CSS", "JavaScript", "React"];

// // Joining the array elements
// console.log(courses.join('|'));



const arr = [30, 40, 50, 60, 70];
const a = arr.shift