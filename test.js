// Define the library as an object (namespaced to avoid global pollution)
var MyMathLibrary = MyMathLibrary || {};

// Add a function to the library
MyMathLibrary.addNumbers = function (num1, num2) {
  return num1 + num2;
};

// Export the library for use in CommonJS environments (Node.js)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = MyMathLibrary;
}
