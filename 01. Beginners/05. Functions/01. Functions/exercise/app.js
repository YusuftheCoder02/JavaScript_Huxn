// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(num1, num2) {
  num1 === num1 * 2;
  num2 === num2 * 2;
  return "The multiplied numbers are " + num1 + " and " + num2;
}

console.log(myFunction(3, 7));

// Course Solution

function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}

let x = myFunction(4, 3);
console.log(x);