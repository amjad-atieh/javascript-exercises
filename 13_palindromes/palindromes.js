const palindromes = function (line) {
    line = line.toLowerCase();
    let left = 0; right = line.length - 1;
    while (left < right)
    {
        while (isPunctuation(line[left]))
            left++;
        while (isPunctuation(line[right]))
            right--;
        if (left >= right)
            break;
        if (line[right] != line[left])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isPunctuation(letter)
{
    if (letter == ' ' || letter == '.' || letter == '!' || letter == '?' || letter == ',')
        return true;
    else
        return false;
}

// Do not edit below this line
module.exports = palindromes;
