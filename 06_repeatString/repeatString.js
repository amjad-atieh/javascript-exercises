const repeatString = function(str, num)
{
    if (num < 0)
        return 'ERROR';
    let strCpy = '';

    for (let i = 0; i < num; i++)
    {
        strCpy += str;
    }
    return strCpy;
};

// Do not edit below this line
module.exports = repeatString;
