const sumAll = function(num1, num2) {
    let bigNum = num2;
    let smallNum = num1;
    let result = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'ERROR';
    }
    else {
        if (num1 > num2) {
            bigNum = num1;
            smallNum = num2;
        }
        for (let i = smallNum; smallNum <= bigNum; smallNum++){
            result += smallNum;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
