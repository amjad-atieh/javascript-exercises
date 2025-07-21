const removeFromArray = function(arr)
{
    let i;

    for (let j = 1; j < arguments.length; j++)
    {
        i = 0;
        while (i < arr.length)
        {
            if (arr[i] === arguments[j])
                arr.splice(i, 1);
            else
                i++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
