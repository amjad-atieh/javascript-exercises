const sumAll = function(min, max)
{
    let sum = 0;

    if (typeof(min) != "number" || typeof(max) != "number" || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max))
        return 'ERROR';
    if (min > max)
    {
        let tmp = min;
        min = max;
        max = tmp;
    }
    for (let i = min; i <= max; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
