// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
!(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
(n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

////////////////////////////////////////////////////////////////////////
// HW Problems Part 1

// 1. Check if all numbers are divisible by 5. Cashe the result in a variable
let isDivisibleBy5;

if ((n1 % 5) == 0 && (n2 % 5) == 0 && (n3 % 5) == 0 && (n4 % 5) == 0) { // If remainder of dividing by 5 is 0, divides evenly
    isDivisibleBy5 = true;
} else {
    isDivisibleBy5 = false;
}
console.log(isDivisibleBy5);

// 2. Check if the first number is larger than the last. Cache the result in a variable

if (n1 > n4){
    console.log("First is greater than last");
} else {
    console.log("First is less than last");
}

// 3. Accomplish the following arithmetic chain: 
//    - Subtract the first number from the second number
//    - Multiply the result by the third number 
//    - Find the remainder of dividing the result by the fourth number

let result = 0;

result = n1 - n2; // 10 - 15 = -5
result *= n3; // result = -5 * 20 = -100
result /= n4; // result = -100 / 5 = -20
console.log(result); // -20

// 4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate

const myIsOver25 = !((n1 > 25) || (n2 > 25) || (n3 > 25) || (n4 > 25)); // Now it sees if ANY of the numbers are above 25, return true, then with NOT (!) here, it'll return false, since we want to make sure that NONE of the numbers are above 25.

console.log(myIsOver25); // Originally will print out 'true,' because none of the numbers are above 25 currently. Once a number is changed to be over 25, will become false. 

////////////////////////////////////////////////////////////////////////
// HW Problems Part 2 

// Setup
let totalDistance = 1500;
let mph1 = 55;
let mph2 = 60;
let mph3 = 75;
let mpg55 = 30; // at 55mph, 30mpg
let mpg60 = 28; // at 60mph, 28mpg
let mpg75 = 23; // at 75mph, 23mpg
let budget = 175;
let gasPrice = 3;

// 1. How many gallons of fuel will you need for the entire trip?
let gallons1 = 1500 / mpg55;
let gallons2 = 1500 / mpg60;
let gallons3 = 1500 / mpg75;

console.log('\nAt 55mph, gallons required: ' + gallons1 + '. \n' + 
            'At 60mph, gallons required: ' + gallons2 + '. \n' + 
            'At 75mph, gallons required: ' + gallons3 + '. ');

// 2. Will your budget be enough to cover the fuel expense?
let spending1 = gallons1 * gasPrice;
let spending2 = gallons2 * gasPrice;
let spending3 = gallons3 * gasPrice;

console.log('\nAt 55mph, money required: $' + spending1 + '. \n' + 
            'At 60mph, money required: $' + spending2 + '. \n' + 
            'At 75mph, money required: $' +  spending3 + '. \n' +
            'Will not be able to afford going at 75mph.');

// 3. How long will the trip take, in hours?
let hours1 = 1500 / mph1;
let hours2 = 1500 / mph2;
let hours3 = 1500 / mph3;

console.log('\nAt 55mph, hours required: ' + hours1 + '. \n' + 
            'At 60mph, hours required: ' + hours2 + '. \n' + 
            'At 75mph, hours required: ' +  hours3 + '. ');

// 4. Compare the reesults when traveling at an average of 55, 60, and 75 mph. Which makes the most sense for the trip?
console.log('The average speed that makes the most sense to go at for this trip would be 60mph. It gives a balance between spending gas money and making the trip in a somewhat reasonable amount of time.')
