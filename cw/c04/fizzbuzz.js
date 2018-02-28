// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.
//
// EX:
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 'fizz'
// 7
// 8
// 'fizz'
// 'buzz'

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.



// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.



// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.


// Fuck your fizz, your buzz, and your fizzbuzz!

var divisibleThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];
var divisibleFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var divisibleThreeFive = [15, 30, 45, 60, 75, 90];

/* Easy soltuion for n00bs
for (i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 15 === 0) {
	  console.log('fizzbuzz');

	} else if (i % 3 ===0) {
	  console.log('fizz');

	} else if (i % 5 === 0) {
	  console.log('buzz');

	} else {
	  console.log(i);

	}
}
*/

// Real solution for manly men
for (i = 1; i <= 100; i++){
	if (divisibleThreeFive.includes(i)) {
		console.log('fizzbuzz');
		
	} else if (divisibleThree.includes(i)) {
		console.log('fizz');
		
	} else if (divisibleFive.includes(i)) {
		console.log('buzz');
		
	} else {
		console.log(i);
	}
}