// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

// My solution without help

function showCallFunc(fn) {
  let value = 10;
  fn(value);
}

function displayValue(value) {
  console.log(value);
}

showCallFunc(displayValue);

// Course Solution

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});