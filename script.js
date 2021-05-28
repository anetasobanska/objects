'use strict';
// coding challenge #2
// const aneta = {
//     firstName: 'Aneta',
//     lastName: 'Sobanska',
//     birthYear: 1977,
//     friends: ['Beata', 'Kasia', 'Roger'],
//     job: 'web developer',
//     hasDriverLicense: true,

//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//      },

//      getSummary: function(){
//          return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and she has ${this.hasDriverLicense ? 'a' : 'no'} driver\'s license`;
//      }
// }

// // Aneta has 3 friends, and his best friend is called Kasia.
// console.log(`${aneta.firstName} has ${aneta.friends.length} friends and his best friend is called ${aneta.friends[1]}`);

// // Aneta is a 44-years-old web developer and she has/no driver's license.
// console.log(aneta.getSummary());

////////////////////////////////////////////////////////////////////////////
// coding challenge #3
// const bob = {
//     firstName: 'Bob',
//     lastName: 'Smith',
//     mass: 78,
//     height: 1.69,

//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//      }
// }
// const sam = {
//     firstName: 'Sam',
//     lastName: 'Lebovski',
//     mass: 92,
//     height: 1.95,

//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//      }
// }

// bob.calcBmi();
// sam.calcBmi();

// if(sam.calcBmi() > bob.calcBmi()){
//     console.log(`Sam's BMI (${sam.bmi}) is heigher than Bob's (${bob.bmi})`);
// } else {
//         console.log(`Bob's (${bob.bmi}) is heigher than Sam's BMI (${sam.bmi}) `);
// };

////////////////////////////////////////////////////////////////////////////
// coding challenge #4
// const calcTip = function (bill) {
//   return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }
// console.log(bills, tips, totals);

// const average = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// };
// console.log(average(totals));
// console.log(average(tips));
// console.log(average(bills));

////////////////////////////////////////////////////////////////////////////
// coding challenge #4
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures.
// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let temp = '';
  for (let i = 0; i < arr.length; i++) {
    // temp = temp + `${arr[i]}C in ${i + 1} days... `;
    temp += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('...' + temp);
};
printForecast(data1);
