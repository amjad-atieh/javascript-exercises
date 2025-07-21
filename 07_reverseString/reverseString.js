const reverseString = function(str)
{
    let charArr = [];

    for (let i = str.length - 1; i >= 0; i--)
    {
        charArr.push(str[i]);
    }
    return (charArr.join(''));
};

// Do not edit below this line
module.exports = reverseString;
