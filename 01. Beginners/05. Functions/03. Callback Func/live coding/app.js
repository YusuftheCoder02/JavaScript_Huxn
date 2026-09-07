// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------
function showCallFunc(callback) {
  const value = 10;
  callback(value);
}

showCallFunc(function (value) {
  console.log(value);
});

// -------------------------------
// function
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument (callback)
greet("Peter", callMe);
// -------------------------------