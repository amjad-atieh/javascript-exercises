const getTheTitles = function(objArr) {
    return objArr.reduce(function(titleArr, book, index) {
        titleArr[index] = book.title;
        return titleArr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
