

const fibonacci = function (num)
{
    if (num < 0)
        return "OOPS";
    let fibonacciArray = [0, 1];

    while (fibonacciArray.length <= num)
    {
        fibonacciArray[fibonacciArray.length] = fibonacciArray[fibonacciArray.length - 1]
            + fibonacciArray[fibonacciArray.length - 2];
    }
    return (fibonacciArray[num]);
};

// Do not edit below this line
module.exports = fibonacci;
