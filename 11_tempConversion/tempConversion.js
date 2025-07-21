const convertToCelsius = function(fahrenheit)
{
  const celsius = 5/9 * (fahrenheit - 32);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius)
{
  const fahrenheit = (9/5 * celsius) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
