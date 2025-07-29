const { useReducer } = require("react");

const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
	return arr.reduce(function(sum, item) {sum += item;return sum;}, 0);
};

const multiply = function(arr) {
  return arr.reduce(function(sum, item) {sum = sum * item;return sum;}, 1);
};

const power = function(base, exponent) {
	return (base ** exponent);
};

const factorial = function(num) {
	let res = 1;
  for (let i = num; i > 0; --i)
  {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
